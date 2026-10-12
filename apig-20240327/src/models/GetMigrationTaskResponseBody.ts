// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMigrationTaskResponseBodyDataIngressConfig extends $dara.Model {
  /**
   * @remarks
   * The Ingress class to listen on.
   * 
   * @example
   * nginx
   */
  ingressClass?: string;
  /**
   * @remarks
   * The namespace in which to listen for Ingress resources.
   * 
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
   * @remarks
   * The port.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The protocol. This parameter is required for CLB.
   * 
   * @example
   * tcp
   */
  protocol?: string;
  /**
   * @remarks
   * The backend server group ID.
   * 
   * @example
   * rsp-xxxx
   */
  virtualServiceGroupId?: string;
  /**
   * @remarks
   * The name.
   * 
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
   * @remarks
   * The ID of the associated HTTP API.
   * 
   * @example
   * api-xxxx
   */
  apiId?: string;
  /**
   * @remarks
   * The API name. This value may be empty.
   * 
   * @example
   * ingress-api
   */
  apiName?: string;
  /**
   * @remarks
   * The ID of the source ACK cluster.
   * 
   * @example
   * c-xxxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the source cluster. The name is retrieved by looking up the service source based on gatewayId and clusterId. If the lookup fails, a hyphen (-) is returned as a fallback.
   * 
   * @example
   * my-cluster
   */
  clusterName?: string;
  /**
   * @remarks
   * The namespace of the source cluster. This value is selected during SLB traffic switching.
   * 
   * @example
   * default
   */
  clusterNamespace?: string;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in seconds. Multiply the value by 1000 on the frontend before formatting.
   * 
   * @example
   * 1756262400
   */
  createTime?: number;
  /**
   * @remarks
   * The task description.
   * 
   * @example
   * workspace api monitor test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the destination environment.
   * 
   * @example
   * env-xxxx
   */
  envId?: string;
  /**
   * @remarks
   * The ID of the destination gateway.
   * 
   * @example
   * gw-xxxx
   */
  gatewayId?: string;
  /**
   * @remarks
   * The name of the destination gateway. If the query fails, a hyphen (-) is returned as a fallback without blocking the return of the main task information.
   * 
   * @example
   * my-gateway
   */
  gatewayName?: string;
  /**
   * @remarks
   * The Ingress configuration.
   */
  ingressConfig?: GetMigrationTaskResponseBodyDataIngressConfig;
  /**
   * @remarks
   * The migration type.
   * [_single.resp.200.props.data.migrationType.enum.Nginx Ingress]Nginx Ingress migration.
   * 
   * @example
   * Nginx Ingress
   */
  migrationType?: string;
  /**
   * @remarks
   * The name of the selected SLB service.
   * 
   * @example
   * nginx-ingress-lb
   */
  serviceName?: string;
  /**
   * @remarks
   * The ID of the SLB instance used for traffic switching.
   * 
   * @example
   * lb-bp1xxxx
   */
  slbId?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * FlowSwitch
   */
  status?: string;
  /**
   * @remarks
   * The traffic switching method.
   * 
   * @example
   * SLB
   */
  switchType?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * mt-xxxxxxxx
   */
  taskId?: string;
  /**
   * @remarks
   * The ID of the user to whom the task belongs.
   * 
   * @example
   * 1234567890
   */
  userId?: string;
  /**
   * @remarks
   * The list of SLB virtual server groups.
   */
  virtualServices?: GetMigrationTaskResponseBodyDataVirtualServices[];
  /**
   * @remarks
   * The weight of the APIG-side service in the legacy flow (0-100).
   * 
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
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetMigrationTaskResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
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

