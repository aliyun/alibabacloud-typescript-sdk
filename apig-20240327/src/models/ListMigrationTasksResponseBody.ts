// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMigrationTasksResponseBodyDataItemsIngressConfig extends $dara.Model {
  /**
   * @remarks
   * The Ingress class of the listener.
   * 
   * @example
   * nginx
   */
  ingressClass?: string;
  /**
   * @remarks
   * The namespace watched by the listener.
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

export class ListMigrationTasksResponseBodyDataItemsVirtualServices extends $dara.Model {
  /**
   * @remarks
   * The listening port. Valid values: 1 to 65535. This field is required in Step 3 on the frontend.
   * 
   * @example
   * 443
   */
  port?: number;
  /**
   * @remarks
   * The listening protocol. This field is required for CLB migration. If the protocol is missing during MSE migration validation for CLB, the request is directly rejected. This field can be left empty for NLB scenarios.
   * 
   * @example
   * tcp
   */
  protocol?: string;
  /**
   * @remarks
   * The virtual server group ID. For CLB, this is VServerGroupId. For NLB, this is ServerGroupId. This field is required in the Step 3 form on the frontend and is validated to be non-empty.
   * 
   * @example
   * rsp-xxxx
   */
  virtualServiceGroupId?: string;
  /**
   * @remarks
   * The name of the group.
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

export class ListMigrationTasksResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The associated HTTP API.
   * 
   * @example
   * api-xxxx
   */
  apiId?: string;
  /**
   * @remarks
   * The associated HTTP API.
   * 
   * @example
   * api-name
   */
  apiName?: string;
  /**
   * @remarks
   * The source ACK cluster ID. A hyphen (-) is returned if the name query fails.
   * 
   * @example
   * c-xxxxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * vpc_hz_domain_1
   */
  clusterName?: string;
  /**
   * @remarks
   * The namespace for SLB traffic shifting.
   * 
   * @example
   * default
   */
  clusterNamespace?: string;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in seconds.
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
   * Migration test
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
   * The name of the gateway to which the rule belongs.
   * 
   * @example
   * prod-gateway
   */
  gatewayName?: string;
  /**
   * @remarks
   * The Ingress class of the listener.
   */
  ingressConfig?: ListMigrationTasksResponseBodyDataItemsIngressConfig;
  /**
   * @remarks
   * The migration type. Currently, only Nginx Ingress is supported.
   * 
   * @example
   * Nginx Ingress
   */
  migrationType?: string;
  /**
   * @remarks
   * The name of the SLB service.
   * 
   * @example
   * nginx-ingress-lb
   */
  serviceName?: string;
  /**
   * @remarks
   * The ID of the SLB instance for traffic shifting.
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
   * The traffic shifting method. Valid values: DNS and SLB.
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
   * The ID of the owner user.
   * 
   * @example
   * 1234567890
   */
  userId?: string;
  /**
   * @remarks
   * The list of virtual server groups.
   */
  virtualServices?: ListMigrationTasksResponseBodyDataItemsVirtualServices[];
  /**
   * @remarks
   * The service weight on the APIG side in the legacy process. Valid values: 0 to 100.
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
      ingressConfig: ListMigrationTasksResponseBodyDataItemsIngressConfig,
      migrationType: 'string',
      serviceName: 'string',
      slbId: 'string',
      status: 'string',
      switchType: 'string',
      taskId: 'string',
      userId: 'string',
      virtualServices: { 'type': 'array', 'itemType': ListMigrationTasksResponseBodyDataItemsVirtualServices },
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

export class ListMigrationTasksResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The items.
   */
  items?: ListMigrationTasksResponseBodyDataItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 25
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListMigrationTasksResponseBodyDataItems },
      pageNumber: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMigrationTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListMigrationTasksResponseBodyData;
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
   * 019FB5FB-615B-52AB-A92F-D40A3193DA96
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
      data: ListMigrationTasksResponseBodyData,
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

