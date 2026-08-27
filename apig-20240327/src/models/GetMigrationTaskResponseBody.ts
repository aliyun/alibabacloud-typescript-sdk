// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMigrationTaskResponseBodyDataIngressConfig extends $dara.Model {
  /**
   * @example
   * nginx
   */
  ingressClass?: string;
  /**
   * @example
   * default
   */
  watchNamespace?: string;
  static names(): { [key: string]: string } {
    return {
      ingressClass: 'ingressClass',
      watchNamespace: 'watchNamespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ingressClass: 'string',
      watchNamespace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMigrationTaskResponseBodyDataVirtualServices extends $dara.Model {
  /**
   * @example
   * 80
   */
  port?: number;
  /**
   * @example
   * tcp
   */
  protocol?: string;
  /**
   * @example
   * rsp-xxxx
   */
  virtualServiceGroupId?: string;
  /**
   * @example
   * 80-tcp
   */
  virtualServiceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'port',
      protocol: 'protocol',
      virtualServiceGroupId: 'virtualServiceGroupId',
      virtualServiceGroupName: 'virtualServiceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      protocol: 'string',
      virtualServiceGroupId: 'string',
      virtualServiceGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMigrationTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * api-xxxx
   */
  apiId?: string;
  /**
   * @example
   * ingress-api
   */
  apiName?: string;
  /**
   * @example
   * c-xxxxxx
   */
  clusterId?: string;
  /**
   * @example
   * my-cluster
   */
  clusterName?: string;
  /**
   * @example
   * default
   */
  clusterNamespace?: string;
  /**
   * @example
   * 1756262400
   */
  createTime?: number;
  /**
   * @example
   * workspace api monitor test
   */
  description?: string;
  /**
   * @example
   * env-xxxx
   */
  envId?: string;
  /**
   * @example
   * gw-xxxx
   */
  gatewayId?: string;
  /**
   * @example
   * my-gateway
   */
  gatewayName?: string;
  ingressConfig?: GetMigrationTaskResponseBodyDataIngressConfig;
  /**
   * @example
   * Nginx Ingress
   */
  migrationType?: string;
  /**
   * @example
   * nginx-ingress-lb
   */
  serviceName?: string;
  /**
   * @example
   * lb-bp1xxxx
   */
  slbId?: string;
  /**
   * @example
   * FlowSwitch
   */
  status?: string;
  /**
   * @example
   * SLB
   */
  switchType?: string;
  /**
   * @example
   * mt-xxxxxxxx
   */
  taskId?: string;
  /**
   * @example
   * 1234567890
   */
  userId?: string;
  virtualServices?: GetMigrationTaskResponseBodyDataVirtualServices[];
  /**
   * @example
   * 50
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      apiId: 'apiId',
      apiName: 'apiName',
      clusterId: 'clusterId',
      clusterName: 'clusterName',
      clusterNamespace: 'clusterNamespace',
      createTime: 'createTime',
      description: 'description',
      envId: 'envId',
      gatewayId: 'gatewayId',
      gatewayName: 'gatewayName',
      ingressConfig: 'ingressConfig',
      migrationType: 'migrationType',
      serviceName: 'serviceName',
      slbId: 'slbId',
      status: 'status',
      switchType: 'switchType',
      taskId: 'taskId',
      userId: 'userId',
      virtualServices: 'virtualServices',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      clusterId: 'string',
      clusterName: 'string',
      clusterNamespace: 'string',
      createTime: 'number',
      description: 'string',
      envId: 'string',
      gatewayId: 'string',
      gatewayName: 'string',
      ingressConfig: GetMigrationTaskResponseBodyDataIngressConfig,
      migrationType: 'string',
      serviceName: 'string',
      slbId: 'string',
      status: 'string',
      switchType: 'string',
      taskId: 'string',
      userId: 'string',
      virtualServices: { 'type': 'array', 'itemType': GetMigrationTaskResponseBodyDataVirtualServices },
      weight: 'number',
    };
  }

  validate() {
    if(this.ingressConfig && typeof (this.ingressConfig as any).validate === 'function') {
      (this.ingressConfig as any).validate();
    }
    if(Array.isArray(this.virtualServices)) {
      $dara.Model.validateArray(this.virtualServices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMigrationTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetMigrationTaskResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 42EAF9DB-9082-5F11-8EE1-C2357906DA0F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetMigrationTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

