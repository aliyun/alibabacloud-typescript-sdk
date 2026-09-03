// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopGroupsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. If you specify this parameter, the value cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot start with `acs:`. It cannot contain `http://` or `https://`.
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
   * The list of cloud computer template IDs.
   */
  bundleId?: string[];
  /**
   * @remarks
   * The ID of the shared cloud computer.
   * 
   * @example
   * dg-2i8qxpv6t1a03****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The list of shared cloud computer IDs.
   */
  desktopGroupIds?: string[];
  /**
   * @remarks
   * The name of the shared cloud computer to query. Fuzzy match is supported.
   * 
   * @example
   * CloudComputerPool01
   */
  desktopGroupName?: string;
  /**
   * @remarks
   * The cloud computer specifications. You can call [DescribeDesktopTypes](~~DescribeDesktopTypes~~) to query the supported specification IDs.
   * 
   * @example
   * eds.enterprise_office.16c64g
   */
  desktopType?: string;
  /**
   * @remarks
   * The list of authorized user IDs for the shared cloud computer.
   */
  endUserIds?: string[];
  /**
   * @remarks
   * The list of authorized users to exclude.
   */
  excludedEndUserIds?: string[];
  /**
   * @remarks
   * The list of image IDs.
   * 
   * **if can be null:**
   * false
   */
  imageId?: string[];
  /**
   * @remarks
   * The number of entries per page for a paged query.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Specifies whether the shared cloud computer is a multi-host type.
   * 
   * Valid values:
   * - true: Multi-host shared cloud computer.
   * - false: Single-host shared cloud computer.
   * 
   * @example
   * true
   */
  multiResource?: boolean;
  /**
   * @remarks
   * The token for the next query. If NextToken is empty, no more results exist.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the office network to which the shared cloud computers belong.
   * 
   * @example
   * cn-hangzhou+dir-467671****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The type of the shared cloud computer.
   * 
   * @example
   * 0
   */
  ownType?: number;
  /**
   * @remarks
   * The subscription duration of the shared cloud computer. The unit is specified by `PeriodUnit`.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the duration for the subscription billing method.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The ID of the policy associated with the shared cloud computer.
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
  /**
   * @remarks
   * The ID of the QoS rule.
   * 
   * @example
   * qos-5605u0gelk200****
   */
  qosRuleId?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the shared cloud computer.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The list of tags. You can specify 1 to 20 tags.
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

