// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. If you specify `Tag`, `Key` is required. The value cannot exceed 128 characters, cannot start with `aliyun` or `acs:`, cannot contain `http://` or `https://`, and cannot consist of spaces only.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The value cannot exceed 128 characters, cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
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
   * The business channel. Valid values:
   * Enterprise: Enterprise Edition
   * Business: Business Edition
   * 
   * @example
   * Enterprise
   */
  businessChannel?: string;
  /**
   * @remarks
   * The billing method of the cloud computer.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The cloud computer pool ID. If you specify `DesktopId`, this `DesktopGroupId` parameter is ignored. If `DesktopId` is empty, the system retrieves the `DesktopId` of all cloud computers in the specified cloud computer pool based on `DesktopGroupId`.
   * 
   * @example
   * dg-2i8qxpv6t1a03****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The cloud computer IDs. You can specify 1 to 100 IDs.
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
   * DemoComputer01
   */
  desktopName?: string;
  /**
   * @remarks
   * The cloud computer status.
   * 
   * @example
   * Running
   */
  desktopStatus?: string;
  /**
   * @remarks
   * The list of cloud computer statuses.
   */
  desktopStatusList?: string[];
  /**
   * @remarks
   * The cloud computer instance type. Call [DescribeDesktopTypes](https://help.aliyun.com/document_detail/188882.html) to query the supported instance type IDs.
   * 
   * @example
   * eds.general.2c8g
   */
  desktopType?: string;
  /**
   * @remarks
   * The directory ID. This is the same as the office network ID.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  directoryId?: string;
  /**
   * @remarks
   * The list of authorized users for the cloud computer. You can set 1 to 100 users.
   * 
   * > At any given time, only one user can connect to and use the cloud computer.
   * 
   * @example
   * alice
   */
  endUserId?: string[];
  /**
   * @remarks
   * The list of authorized users to exclude. You can specify 1 to 100 users.
   * 
   * @example
   * andy
   */
  excludedEndUserId?: string[];
  /**
   * @remarks
   * The expiration time of the subscription cloud computer. The time follows the ISO 8601 standard in UTC: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2022-12-31T15:59:59Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * Specifies whether to include enterprise resource group information in the response.
   * 
   * @example
   * true
   */
  fillResourceGroup?: boolean;
  /**
   * @remarks
   * Specifies whether to exclude pooled cloud computers (cloud computers in a cloud computer pool).
   * 
   * @example
   * false
   */
  filterDesktopGroup?: boolean;
  /**
   * @remarks
   * The elastic GPU pool ID.
   * 
   * @example
   * gp-0bm2iz1v6m6nx****
   */
  gpuInstanceGroupId?: string;
  /**
   * @remarks
   * The cloud computer pool ID.
   * 
   * @example
   * dg-boyczi8enfyc5****
   */
  groupId?: string;
  /**
   * @remarks
   * The list of image IDs.
   */
  imageId?: string[];
  /**
   * @remarks
   * Specifies whether to include automatic snapshot policy information in the response.
   * 
   * @example
   * false
   */
  includeAutoSnapshotPolicy?: boolean;
  /**
   * @remarks
   * The management flag.
   * 
   * @example
   * NoFlag
   */
  managementFlag?: string;
  /**
   * @remarks
   * The number of entries per page for a paged query.
   * 
   * - Maximum value: 100
   * - Default value: 10
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Specifies whether there are multiple resources.
   * 
   * @example
   * false
   */
  multiResource?: boolean;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 192.168.1.1
   */
  networkInterfaceIp?: string;
  /**
   * @remarks
   * The token that marks the start of the next query. An empty NextToken value indicates that there are no more results.
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
   * default
   */
  officeSiteName?: string;
  /**
   * @remarks
   * Specifies whether to query only pooled cloud computers (cloud computers in a cloud computer pool).
   * 
   * @example
   * true
   */
  onlyDesktopGroup?: boolean;
  /**
   * @remarks
   * The operating system type.
   */
  osTypes?: string[];
  /**
   * @remarks
   * The page number in a paged query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of entries per page in a paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The cloud computer policy ID.
   * 
   * @example
   * system-all-enabled-policy
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
   * The public IP address of the instance. Use this parameter to filter instances by public IP address.
   * 
   * @example
   * 121.199.28.39
   */
  publicIp?: string;
  /**
   * @remarks
   * The public network bandwidth throttling rule ID.
   * 
   * @example
   * qos-5605u0gelk200****
   */
  qosRuleId?: string;
  /**
   * @remarks
   * Specifies whether to query the image version information of the cloud computer.
   * 
   * @example
   * false
   */
  queryFotaUpdate?: boolean;
  /**
   * @remarks
   * The region ID. Call [DescribeRegions](~~DescribeRegions~~) to retrieve the list of regions supported by Alibaba Cloud Workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource reservation pool ID (rp-xxx). Filters cloud computers by reservation pool exactly. If not specified or left empty, no filtering by reservation pool is applied.
   * 
   * @example
   * rp-xxx
   */
  reservePoolId?: string;
  /**
   * @remarks
   * The enterprise resource group ID.
   * 
   * @example
   * rg-4hsvzbbmqdzu3s****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The snapshot policy ID.
   * 
   * @example
   * sp-hb12mclyne09xw***
   */
  snapshotPolicyId?: string;
  /**
   * @remarks
   * The purchase method of the cloud computer.
   * 
   * @example
   * monthPackage
   */
  subPayType?: string;
  /**
   * @remarks
   * The list of tags. A tag consists of a key-value pair and is used to identify resources. You can use tags to group and manage cloud computers for easier search and batch operations. For more information, see [Use tags to manage cloud computers](https://help.aliyun.com/document_detail/203781.html).
   */
  tag?: DescribeDesktopsRequestTag[];
  /**
   * @remarks
   * The username.
   * 
   * @example
   * Alice
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      businessChannel: 'BusinessChannel',
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
      includeAutoSnapshotPolicy: 'IncludeAutoSnapshotPolicy',
      managementFlag: 'ManagementFlag',
      maxResults: 'MaxResults',
      multiResource: 'MultiResource',
      networkInterfaceIp: 'NetworkInterfaceIp',
      nextToken: 'NextToken',
      officeSiteId: 'OfficeSiteId',
      officeSiteName: 'OfficeSiteName',
      onlyDesktopGroup: 'OnlyDesktopGroup',
      osTypes: 'OsTypes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policyGroupId: 'PolicyGroupId',
      protocolType: 'ProtocolType',
      publicIp: 'PublicIp',
      qosRuleId: 'QosRuleId',
      queryFotaUpdate: 'QueryFotaUpdate',
      regionId: 'RegionId',
      reservePoolId: 'ReservePoolId',
      resourceGroupId: 'ResourceGroupId',
      snapshotPolicyId: 'SnapshotPolicyId',
      subPayType: 'SubPayType',
      tag: 'Tag',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessChannel: 'string',
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
      includeAutoSnapshotPolicy: 'boolean',
      managementFlag: 'string',
      maxResults: 'number',
      multiResource: 'boolean',
      networkInterfaceIp: 'string',
      nextToken: 'string',
      officeSiteId: 'string',
      officeSiteName: 'string',
      onlyDesktopGroup: 'boolean',
      osTypes: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      policyGroupId: 'string',
      protocolType: 'string',
      publicIp: 'string',
      qosRuleId: 'string',
      queryFotaUpdate: 'boolean',
      regionId: 'string',
      reservePoolId: 'string',
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

