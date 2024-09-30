import http from '@/utils/http';
import { awaitWrap } from '@/utils/utils';

export const getCronJobList = async (cluster, namespace) => {
  let url = `/pixiu/proxy/${cluster}/apis/batch/v1/namespaces/${namespace}/cronjobs`;
  if (namespace === '全部空间') {
    url = `/pixiu/proxy/${cluster}/apis/batch/v1/cronjobs`;
  }
  const [err, result] = await awaitWrap(
    http({
      method: 'get',
      url: url,
      data: {
        limit: 500,
      },
    }),
  );
  return [result, err];
};

export const patchCronJob = async (cluster, namespace, name, data) => {
  const [err, result] = await awaitWrap(
    http({
      method: 'patch',
      url: `/pixiu/proxy/${cluster}/apis/batch/v1/namespaces/${namespace}/cronjobs/${name}`,
      data: data,
      config: {
        headers: {
          'Content-Type': 'application/merge-patch+json',
        },
      },
    }),
  );

  return [result, err];
};
