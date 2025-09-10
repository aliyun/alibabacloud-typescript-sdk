// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServicesRequest extends $dara.Model {
  autoscalerEnabled?: boolean;
  cronscalerEnabled?: boolean;
  /**
   * @remarks
   * The field that is used for fuzzy matches. The system performs fuzzy matches only by service name.
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
   * The name of the service group. For more information about how to query the name of a service group, see [ListServices](https://help.aliyun.com/document_detail/412109.html).
   * 
   * @example
   * foo
   */
  groupName?: string;
  includeNoWorkspace?: boolean;
  /**
   * @remarks
   * The tag that is used to filter services.
   */
  label?: { [key: string]: string };
  /**
   * @remarks
   * The sorting order. Valid values:
   * 
   * *   desc (default): The query results are sorted in descending order.
   * *   asc: The query results are sorted in ascending order.
   * 
   * @example
   * asc
   */
  order?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the primary service that corresponds to the Band member service.
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
   * quota12345
   */
  quotaId?: string;
  resourceAliasName?: string;
  resourceBurstable?: boolean;
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
  resourceType?: string;
  /**
   * @remarks
   * The server role.
   * 
   * Valid values:
   * 
   * *   DataLoader
   * *   FrontEnd
   * *   DataSet
   * *   SDProxy
   * *   LLMSscheduler
   * *   ScalableJob
   * *   LLMGateway
   * *   Job
   * *   Queue
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
   * The service state.
   * 
   * Valid values:
   * 
   * *   Creating
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Stopped
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Failed
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Complete
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Cloning
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Stopping
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Updating
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Waiting
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   HotUpdate
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Committing
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Starting
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   DeleteFailed
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Running
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Developing
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Scaling
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Deleted
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Pending
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Deleting
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Running
   */
  serviceStatus?: string;
  /**
   * @remarks
   * The service type. Valid values:
   * 
   * *   Async
   * *   Standard
   * *   Offline Task
   * *   Proxima
   * 
   * Valid values:
   * 
   * *   Async
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Standard
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   OfflineTask
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Proxima
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Standard
   */
  serviceType?: string;
  /**
   * @remarks
   * The user ID (UID) of the service.
   * 
   * @example
   * eas-m-c9iw3yitxxxx
   */
  serviceUid?: string;
  /**
   * @remarks
   * The sort field. By default, the query results are sorted by the timestamp type in descending order.
   * 
   * @example
   * CreateTime
   */
  sort?: string;
  trafficState?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 123456
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      autoscalerEnabled: 'AutoscalerEnabled',
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
      autoscalerEnabled: 'boolean',
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

