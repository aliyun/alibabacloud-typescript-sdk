// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricRuleBlackListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the blacklist policy.
   * 
   * @example
   * ecs
   */
  category?: string;
  ids?: string[];
  /**
   * @remarks
   * The IDs of the instances in the blacklist policy.
   * 
   * Valid values of N: 0 to 10.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The status of the blacklist policy. Valid values:
   * 
   * *   true: The blacklist policy is enabled.
   * *   false: The blacklist policy is disabled.
   * 
   * @example
   * true
   */
  isEnable?: boolean;
  /**
   * @remarks
   * The name of the blacklist policy.
   * 
   * This parameter supports fuzzy match.
   * 
   * @example
   * Blacklist-01
   */
  name?: string;
  /**
   * @remarks
   * The timestamp when the blacklist policy expired.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * >  The status code 200 indicates that the call was successful.
   * 
   * @example
   * DESC
   */
  order?: number;
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The categories of the Alibaba Cloud service. For example, ApsaraDB for Redis includes the following categories: ApsaraDB for Redis (standard architecture), ApsaraDB for Redis (cluster architecture), and ApsaraDB for Redis (read/write splitting architecture). In this case, the valid values of this parameter for ApsaraDB for Redis include `kvstore_standard`, `kvstore_sharding`, and `kvstore_splitrw`.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  regionId?: string;
  /**
   * @remarks
   * The effective scope of the blacklist policy. Valid values:
   * 
   * *   USER: The blacklist policy takes effect only within the current Alibaba Cloud account.
   * *   GROUP: The blacklist policy takes effect only within the specified application group.
   * 
   * @example
   * USER
   */
  scopeType?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      ids: 'Ids',
      instanceIds: 'InstanceIds',
      isEnable: 'IsEnable',
      name: 'Name',
      namespace: 'Namespace',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      scopeType: 'ScopeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      ids: { 'type': 'array', 'itemType': 'string' },
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      isEnable: 'boolean',
      name: 'string',
      namespace: 'string',
      order: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      scopeType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

