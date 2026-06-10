// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. If you specify `Tag`, then `Key` is required. The key can be up to 128 characters long. It cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`. It cannot consist only of whitespace.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The value can be up to 128 characters long. It cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
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
   * The region ID. Call [](t2167755.xdita#)to list regions that support Elastic Desktop Service (EDS).
   */
  businessChannel?: string;
  /**
   * @remarks
   * The expiration time for subscription desktops.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The operating system type.
   * 
   * @example
   * dg-2i8qxpv6t1a03****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The list of authorized users for the desktop. You can specify 1 to 100 users.
   * 
   * > Only one user can connect to and use the desktop at a time.
   * 
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopId?: string[];
  /**
   * @remarks
   * The directory ID. This is the same as the office site ID.
   * 
   * @example
   * DemoComputer01
   */
  desktopName?: string;
  /**
   * @remarks
   * The number of entries to return on each page in a paged query.
   * 
   * - Maximum value: 100.
   * 
   * - Default value: 10
   * 
   * @example
   * Running
   */
  desktopStatus?: string;
  /**
   * @remarks
   * The elastic GPU pool ID.
   */
  desktopStatusList?: string[];
  /**
   * @remarks
   * The list of image IDs.
   * 
   * @example
   * eds.general.2c8g
   */
  desktopType?: string;
  /**
   * @remarks
   * The office site ID.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  directoryId?: string;
  /**
   * @remarks
   * The list of authorized users to exclude from the desktop. You can specify 1 to 100 users.
   * 
   * @example
   * alice
   */
  endUserId?: string[];
  /**
   * @remarks
   * Whether to exclude pooled desktops (desktops in a desktop pool).
   * 
   * @example
   * andy
   */
  excludedEndUserId?: string[];
  /**
   * @remarks
   * The protocol type.
   * 
   * @example
   * 2022-12-31T15:59:59Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The page number of the current page in a paged query.
   * 
   * @example
   * true
   */
  fillResourceGroup?: boolean;
  /**
   * @remarks
   * The management flag.
   * 
   * @example
   * false
   */
  filterDesktopGroup?: boolean;
  /**
   * @remarks
   * The public network bandwidth throttling rule ID.
   * 
   * @example
   * gp-0bm2iz1v6m6nx****
   */
  gpuInstanceGroupId?: string;
  /**
   * @remarks
   * The cloud computer status.
   * 
   * @example
   * dg-boyczi8enfyc5****
   */
  groupId?: string;
  /**
   * @remarks
   * The list of desktop statuses.
   */
  imageId?: string[];
  includeAutoSnapshotPolicy?: boolean;
  /**
   * @remarks
   * Whether to query image version information for the desktop.
   * 
   * @example
   * NoFlag
   */
  managementFlag?: string;
  /**
   * @remarks
   * The token that starts the next query. An empty NextToken means no more results.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * false
   */
  multiResource?: boolean;
  /**
   * @remarks
   * The user name.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The name of the office network.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The desktop policy ID.
   * 
   * @example
   * default
   */
  officeSiteName?: string;
  /**
   * @remarks
   * The desktop pool ID. If you specify `DesktopId`, this parameter is ignored. If `DesktopId` is empty, the system uses `DesktopGroupId` to retrieve all desktop IDs in the pool.
   * 
   * @example
   * true
   */
  onlyDesktopGroup?: boolean;
  /**
   * @remarks
   * The desktop instance type. Call [](t2167746.xdita#)to list supported instance types.
   */
  osTypes?: string[];
  /**
   * @remarks
   * The maximum number of entries to return on each page in a paged query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Whether multiple resources exist.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The billing method for the desktop.
   * 
   * @example
   * system-all-enabled-policy
   */
  policyGroupId?: string;
  /**
   * @remarks
   * The desktop IDs. You can specify 1 to 100 IDs.
   * 
   * @example
   * ASP
   */
  protocolType?: string;
  /**
   * @remarks
   * The purchase method for the desktop.
   * 
   * @example
   * qos-5605u0gelk200****
   */
  qosRuleId?: string;
  /**
   * @remarks
   * The list of tags. Each tag is a key-value pair used to label resources. Use tags to group and manage desktops, making them easier to search and operate on in bulk. For more information, see [](t2042630.xdita#).
   * 
   * @example
   * false
   */
  queryFotaUpdate?: boolean;
  /**
   * @remarks
   * The cloud computer pool ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Whether to query enterprise resource group information.
   * 
   * @example
   * rg-4hsvzbbmqdzu3s****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Whether to query only pooled desktops (desktops in a desktop pool).
   * 
   * @example
   * sp-hb12mclyne09xw***
   */
  snapshotPolicyId?: string;
  /**
   * @remarks
   * The enterprise resource group ID.
   * 
   * @example
   * monthPackage
   */
  subPayType?: string;
  /**
   * @remarks
   * The snapshot policy ID.
   */
  tag?: DescribeDesktopsRequestTag[];
  /**
   * @remarks
   * The desktop name.
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

