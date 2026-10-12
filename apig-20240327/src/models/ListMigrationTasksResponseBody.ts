// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMigrationTasksResponseBodyDataItemsIngressConfig extends $dara.Model {
  /**
   * @remarks
   * The monitored Ingress Class.
   * 
   * @example
   * nginx
   */
  ingressClass?: string;
  /**
   * @remarks
   * The monitored namespace.
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
   * The listener port. Valid values: 1 to 65535. This parameter is required in Step 3 of the frontend form.
   * 
   * @example
   * 443
   */
  port?: number;
  /**
   * @remarks
   * The listener protocol. This parameter is required for CLB migration. During MSE migration validation, CLB requests without a protocol are directly rejected. See migrationtask.go#L95-L97. This parameter can be left empty for NLB scenarios.
   * 
   * @example
   * tcp
   */
  protocol?: string;
  /**
   * @remarks
   * The virtual server group ID. For CLB, this is the VServerGroupId. For NLB, this is the ServerGroupId. This parameter is required in Step 3 of the frontend form.
   * 
   * @example
   * rsp-xxxx
   */
  virtualServiceGroupId?: string;
  /**
   * @remarks
   * The name of the virtual server group.
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
   * The source ACK cluster. A hyphen (-) is displayed if the cluster name fails to be queried.
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
   * The namespace for SLB traffic switching.
   * 
   * @example
   * default
   */
  clusterNamespace?: string;
  /**
   * @remarks
   * The creation time, in Unix seconds.
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
   * The monitored Ingress Class configuration.
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
   * The traffic switching method. Valid values: DNS and SLB.
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
   * The list of virtual server groups.
   */
  virtualServices?: ListMigrationTasksResponseBodyDataItemsVirtualServices[];
  /**
   * @remarks
   * The weight of the service on the API gateway side in the legacy workflow. Valid values: 0 to 100.
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
   * The list of migration tasks.
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

