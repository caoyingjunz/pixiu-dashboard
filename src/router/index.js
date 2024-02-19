import { createRouter, createWebHashHistory } from 'vue-router';

import Layout from '@/layout/index.vue';
import {
  Home,
  Login,
  Register,
  Role,
  User,
  Menu,
  Cicd,
  Cluster,
  InsertCluster,
  CreateCluster,
  Kubernetes,
  Deployment,
  CreateDeployment,
  EditDeployment,
  DeploymentDetail,
  Release,
  Terminal,
  Monitor,
  Node,
  NodeDetail,
  NotFound,
  Operator,
  Service,
  ServiceDetail,
  CreateService,
  EditService,
  Ingress,
  CreateIngress,
  EditIngress,
  ConfigMap,
  CreateConfigMap,
  EditConfigMap,
  Secret,
  CreateSecret,
  EditSecret,
  StatefulSet,
  StorageClass,
  CreateStorageClass,
  EditStorageClass,
  Info,
  Pod,
  PodDetail,
  CreatePod,
  Namespace,
  CreateNamespace,
  NamespaceDetail,
} from '@/page';

const routes = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    // 布局项
    path: '/',
    meta: {
      title: '概览',
    },
    component: Layout,
    children: [
      {
        // 首页
        path: 'index',
        name: 'Index',
        meta: {
          title: '概览',
        },
        component: Home,
      },
      {
        path: 'clusters',
        name: 'Cluster',
        meta: {
          title: '容器服务',
        },
        component: Cluster,
      },
      {
        path: 'clusters/insertCluster',
        name: 'InsertCluster',
        meta: {
          title: '导入集群',
        },
        component: InsertCluster,
      },
      {
        path: 'clusters/createCluster',
        name: 'CreateCluster',
        meta: {
          title: '创建集群',
        },
        component: CreateCluster,
      },
      {
        path: 'kubernetes',
        name: 'Kubernetes',
        meta: {
          title: 'kubernetes',
        },
        component: Kubernetes,
        children: [
          {
            path: 'info',
            name: 'Info',
            meta: {
              title: 'info',
            },
            component: Info,
          },
          {
            path: 'nodes',
            name: 'Node',
            meta: {
              title: 'node',
            },
            component: Node,
          },
          {
            path: 'namespaces',
            name: 'Namespace',
            meta: {
              title: 'namespace',
            },
            component: Namespace,
          },
          {
            path: 'deployments',
            name: 'Deployment',
            meta: {
              title: 'deployment',
            },
            component: Deployment,
          },
          {
            path: 'statefulsets',
            name: 'statefulset',
            meta: {
              title: 'statefulset',
            },
            component: StatefulSet,
          },
          {
            path: 'release',
            name: 'Release',
            meta: {
              title: 'release',
            },
            component: Release,
          },
          {
            path: 'pods',
            name: 'Pod',
            meta: {
              title: 'pod',
            },
            component: Pod,
          },
          {
            path: 'pods/detail',
            name: 'PodDetail',
            meta: {
              title: 'PodDetail',
            },
            component: PodDetail,
          },
          {
            path: 'deployments/detail',
            name: 'DeploymentDetail',
            meta: {
              title: 'DeploymentDetail',
              // noPadding: true,
            },
            component: DeploymentDetail,
          },
          {
            path: 'operator',
            name: 'Operator',
            meta: {
              title: 'operator',
            },
            component: Operator,
          },
          {
            path: 'terminal',
            name: 'Terminal',
            meta: {
              title: 'terminal',
            },
            component: Terminal,
          },
          {
            path: 'monitor',
            name: 'Monitor',
            meta: {
              title: 'monitor',
            },
            component: Monitor,
          },
          {
            path: 'services',
            name: 'Service',
            meta: {
              title: 'service',
            },
            component: Service,
          },

          {
            path: 'services/detail',
            name: 'ServiceDetail',
            meta: {
              title: 'ServiceDetail',
            },
            component: ServiceDetail,
          },
          {
            path: 'ingress',
            name: 'Ingress',
            meta: {
              title: 'ingress',
            },
            component: Ingress,
          },

          {
            path: 'configmaps',
            name: 'ConfigMap',
            meta: {
              title: 'configmap',
            },
            component: ConfigMap,
          },
          {
            path: 'secrets',
            name: 'Secret',
            meta: {
              title: 'secret',
            },
            component: Secret,
          },
          {
            path: 'storageclass',
            name: 'StorageClass',
            meta: {
              title: 'storageclass',
            },
            component: StorageClass,
          },
        ],
      },
      // 命名空间路由
      {
        path: 'namespaces/createNamespace',
        name: 'CreateNamespace',
        meta: {
          title: 'createNamespace',
        },
        component: CreateNamespace,
      },
      {
        path: 'namespaces/namespaceDetail',
        name: 'NamespaceDetail',
        meta: {
          title: 'namespaceDetail',
        },
        component: NamespaceDetail,
      },
      // storageclasses 路由
      {
        path: 'storageclasses/createStorageClass',
        name: 'CreateStorageClass',
        meta: {
          title: 'CreateStorageclass',
        },
        component: CreateStorageClass,
      },
      {
        path: 'storageclasses/editStorageClass',
        name: 'EditStorageClass',
        meta: {
          title: 'EditStorageClass',
        },
        component: EditStorageClass,
      },
      // service 路由
      {
        path: 'services/createService',
        name: 'CreateService',
        meta: {
          title: 'CreateService',
        },
        component: CreateService,
      },
      {
        path: 'services/editService',
        name: 'EditService',
        meta: {
          title: 'EditService',
        },
        component: EditService,
      },
      // ingress 创建和编辑路由
      {
        path: 'ingresses/createIngress',
        name: 'CreateIngress',
        meta: {
          title: 'CreateIngress',
        },
        component: CreateIngress,
      },
      {
        path: 'ingresses/editIngress',
        name: 'EditIngress',
        meta: {
          title: 'EditIngress',
        },
        component: EditIngress,
      },
      // configMap 创建和编辑路由
      {
        path: 'configmaps/createConfigMap',
        name: 'createConfigMap',
        meta: {
          title: 'createConfigMap',
        },
        component: CreateConfigMap,
      },
      {
        path: 'configmaps/editConfigMap',
        name: 'editConfigMap',
        meta: {
          title: 'editConfigMap',
        },
        component: EditConfigMap,
      },

      // secret 路由
      {
        path: 'secrets/editSecret',
        name: 'editSecret',
        meta: {
          title: 'editSecret',
        },
        component: EditSecret,
      },
      {
        path: 'secrets/createSecret',
        name: 'createSecret',
        meta: {
          title: 'createSecret',
        },
        component: CreateSecret,
      },
      {
        path: 'pods/createPod',
        name: 'CreatePod',
        meta: {
          title: 'CreatePod',
        },
        component: CreatePod,
      },
      {
        path: 'deployments/createDeployment',
        name: 'CreateDeployment',
        meta: {
          title: 'CreateDeployment',
        },
        component: CreateDeployment,
      },
      {
        path: 'deployments/editDeployment',
        name: 'EditDeployment',
        meta: {
          title: 'EditDeployment',
        },
        component: EditDeployment,
      },
      {
        path: 'nodes/detail',
        name: 'NodeDetail',
        meta: {
          title: 'NodeDetail',
        },
        component: NodeDetail,
      },
      {
        path: 'cicd',
        name: 'Cicd',
        meta: {
          title: 'DevOps',
        },
        component: Cicd,
      },
      {
        path: 'user',
        name: 'User',
        meta: {
          title: '用户',
        },
        component: User,
      },
      {
        path: 'role',
        name: 'Role',
        meta: {
          title: '角色',
        },
        component: Role,
      },
      {
        path: 'menu',
        name: 'Menu',
        meta: {
          title: '权限',
        },
        component: Menu,
      },
    ],
  },
  {
    // 登陆界面
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    // 用户注册路由
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/podshell',
    name: 'PodShell',
    component: Terminal,
  },
  { path: '/:pathMatch(.*)', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from) => {
  const token = localStorage.getItem('token');
  if (!token && to.fullPath !== '/login') {
    return { name: 'Login' };
  }
  if (token && to.fullPath === '/login') {
    return { name: 'Index' };
  }
});

const setupRouter = (app) => {
  app.use(router);
};

export { setupRouter, router };
