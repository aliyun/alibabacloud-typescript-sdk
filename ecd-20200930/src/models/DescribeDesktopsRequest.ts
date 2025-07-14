// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. If you specify the `Tag` parameter, you must also specify the `Key` parameter. The tag key can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `acs:` or `aliyun` and contain only spaces.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag value cannot start with `acs:` or `aliyun`.
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

export class DescribeDesktopsRequest extends $dara.Model {
  /**
   * @remarks
   * The billing method of the cloud computer.
   * 
   * Valid values:
   * 
   * *   Postpaid (default): pay-as-you-go
   * *   PrePaid: subscription
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The ID of the cloud computer pool. If you specify `OnlyDesktopGroup`, ignore `DesktopGroupId`. If you leave `DesktopId` empty, all IDs of the cloud computers in the cloud computer pool are queried.````
   * 
   * @example
   * dg-2i8qxpv6t1a03****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The cloud computer IDs. You can specify the IDs of 1 to 100 cloud computers.
   * 
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopId?: string[];
  /**
   * @remarks
   * The cloud computer name.
   * 
   * @example
   * testDesktopName
   */
  desktopName?: string;
  /**
   * @remarks
   * The cloud computer status.
   * 
   * Valid values:
   * 
   * *   Stopped
   * *   Starting
   * *   Rebuilding
   * *   Running
   * *   Stopping
   * *   Expired
   * *   Deleted
   * *   Pending
   * 
   * @example
   * Running
   */
  desktopStatus?: string;
  /**
   * @remarks
   * The list of cloud computer status.
   */
  desktopStatusList?: string[];
  /**
   * @remarks
   * The cloud computer type. You can call the [DescribeDesktopTypes](https://help.aliyun.com/document_detail/188882.html) operation to query the IDs of all supported types.
   * 
   * @example
   * eds.general.2c8g
   */
  desktopType?: string;
  /**
   * @remarks
   * The directory ID, which is the same as the office network ID.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  directoryId?: string;
  /**
   * @remarks
   * The authorized users of the cloud computer. You can specify the IDs of 1 to 100 users.
   * 
   * >  During a specific period of time, only one user can connect to and use the cloud computer.
   * 
   * @example
   * alice
   */
  endUserId?: string[];
  /**
   * @remarks
   * The list of authorized users that you want to exclude from the cloud computer. You can specify the IDs of 1 to 100 users.
   * 
   * @example
   * andy
   */
  excludedEndUserId?: string[];
  /**
   * @remarks
   * The time when a subscription cloud computer expires.
   * 
   * @example
   * 2022-12-31T15:59:59Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * Specifies whether to query the information about the enterprise resource group.
   * 
   * @example
   * true
   */
  fillResourceGroup?: boolean;
  /**
   * @remarks
   * Specifies whether to exclude pooled cloud computers.
   * 
   * Valid values:
   * 
   * *   true (default)
   * *   false
   * 
   * @example
   * false
   */
  filterDesktopGroup?: boolean;
  /**
   * @remarks
   * The ID of the elastic GPU pool.
   * 
   * @example
   * gp-0bm2iz1v6m6nx****
   */
  gpuInstanceGroupId?: string;
  /**
   * @remarks
   * The ID of the cloud computer pool.
   * 
   * @example
   * dg-boyczi8enfyc5****
   */
  groupId?: string;
  /**
   * @remarks
   * The IDs of the images.
   */
  imageId?: string[];
  /**
   * @remarks
   * The flag that is used to manage the cloud desktops.
   * 
   * @example
   * NoFlag
   */
  managementFlag?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * *   Maximum value: 100
   * *   Default value: 10
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Specifies whether the shared group is a multi-cloud computer type.
   * 
   * Valid values:
   * 
   * - true: a multi-cloud computer type.
   * - false: a single-cloud computer type.
   * 
   * @example
   * false
   */
  multiResource?: boolean;
  /**
   * @remarks
   * The token that determines the start point of the next query. If this parameter is left empty, all results are returned.
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
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The office network name.
   * 
   * @example
   * testName
   */
  officeSiteName?: string;
  /**
   * @remarks
   * Specifies whether to query pooled cloud computers.
   * 
   * @example
   * true
   */
  onlyDesktopGroup?: boolean;
  /**
   * @remarks
   * The operating systems (OSs).
   */
  osTypes?: string[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the cloud computer policy.
   * 
   * @example
   * system-all-enabled-policy
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The protocol.
   * 
   * Valid values:
   * 
   * *   HDX: High-definition Experience (HDX) protocol
   * *   ASP: in-house Adaptive Streaming Protocol (ASP) (recommended)
   * 
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @remarks
   * The ID of the network throttling rule.
   * 
   * @example
   * qos-5605u0gelk200****
   */
  qosRuleId?: string;
  /**
   * @remarks
   * Specifies whether to query the image update information about the cloud computer.
   * 
   * Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * false
   */
  queryFotaUpdate?: boolean;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the regions supported by Elastic Desktop Service (EDS).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the enterprise resource group.
   * 
   * @example
   * rg-4hsvzbbmqdzu3s****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the snapshot policy.
   * 
   * @example
   * sp-hb12mclyne09xw***
   */
  snapshotPolicyId?: string;
  /**
   * @remarks
   * The billing method of the cloud computer.
   * 
   * Valid values:
   * 
   * *   duration: hourly plan (available for users in the whitelist)
   * *   postPaid: pay-as-you-go
   * *   monthPackage: monthly subscription (120-hour or 250-hour computing plan)
   * *   prePaid: monthly subscription (unlimited-hour computing plan)
   * 
   * @example
   * monthPackage
   */
  subPayType?: string;
  /**
   * @remarks
   * The tags that you want to add to the cloud computer. A tag is a key-value pair that consists of a tag key and a tag value. Tags are used to identify resources. You can use tags to manage cloud computers by group. This facilitates search and batch operations. For more information, see [Use tags to manage cloud computers](https://help.aliyun.com/document_detail/203781.html).
   */
  tag?: DescribeDesktopsRequestTag[];
  /**
   * @remarks
   * The name of the end user.
   * 
   * @example
   * Alice
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      desktopGroupId: 'DesktopGroupId',
      desktopId: 'DesktopId',
      desktopName: 'DesktopName',
      desktopStatus: 'DesktopStatus',
      desktopStatusList: 'DesktopStatusList',
      desktopType: 'DesktopType',
      directoryId: 'DirectoryId',
      endUserId: 'EndUserId',
      excludedEndUserId: 'ExcludedEndUserId',
      expiredTime: 'ExpiredTime',
      fillResourceGroup: 'FillResourceGroup',
      filterDesktopGroup: 'FilterDesktopGroup',
      gpuInstanceGroupId: 'GpuInstanceGroupId',
      groupId: 'GroupId',
      imageId: 'ImageId',
      managementFlag: 'ManagementFlag',
      maxResults: 'MaxResults',
      multiResource: 'MultiResource',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      onlyDesktopGroup: 'OnlyDesktopGroup',
      osTypes: 'OsTypes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policyGroupId: 'PolicyGroupId',
      protocolType: 'ProtocolType',
      qosRuleId: 'QosRuleId',
      queryFotaUpdate: 'QueryFotaUpdate',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      snapshotPolicyId: 'SnapshotPolicyId',
      subPayType: 'SubPayType',
      tag: 'Tag',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      desktopGroupId: 'string',
      desktopId: { 'type': 'array', 'itemType': 'string' },
      desktopName: 'string',
      desktopStatus: 'string',
      desktopStatusList: { 'type': 'array', 'itemType': 'string' },
      desktopType: 'string',
      directoryId: 'string',
      endUserId: { 'type': 'array', 'itemType': 'string' },
      excludedEndUserId: { 'type': 'array', 'itemType': 'string' },
      expiredTime: 'string',
      fillResourceGroup: 'boolean',
      filterDesktopGroup: 'boolean',
      gpuInstanceGroupId: 'string',
      groupId: 'string',
      imageId: { 'type': 'array', 'itemType': 'string' },
      managementFlag: 'string',
      maxResults: 'number',
      multiResource: 'boolean',
      nextToken: 'string',
      officeSiteId: 'string',
      officeSiteName: 'string',
      onlyDesktopGroup: 'boolean',
      osTypes: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      policyGroupId: 'string',
      protocolType: 'string',
      qosRuleId: 'string',
      queryFotaUpdate: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
      snapshotPolicyId: 'string',
      subPayType: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDesktopsRequestTag },
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopId)) {
      $dara.Model.validateArray(this.desktopId);
    }
    if(Array.isArray(this.desktopStatusList)) {
      $dara.Model.validateArray(this.desktopStatusList);
    }
    if(Array.isArray(this.endUserId)) {
      $dara.Model.validateArray(this.endUserId);
    }
    if(Array.isArray(this.excludedEndUserId)) {
      $dara.Model.validateArray(this.excludedEndUserId);
    }
    if(Array.isArray(this.imageId)) {
      $dara.Model.validateArray(this.imageId);
    }
    if(Array.isArray(this.osTypes)) {
      $dara.Model.validateArray(this.osTypes);
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

