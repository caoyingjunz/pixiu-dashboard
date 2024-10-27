const makeObjectMetadata = (data) => {
  if (data.enableMetadata) {
    if (data.labels.length !== 0) {
      let newLabels = {};
      for (let l of data.labels) {
        newLabels[l.key] = l.value;
      }
    }
    if (data.annotations.length !== 0) {
      let newAnnotations = {};
      for (let a of data.annotations) {
        newAnnotations[a.key] = a.value;
      }
    }

    return newLabels, newAnnotations;
  }
};
export { makeObjectMetadata };

const makePodTemplate = (data) => {
  let tplSpec = {
    restartPolicy: data.restartPolicy,
  };

  if (data.choiceNode) {
    let nodeSelects = {};
    for (let nodeSelectLabel of data.nodeSelectLabels) {
      nodeSelects[nodeSelectLabel.key] = nodeSelectLabel.value;
    }
    tplSpec['nodeSelector'] = nodeSelects;
  }

  if (data.hostNetwork) {
    tplSpec['hostNetwork'] = true;
  }

  let targetContainers = [];
  for (let fc of data.containers) {
    let targetContainer = {
      name: fc.name,
      image: fc.image,
      imagePullPolicy: fc.imagePullPolicy,
    };
    if (fc.advance) {
      // 资源设置
      if (
        fc.cpuRequst !== '' ||
        fc.cpuLimit !== '' ||
        fc.memoryRequst !== '' ||
        fc.memoryLimit !== ''
      ) {
        let resources = {};
        if (fc.cpuLimit !== '' || fc.memoryLimit !== '') {
          resources['limits'] = {};
          if (fc.cpuLimit !== '') {
            resources['limits']['cpu'] = fc.cpuLimit;
          }
          if (fc.memoryLimit !== '') {
            resources['limits']['memory'] = fc.memoryLimit;
          }
        }

        if (fc.cpuRequst !== '' || fc.memoryRequst !== '') {
          resources['requests'] = {};
          if (fc.cpuRequst !== '') {
            resources['requests']['cpu'] = fc.cpuRequst;
          }
          if (fc.memoryRequst !== '') {
            resources['requests']['memory'] = fc.memoryRequst;
          }
        }
        targetContainer['resources'] = resources;
      }

      if (fc.choicePort) {
        let pps = [];
        for (let p of fc.ports) {
          pps.push({
            name: p.name,
            protocol: p.protocol,
            containerPort: parseInt(p.containerPort),
          });
        }
        targetContainer['ports'] = pps;
      }

      if (fc.choiceEnv) {
        let es = [];
        for (let e of fc.envs) {
          es.push({ name: e.key, value: e.value });
        }
        targetContainer['env'] = es;
      }
      if (fc.choiceCmd) {
        if (fc.cmds.cmd !== '') {
          targetContainer['command'] = fc.cmds.cmd.split(',');
        }
        if (fc.cmds.args !== '') {
          targetContainer['args'] = fc.cmds.args.split(',');
        }
      }
      targetContainers.push(targetContainer);
    }
    tplSpec['containers'] = targetContainers;
  }
  return tplSpec;
};
export { makePodTemplate };
