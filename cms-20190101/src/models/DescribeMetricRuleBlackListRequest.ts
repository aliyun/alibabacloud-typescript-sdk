// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricRuleBlackListRequest extends $dara.Model {
  /**
   * @remarks
   * The category of the Alibaba Cloud service. For example, Redis has different editions, such as `kvstore_standard` (Standard Edition), `kvstore_sharding` (Cluster Edition), and `kvstore_splitrw` (Read/write Splitting Edition).
   * 
   * @example
   * ecs
   */
  category?: string;
  /**
   * @remarks
   * The IDs of the blacklist policies.
   */
  ids?: string[];
  /**
   * @remarks
   * The IDs of instances in the blacklist policy.
   * 
   * The value of N can be an integer from 0 to 10.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The status of the blacklist policy. Valid values:
   * 
   * - true: enabled.
   * 
   * - false: disabled.
   * 
   * @example
   * true
   */
  isEnable?: boolean;
  /**
   * @remarks
   * The name of the blacklist policy.
   * 
   * Fuzzy queries are supported.
   * 
   * @example
   * Blacklist-01
   */
  name?: string;
  /**
   * @remarks
   * The namespace of the Alibaba Cloud service.
   * 
   * For more information, see [Metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The order in which to sort the results by time. Valid values:
   * 
   * - DESC (default): descending order.
   * 
   * - ASC: ascending order.
   * 
   * @example
   * DESC
   */
  order?: number;
  /**
   * @remarks
   * The page number.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Default value: 10.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  regionId?: string;
  /**
   * @remarks
   * The scope of the blacklist policy. Valid values:
   * 
   * - USER: The blacklist policy takes effect only for the current Alibaba Cloud account.
   * 
   * - GROUP: The blacklist policy takes effect for the specified application groups.
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

