// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListK8sIngressRulesResponseBodyDataIngressConfsRulesPathsBackend extends $dara.Model {
  /**
   * @remarks
   * The name of the backend Service.
   * 
   * @example
   * http-service
   */
  serviceName?: string;
  /**
   * @remarks
   * The port of the backend Service.
   * 
   * @example
   * 8080
   */
  servicePort?: string;
  static names(): { [key: string]: string } {
    return {
      serviceName: 'ServiceName',
      servicePort: 'ServicePort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceName: 'string',
      servicePort: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sIngressRulesResponseBodyDataIngressConfsRulesPaths extends $dara.Model {
  /**
   * @remarks
   * The ID of the EDAS application.
   * 
   * @example
   * 43d30ba5-c568-460c-8080-d447ed1a****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the EDAS application.
   * 
   * @example
   * my-app
   */
  appName?: string;
  /**
   * @remarks
   * The configurations of the backend Service.
   */
  backend?: ListK8sIngressRulesResponseBodyDataIngressConfsRulesPathsBackend;
  /**
   * @remarks
   * The collection rate that is set based on the trace query feature. You can add a trace ID to a gateway to use the trace query feature of EDAS.
   * 
   * @example
   * 100
   */
  collectRate?: number;
  /**
   * @remarks
   * The path to be accessed.
   * 
   * @example
   * /foo/bar
   */
  path?: string;
  /**
   * @remarks
   * The path type that determines how a path is matched.
   * 
   * *   ImplementationSpecific (default)
   * *   Exact
   * *   Prefix
   * 
   * @example
   * ImplementationSpecific
   */
  pathType?: string;
  /**
   * @remarks
   * The state of the Ingress. Valid values:
   * 
   * *   **Normal**: The Ingress works as expected.
   * *   **ServiceNotFound**: The backend Service does not exist.
   * *   **InvalidServicePort**: The Service port is invalid.
   * *   **NotManagedService**: The Service is not managed by EDAS.
   * *   **Unknown**: An unknown error occurred.
   * 
   * @example
   * Normal
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      backend: 'Backend',
      collectRate: 'CollectRate',
      path: 'Path',
      pathType: 'PathType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      backend: ListK8sIngressRulesResponseBodyDataIngressConfsRulesPathsBackend,
      collectRate: 'number',
      path: 'string',
      pathType: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.backend && typeof (this.backend as any).validate === 'function') {
      (this.backend as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sIngressRulesResponseBodyDataIngressConfsRules extends $dara.Model {
  /**
   * @remarks
   * Indicates whether TLS is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  enableTls?: boolean;
  /**
   * @remarks
   * The domain name to be accessed.
   * 
   * @example
   * example.com
   */
  host?: string;
  /**
   * @remarks
   * The paths to be accessed.
   */
  paths?: ListK8sIngressRulesResponseBodyDataIngressConfsRulesPaths[];
  /**
   * @remarks
   * The name of the Secret that stores the Transport Layer Security (TLS) certificate.
   * 
   * @example
   * my-secret
   */
  secretName?: string;
  static names(): { [key: string]: string } {
    return {
      enableTls: 'EnableTls',
      host: 'Host',
      paths: 'Paths',
      secretName: 'SecretName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableTls: 'boolean',
      host: 'string',
      paths: { 'type': 'array', 'itemType': ListK8sIngressRulesResponseBodyDataIngressConfsRulesPaths },
      secretName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.paths)) {
      $dara.Model.validateArray(this.paths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sIngressRulesResponseBodyDataIngressConfs extends $dara.Model {
  /**
   * @remarks
   * The ID of the ALB instance.
   * 
   * @example
   * alb-5sde0tq62r********
   */
  albId?: string;
  /**
   * @remarks
   * The annotations.
   * 
   * @example
   * {"test-annotation":"test-annotation-value"}
   */
  annotations?: string;
  /**
   * @remarks
   * The time when the Ingress was created.
   * 
   * @example
   * 2021-04-27 20:16:52
   */
  creationTime?: string;
  /**
   * @remarks
   * The monitoring URL of the Ingress.
   * 
   * @example
   * http://grafana.console.aliyun.com/d/10xxxx/ingress
   */
  dashboardUrl?: string;
  /**
   * @remarks
   * The IP address of the Ingress.
   * 
   * @example
   * 47.11x.xx.xx
   */
  endpoint?: string;
  /**
   * @remarks
   * The Ingress type. Valid values:
   * 
   * *   **NginxIngress**: NGINX Ingress controller
   * *   **AlbIngress**: ALB Ingress controller
   * 
   * Default value: NginxIngress.
   * 
   * @example
   * NginxIngress
   */
  ingressType?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {"test-label": "test-labels"}
   */
  labels?: string;
  /**
   * @remarks
   * The ID of the MSE gateway.
   * 
   * @example
   * gw-xxxxxxxx
   */
  mseGatewayId?: string;
  /**
   * @remarks
   * The name of the MSE gateway.
   * 
   * @example
   * gw-test-name
   */
  mseGatewayName?: string;
  /**
   * @remarks
   * The Ingress name.
   * 
   * @example
   * my-ingress
   */
  name?: string;
  /**
   * @remarks
   * The Kubernetes namespace to which the Ingress belongs.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The URL used for basic monitoring of the open source version.
   * 
   * @example
   * https://g.console.aliyun.com/d/xxxxxx/nginx-ingress-dashboard-official
   */
  officalBasicUrl?: string;
  /**
   * @remarks
   * The URL used for request performance monitoring of the open source version.
   * 
   * @example
   * https://g.console.aliyun.com/d/xxxxxx/request-handling-performance-official
   */
  officalRequestUrl?: string;
  /**
   * @remarks
   * The routing rules.
   */
  rules?: ListK8sIngressRulesResponseBodyDataIngressConfsRules[];
  /**
   * @remarks
   * Indicates whether SSL redirection is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  sslRedirect?: boolean;
  static names(): { [key: string]: string } {
    return {
      albId: 'AlbId',
      annotations: 'Annotations',
      creationTime: 'CreationTime',
      dashboardUrl: 'DashboardUrl',
      endpoint: 'Endpoint',
      ingressType: 'IngressType',
      labels: 'Labels',
      mseGatewayId: 'MseGatewayId',
      mseGatewayName: 'MseGatewayName',
      name: 'Name',
      namespace: 'Namespace',
      officalBasicUrl: 'OfficalBasicUrl',
      officalRequestUrl: 'OfficalRequestUrl',
      rules: 'Rules',
      sslRedirect: 'SslRedirect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albId: 'string',
      annotations: 'string',
      creationTime: 'string',
      dashboardUrl: 'string',
      endpoint: 'string',
      ingressType: 'string',
      labels: 'string',
      mseGatewayId: 'string',
      mseGatewayName: 'string',
      name: 'string',
      namespace: 'string',
      officalBasicUrl: 'string',
      officalRequestUrl: 'string',
      rules: { 'type': 'array', 'itemType': ListK8sIngressRulesResponseBodyDataIngressConfsRules },
      sslRedirect: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sIngressRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * 5b2b4ab4-efbc-4a81-9c45-a5942881****
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * my-dev-cluster
   */
  clusterName?: string;
  /**
   * @remarks
   * The Ingresses.
   */
  ingressConfs?: ListK8sIngressRulesResponseBodyDataIngressConfs[];
  /**
   * @remarks
   * The ID of the Alibaba Cloud region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      ingressConfs: 'IngressConfs',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      ingressConfs: { 'type': 'array', 'itemType': ListK8sIngressRulesResponseBodyDataIngressConfs },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ingressConfs)) {
      $dara.Model.validateArray(this.ingressConfs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sIngressRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response data.
   */
  data?: ListK8sIngressRulesResponseBodyData[];
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5C1C9DE7-88FF-4B56-A47B-3DBBCEB******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListK8sIngressRulesResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

