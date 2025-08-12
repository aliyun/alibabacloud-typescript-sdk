// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMonitorGroupsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the application group. Valid values of N: 1 to 5.
   * 
   * @example
   * tagKey1
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the application group. Valid values of N: 1 to 5.
   * 
   * @example
   * tagValue1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the tag rule.
   * 
   * @example
   * 6b882d9a-5117-42e2-9d0c-4749a0c6****
   */
  dynamicTagRuleId?: string;
  /**
   * @remarks
   * The tag key that is created for the application group by using the tag rule.
   * 
   * @example
   * GroupKey1
   */
  groupFounderTagKey?: string;
  /**
   * @remarks
   * The tag value that is created for the application group by using the tag rule.
   * 
   * @example
   * GroupValue1
   */
  groupFounderTagValue?: string;
  /**
   * @remarks
   * The ID of the application group. Separate multiple application group IDs with commas (,).
   * 
   * @example
   * 92****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the application group.
   * 
   * @example
   * testGroup124
   */
  groupName?: string;
  /**
   * @remarks
   * Specifies whether to include the historical alert templates that are applied to the application group in the response. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  includeTemplateHistory?: boolean;
  /**
   * @remarks
   * The instance ID. This parameter is used to query the application group to which the specified instance belongs.
   * 
   * @example
   * i-abcdefgh12****
   */
  instanceId?: string;
  /**
   * @remarks
   * The keyword that is used for the search.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Pages start from page 1. Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to include the alert contact groups in the response. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  selectContactGroups?: boolean;
  /**
   * @remarks
   * The tags of the application group.
   */
  tag?: DescribeMonitorGroupsRequestTag[];
  /**
   * @remarks
   * The type of the application group. Valid values:
   * 
   * *   custom: a self-managed application group
   * *   ehpc_cluster: an application group that is synchronized from an E-HPC cluster
   * *   kubernetes: an application group that is synchronized from an ACK cluster
   * 
   * @example
   * custom
   */
  type?: string;
  /**
   * @remarks
   * The type of the application group. Valid values:
   * 
   * *   custom: a self-managed application group
   * *   ehpc_cluster: an application group that is synchronized from an Elastic High Performance Computing (E-HPC) cluster
   * *   kubernetes: an application group that is synchronized from a Container Service for Kubernetes (ACK) cluster
   * *   tag: an application group that is automatically created by using tags
   * *   resMgr: an application group that is created by using resource groups
   * *   ess: an application group that is synchronized from Auto Scaling (ESS)
   * 
   * @example
   * custom
   */
  types?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicTagRuleId: 'DynamicTagRuleId',
      groupFounderTagKey: 'GroupFounderTagKey',
      groupFounderTagValue: 'GroupFounderTagValue',
      groupId: 'GroupId',
      groupName: 'GroupName',
      includeTemplateHistory: 'IncludeTemplateHistory',
      instanceId: 'InstanceId',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      selectContactGroups: 'SelectContactGroups',
      tag: 'Tag',
      type: 'Type',
      types: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicTagRuleId: 'string',
      groupFounderTagKey: 'string',
      groupFounderTagValue: 'string',
      groupId: 'string',
      groupName: 'string',
      includeTemplateHistory: 'boolean',
      instanceId: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      selectContactGroups: 'boolean',
      tag: { 'type': 'array', 'itemType': DescribeMonitorGroupsRequestTag },
      type: 'string',
      types: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

