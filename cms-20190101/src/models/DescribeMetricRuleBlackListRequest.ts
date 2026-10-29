// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricRuleBlackListRequest extends $dara.Model {
  /**
   * @remarks
   * The category of the Alibaba Cloud service. For example, ApsaraDB for Redis has `kvstore_standard` (Standard Edition), `kvstore_sharding` (Cluster Edition), and `kvstore_splitrw` (read/write splitting Edition).
   * 
   * @example
   * ecs
   */
  category?: string;
  /**
   * @remarks
   * The IDs of the alert blacklist policies.
   */
  ids?: string[];
  /**
   * @remarks
   * The instance ID list in the alert blacklist policy.
   * 
   * Valid values of N: 0 to 10.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The status of the alert blacklist policy. Valid values:
   * 
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * true
   */
  isEnable?: boolean;
  /**
   * @remarks
   * The name of the alert blacklist policy.
   * 
   * This parameter supports fuzzy match.
   * 
   * @example
   * Blacklist-01
   */
  name?: string;
  /**
   * @remarks
   * The namespace of the Alibaba Cloud service.
   * 
   * For information about the namespaces of Alibaba Cloud services, see [Cloud service metrics](https://help.aliyun.com/document_detail/163515.html).
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The order in which the query results are sorted by time. Valid values:
   * 
   * 0: ascending order (ASC).
   * 
   * 1: descending order (DESC). This is the default value.
   * 
   * @example
   * 1
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
   * The number of entries per page.
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
   * The effective scope of the alert blacklist policy. Valid values:
   * 
   * - USER: The alert blacklist policy takes effect only within the current Alibaba Cloud account.
   * 
   * - GROUP: The alert blacklist policy takes effect in the specified application groups.
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

