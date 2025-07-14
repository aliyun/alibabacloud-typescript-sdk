// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopGroupsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You cannot specify an empty string as a tag key. A tag key can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can specify an empty string as a tag key. A tag value can be up to 128 characters in length and cannot start with `acs:`. It cannot contain `http://` or `https://`.
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
   * The IDs of the cloud computer templates.
   */
  bundleId?: string[];
  /**
   * @remarks
   * The ID of the cloud computer share.
   * 
   * @example
   * dg-2i8qxpv6t1a03****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The IDs of the cloud computer shares.
   */
  desktopGroupIds?: string[];
  /**
   * @remarks
   * The name of the cloud computer share that you want to query. Fuzzy search is supported.
   * 
   * @example
   * testName
   */
  desktopGroupName?: string;
  desktopType?: string;
  /**
   * @remarks
   * The IDs of the users who can access the cloud computer share.
   */
  endUserIds?: string[];
  /**
   * @remarks
   * The authorized users that you want to exclude.
   */
  excludedEndUserIds?: string[];
  /**
   * @remarks
   * The IDs of the images.
   * 
   * **if can be null:**
   * false
   */
  imageId?: string[];
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Specifies whether the cloud computer share is a many-to-many share.
   * 
   * Valid values:
   * 
   * *   true: The cloud computer share is a many-to-many share.
   * *   false: The cloud computer share is a one-to-many share.
   * 
   * @example
   * true
   */
  multiResource?: boolean;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If the NextToken parameter is empty, no next page exists.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the office network in which the cloud computer share resides.
   * 
   * @example
   * cn-hangzhou+dir-467671****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The type of the cloud computer share.
   * 
   * >  This parameter is not publicly available.
   * 
   * Valid values:
   * 
   * *   0: a single-session many-to-many share.
   * *   1: a multi-session many-to-many share.
   * 
   * @example
   * 0
   */
  ownType?: number;
  /**
   * @remarks
   * The subscription duration of the cloud computer share. The unit is specified by `PeriodUnit`.
   * 
   * *   Valid values if you set `PeriodUnit` to `Month`:
   * 
   *     *   1
   *     *   2
   *     *   3
   *     *   6
   * 
   * *   Valid values if you set `PeriodUnit` to `Year`:
   * 
   *     *   1
   *     *   2
   *     *   3
   *     *   4
   *     *   5
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
   * The ID of the applied policy.
   * 
   * @example
   * pg-53iyi2aar0nd6****
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * Valid values:
   * 
   * *   High-definition Experience (HDX)
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Adaptive Streaming Protocol (ASP)
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the regions supported by WUYING Workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the cloud computer share.
   * 
   * Valid values:
   * 
   * *   0: The cloud computer share is unpaid.
   * *   1: The cloud computer share is normal.
   * *   2: The cloud computer share expired, or your account has an overdue payment.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The tags that you want to add to the cloud computer share. You can specify 1 to 20 tags.
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

