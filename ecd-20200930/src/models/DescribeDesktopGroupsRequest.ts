// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopGroupsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. The key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. The tag key cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. The value can be an empty string. The tag value can be up to 128 characters in length and cannot start with `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestValue
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

export class DescribeDesktopGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud computer template IDs.
   */
  bundleId?: string[];
  /**
   * @remarks
   * The ID of the cloud computer pool.
   * 
   * @example
   * dg-2i8qxpv6t1a03****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The IDs of cloud computer pools.
   */
  desktopGroupIds?: string[];
  /**
   * @remarks
   * The name of the cloud computer pool. Fuzzy search is supported.
   * 
   * @example
   * CloudComputerPool01
   */
  desktopGroupName?: string;
  desktopType?: string;
  /**
   * @remarks
   * The IDs of the authorized users of the cloud computer pool.
   */
  endUserIds?: string[];
  /**
   * @remarks
   * The IDs of the users that you want to exclude from the authorized user list.
   */
  excludedEndUserIds?: string[];
  /**
   * @remarks
   * The image IDs.
   * 
   * **if can be null:**
   * false
   */
  imageId?: string[];
  /**
   * @remarks
   * The number of entries to return on each page.<br>Maximum value: 100.<br>Default value: 10.<br><br>
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Specifies whether to query multi-desktop cloud computer pools.
   * 
   * @example
   * true
   */
  multiResource?: boolean;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. If NextToken is empty, no next page exists.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-hangzhou+dir-467671****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The type of the cloud computer pool.
   * 
   * > This parameter is not publicly available.
   * 
   * @example
   * 0
   */
  ownType?: number;
  /**
   * @remarks
   * The subscription duration of the subscription cloud computer pool. The unit is specified by the `PeriodUnit` parameter.
   * 
   * - Valid values when `PeriodUnit` is set to `Month`:
   * 
   *   - 1
   * 
   *   - 2
   * 
   *   - 3
   * 
   *   - 6
   * 
   * - Valid values when `PeriodUnit` is set to `Year`:
   * 
   *   - 1
   * 
   *   - 2
   * 
   *   - 3
   * 
   *   - 4
   * 
   *   - 5
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The ID of the policy that is associated with the cloud computer pool.
   * 
   * @example
   * pg-53iyi2aar0nd6****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * @example
   * ASP
   */
  protocolType?: string;
  qosRuleId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the cloud computer pool.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The tags. You can specify up to 20 tags.
   */
  tag?: DescribeDesktopGroupsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      bundleId: 'BundleId',
      desktopGroupId: 'DesktopGroupId',
      desktopGroupIds: 'DesktopGroupIds',
      desktopGroupName: 'DesktopGroupName',
      desktopType: 'DesktopType',
      endUserIds: 'EndUserIds',
      excludedEndUserIds: 'ExcludedEndUserIds',
      imageId: 'ImageId',
      maxResults: 'MaxResults',
      multiResource: 'MultiResource',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      ownType: 'OwnType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      policyGroupId: 'PolicyGroupId',
      protocolType: 'ProtocolType',
      qosRuleId: 'QosRuleId',
      regionId: 'RegionId',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleId: { 'type': 'array', 'itemType': 'string' },
      desktopGroupId: 'string',
      desktopGroupIds: { 'type': 'array', 'itemType': 'string' },
      desktopGroupName: 'string',
      desktopType: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      excludedEndUserIds: { 'type': 'array', 'itemType': 'string' },
      imageId: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      multiResource: 'boolean',
      nextToken: 'string',
      officeSiteId: 'string',
      ownType: 'number',
      period: 'number',
      periodUnit: 'string',
      policyGroupId: 'string',
      protocolType: 'string',
      qosRuleId: 'string',
      regionId: 'string',
      status: 'number',
      tag: { 'type': 'array', 'itemType': DescribeDesktopGroupsRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.bundleId)) {
      $dara.Model.validateArray(this.bundleId);
    }
    if(Array.isArray(this.desktopGroupIds)) {
      $dara.Model.validateArray(this.desktopGroupIds);
    }
    if(Array.isArray(this.endUserIds)) {
      $dara.Model.validateArray(this.endUserIds);
    }
    if(Array.isArray(this.excludedEndUserIds)) {
      $dara.Model.validateArray(this.excludedEndUserIds);
    }
    if(Array.isArray(this.imageId)) {
      $dara.Model.validateArray(this.imageId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

