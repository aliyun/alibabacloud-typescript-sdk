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
   * The ID of the intelligent tag rule.
   * 
   * @example
   * 6b882d9a-5117-42e2-9d0c-4749a0c6****
   */
  dynamicTagRuleId?: string;
  /**
   * @remarks
   * The tag key used to create the application group by using intelligent tags.
   * 
   * @example
   * GroupKey1
   */
  groupFounderTagKey?: string;
  /**
   * @remarks
   * The tag value used to create the application group by using intelligent tags.
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
   * Specifies whether to include the history of alert templates applied to the application group in the response. Valid values:
   * - true: Yes.
   * - false: No.
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
   * The search keyword.
   * 
   * @example
   * test
   */
  keyword?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Minimum value: 1. Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to include alert contact groups in the response. Valid values:
   * - true: Yes.
   * - false: No.
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
   * - custom: custom application group
   * - ehpc_cluster: application group from EHPC cluster synchronization
   * - kubernetes: application group from Container Service for Kubernetes synchronization
   * - tag: application group from automatic creation by using labels
   * - resMgr: application group created by using resource groups
   * - ess: application group from elastic scaling synchronization
   * - aone_group: application group synchronized from or associated with an Aone application
   * 
   * @example
   * custom
   */
  type?: string;
  /**
   * @remarks
   * The types of the application groups. Valid values:
   * 
   * - custom: custom application group
   * - ehpc_cluster: application group from EHPC cluster synchronization
   * - kubernetes: application group from Container Service for Kubernetes synchronization
   * - tag: application group from automatic creation by using labels
   * - resMgr: application group created by using resource groups
   * - ess: application group from elastic scaling synchronization
   * - aone_group: application group synchronized from or associated with an Aone application
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

