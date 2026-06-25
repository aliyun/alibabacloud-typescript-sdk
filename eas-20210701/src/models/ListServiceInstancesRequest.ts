// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * A keyword for the search. You can search by instance name, instance IP address, host IP address, or instance type.
   * 
   * @example
   * 10.118.xx.xx
   */
  filter?: string;
  /**
   * @remarks
   * The IP address of the host where the service instance is deployed.
   * 
   * @example
   * 10.224.xx.xx
   */
  hostIP?: string;
  /**
   * @remarks
   * The IP address of the service instance.
   * 
   * @example
   * 10.224.xx.xx
   */
  instanceIP?: string;
  /**
   * @remarks
   * The name of the service instance.
   * 
   * @example
   * foo-bdc5xxxx-8l7rk
   */
  instanceName?: string;
  /**
   * @remarks
   * The status of the service instance.
   * 
   * @example
   * Running
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ecs.c7.large
   */
  instanceType?: string;
  /**
   * @remarks
   * Specifies whether the instance is a spot instance.
   * 
   * @example
   * false
   */
  isSpot?: boolean;
  /**
   * @remarks
   * Specifies whether to query the list of instance replicas.
   * 
   * @example
   * true
   */
  listReplica?: boolean;
  /**
   * @remarks
   * The type of the sub-service. This parameter is valid only for aggregation services.
   * 
   * @example
   * LLMDecode
   */
  memberType?: string;
  /**
   * @remarks
   * The sort order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The page number. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. The default value is 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
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
   * The name of the instance replica.
   * 
   * @example
   * cbh-qwen3-a1bc-prefill-ep1tp4dp
   */
  replicaName?: string;
  /**
   * @remarks
   * The resource group to which the instance belongs.
   * 
   * @example
   * eas-r-xxxxxxx
   */
  resource?: string;
  /**
   * @remarks
   * The type of the resource group to which the service instance belongs.
   * 
   * @example
   * PublicResource
   */
  resourceType?: string;
  /**
   * @remarks
   * The role of the service.
   * 
   * @example
   * Queue
   */
  role?: string;
  /**
   * @remarks
   * The field to use for sorting.
   * 
   * @example
   * StartTime
   */
  sort?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      hostIP: 'HostIP',
      instanceIP: 'InstanceIP',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
      isSpot: 'IsSpot',
      listReplica: 'ListReplica',
      memberType: 'MemberType',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      quotaId: 'QuotaId',
      replicaName: 'ReplicaName',
      resource: 'Resource',
      resourceType: 'ResourceType',
      role: 'Role',
      sort: 'Sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      hostIP: 'string',
      instanceIP: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      instanceType: 'string',
      isSpot: 'boolean',
      listReplica: 'boolean',
      memberType: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      quotaId: 'string',
      replicaName: 'string',
      resource: 'string',
      resourceType: 'string',
      role: 'string',
      sort: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

