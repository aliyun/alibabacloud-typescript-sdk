// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServicesRequest extends $dara.Model {
  /**
   * @remarks
   * Filters services by visibility. PUBLIC indicates a public service, and PRIVATE indicates a private service.
   * 
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @remarks
   * Specifies whether elastic scaling is enabled for the service.
   * 
   * @example
   * true
   */
  autoscalerEnabled?: boolean;
  /**
   * @remarks
   * The UID of the account that created the service.
   * 
   * @example
   * 19989224166xxxxxxx
   */
  callerUid?: string;
  /**
   * @remarks
   * Specifies whether scheduled scaling is enabled for the service.
   * 
   * @example
   * true
   */
  cronscalerEnabled?: boolean;
  /**
   * @remarks
   * The fuzzy match field. Only fuzzy matching by service name is supported.
   * 
   * @example
   * foo
   */
  filter?: string;
  /**
   * @remarks
   * The ID of the private gateway.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gateway?: string;
  /**
   * @remarks
   * The name of the service group. For information about how to obtain the service group name, see [ListServices](https://help.aliyun.com/document_detail/412109.html).
   * 
   * @example
   * foo
   */
  groupName?: string;
  /**
   * @remarks
   * Specifies whether to include services that do not belong to any workspace. Default value: true.
   * 
   * @example
   * true
   */
  includeNoWorkspace?: boolean;
  /**
   * @remarks
   * The label used to filter services.
   * 
   * @example
   * {"key1":"value1","key2":null}
   */
  label?: { [key: string]: string };
  /**
   * @remarks
   * The sort order. Valid values:
   * - desc: Descending order. This is the default value.
   * - asc: Ascending order.
   * 
   * @example
   * asc
   */
  order?: string;
  /**
   * @remarks
   * The page number of the service list to return. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of services to return on each page during a paged query. Default value: 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the primary service that corresponds to the band member service.
   * 
   * @example
   * eas-m-ijafy3c8cxxxx
   */
  parentServiceUid?: string;
  /**
   * @remarks
   * The quota ID.
   * 
   * @example
   * quota1****
   */
  quotaId?: string;
  /**
   * @remarks
   * The custom name of the resource group.
   * 
   * @example
   * example
   */
  resourceAliasName?: string;
  /**
   * @remarks
   * Specifies whether the burstable resource pool is enabled for the service.
   * 
   * @example
   * true
   */
  resourceBurstable?: boolean;
  /**
   * @remarks
   * The ID of the resource group. For information about how to query the resource group ID, see [ListResources](https://help.aliyun.com/document_detail/412133.html).
   * 
   * @example
   * eas-r-asdas****
   */
  resourceId?: string;
  /**
   * @remarks
   * The name or ID of the resource group to which the service belongs.
   * 
   * @example
   * eas-r-hd0qwy8cxxxx
   * 
   * @deprecated
   */
  resourceName?: string;
  /**
   * @remarks
   * The type of resource used by the service. Valid values:
   * - PublicResource
   * - DedicatedResource
   * - Lingjun
   * - SelfManagedLingjun
   * 
   * @example
   * PublicResource
   */
  resourceType?: string;
  /**
   * @remarks
   * The service role.
   * 
   * @example
   * LLMGateway
   */
  role?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * echo_test
   */
  serviceName?: string;
  /**
   * @remarks
   * The running status of the service.
   * 
   * @example
   * Running
   */
  serviceStatus?: string;
  /**
   * @remarks
   * The service type. Valid values:
   * - Async
   * - Standard
   * - Queue
   * - LLM
   * - RAG
   * - Serverless
   * - LLMGatewayService
   * - Offline Task
   * - SDCluster
   * - ScalableJob
   * - ScalableJobService
   * - AssistantJob
   * 
   * @example
   * Standard
   */
  serviceType?: string;
  /**
   * @remarks
   * The UID of the service.
   * 
   * @example
   * eas-m-c9iw3yitxxxx
   */
  serviceUid?: string;
  /**
   * @remarks
   * The sort field. By default, timestamp fields are sorted in descending order.
   * 
   * @example
   * CreateTime
   */
  sort?: string;
  /**
   * @remarks
   * Specifies whether to receive group traffic. This parameter is valid only for group services.
   * 
   * @example
   * grouping
   */
  trafficState?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 1234**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      autoscalerEnabled: 'AutoscalerEnabled',
      callerUid: 'CallerUid',
      cronscalerEnabled: 'CronscalerEnabled',
      filter: 'Filter',
      gateway: 'Gateway',
      groupName: 'GroupName',
      includeNoWorkspace: 'IncludeNoWorkspace',
      label: 'Label',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentServiceUid: 'ParentServiceUid',
      quotaId: 'QuotaId',
      resourceAliasName: 'ResourceAliasName',
      resourceBurstable: 'ResourceBurstable',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      role: 'Role',
      serviceName: 'ServiceName',
      serviceStatus: 'ServiceStatus',
      serviceType: 'ServiceType',
      serviceUid: 'ServiceUid',
      sort: 'Sort',
      trafficState: 'TrafficState',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      autoscalerEnabled: 'boolean',
      callerUid: 'string',
      cronscalerEnabled: 'boolean',
      filter: 'string',
      gateway: 'string',
      groupName: 'string',
      includeNoWorkspace: 'boolean',
      label: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      parentServiceUid: 'string',
      quotaId: 'string',
      resourceAliasName: 'string',
      resourceBurstable: 'boolean',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      role: 'string',
      serviceName: 'string',
      serviceStatus: 'string',
      serviceType: 'string',
      serviceUid: 'string',
      sort: 'string',
      trafficState: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.label) {
      $dara.Model.validateMap(this.label);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

