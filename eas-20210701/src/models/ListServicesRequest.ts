// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServicesRequest extends $dara.Model {
  /**
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @remarks
   * Specifies whether to enable Auto Scaling for the service.
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
   * Specifies whether to enable scheduled auto scaling for the service.
   * 
   * @example
   * true
   */
  cronscalerEnabled?: boolean;
  /**
   * @remarks
   * The keyword for a fuzzy search. This parameter supports fuzzy searches by service name only.
   * 
   * @example
   * foo
   */
  filter?: string;
  /**
   * @remarks
   * The private gateway ID.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gateway?: string;
  /**
   * @remarks
   * The name of the service group. To learn how to obtain this name, see [ListServices](https://help.aliyun.com/document_detail/412109.html).
   * 
   * @example
   * foo
   */
  groupName?: string;
  /**
   * @remarks
   * Specifies whether to include services that do not belong to any workspace. The default value is true.
   * 
   * @example
   * true
   */
  includeNoWorkspace?: boolean;
  /**
   * @remarks
   * Filters services by label.
   */
  label?: { [key: string]: string };
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - `desc` (default): descending.
   * 
   * - `asc`: ascending.
   * 
   * @example
   * asc
   */
  order?: string;
  /**
   * @remarks
   * The page number of the results to return. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of services to return per page. The default value is 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The UID of the primary service. This parameter applies to member services in a service group.
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
   * Specifies whether to enable a burstable resource pool for the service.
   * 
   * @example
   * true
   */
  resourceBurstable?: boolean;
  /**
   * @remarks
   * The ID of the resource group. To learn how to query for this ID, see [ListResources](https://help.aliyun.com/document_detail/412133.html).
   * 
   * @example
   * eas-r-asdas****
   */
  resourceId?: string;
  /**
   * @remarks
   * The name or ID of the service\\"s resource group.
   * 
   * @example
   * eas-r-hd0qwy8cxxxx
   * 
   * @deprecated
   */
  resourceName?: string;
  /**
   * @remarks
   * The type of resource the service uses. Valid values:
   * 
   * - PublicResource
   * 
   * - DedicatedResource
   * 
   * - Lingjun
   * 
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
   * The service name.
   * 
   * @example
   * echo_test
   */
  serviceName?: string;
  /**
   * @remarks
   * The status of the service.
   * 
   * @example
   * Running
   */
  serviceStatus?: string;
  /**
   * @remarks
   * The service type. Valid values:
   * 
   * - Async
   * 
   * - Standard
   * 
   * - Queue
   * 
   * - LLM
   * 
   * - RAG
   * 
   * - Serverless
   * 
   * - LLMGatewayService
   * 
   * - OfflineTask
   * 
   * - SDCluster
   * 
   * - ScalableJob
   * 
   * - ScalableJobService
   * 
   * - AssistantJob
   * 
   * @example
   * Standard
   */
  serviceType?: string;
  /**
   * @remarks
   * The service UID.
   * 
   * @example
   * eas-m-c9iw3yitxxxx
   */
  serviceUid?: string;
  /**
   * @remarks
   * The sort field. By default, results are sorted by timestamp in descending order.
   * 
   * @example
   * CreateTime
   */
  sort?: string;
  /**
   * @remarks
   * Specifies whether the service accepts group traffic. This parameter applies only to services within a service group.
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

