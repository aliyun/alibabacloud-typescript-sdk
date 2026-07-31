// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDedicatedHostsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the dedicated host. If you specify this parameter, the value cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the dedicated host. If you specify this parameter, the value can be an empty string. The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.
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

export class DescribeDedicatedHostsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the dedicated host cluster.
   * 
   * @example
   * dc-bp12wlf6am0vz9v2****
   */
  dedicatedHostClusterId?: string;
  /**
   * @remarks
   * The list of dedicated host IDs. You can specify up to 100 IDs, separated by commas (,).
   * 
   * @example
   * ["dh-bp165p6xk2tlw61e****", "dh-bp1f9vxmno7emy96****"]
   */
  dedicatedHostIds?: string;
  /**
   * @remarks
   * The name of the dedicated host.
   * 
   * @example
   * MyDDHTestName
   */
  dedicatedHostName?: string;
  /**
   * @remarks
   * The type of the dedicated host. You can call [DescribeDedicatedHostTypes](https://help.aliyun.com/document_detail/134240.html) to query the most recent list of dedicated host types.
   * 
   * @example
   * ddh.g5
   */
  dedicatedHostType?: string;
  /**
   * @remarks
   * The reason why the dedicated host is locked. Valid values:
   * - financial: The dedicated host is locked due to an overdue payment.
   * - security: The dedicated host is locked for security reasons.
   * 
   * @example
   * financial
   */
  lockReason?: string;
  /**
   * @remarks
   * The maximum number of entries per page for a paging query. If you set this parameter, it indicates that you are using the MaxResults and NextToken paging method.
   * 
   * Maximum value: 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set this parameter to the NextToken value returned in the previous call. You do not need to set this parameter for the first request.
   * 
   * @example
   * e71d8a535bd9cc11
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * > This parameter is about to go offline. Use NextToken and MaxResults to perform paging query operations.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * > This parameter is about to go offline. Use NextToken and MaxResults to perform paging query operations.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  queryInventory?: boolean;
  /**
   * @remarks
   * The region ID of the dedicated host. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the dedicated host belongs. When you use this parameter to filter resources, the resource count cannot exceed 1000.
   * 
   * > Filtering by the default resource group is not supported.
   * 
   * @example
   * rg-aek3b6jzp66****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to display socket-level capacity information. You can use socket-level capacity information to view remaining resources (vCPU, memory usage, remaining capacity, and total capacity) to determine whether an ECS instance of a specific instance type can be created. Valid values:
   * 
   * - true: Display socket-level capacity information. Only specific dedicated host types support displaying socket-level resource information. For more information, see [View and export DDH information](https://help.aliyun.com/document_detail/68989.html).
   * - false: Do not display socket-level capacity information.
   * 
   * >Notice: 
   * 
   * Each dedicated host typically has two CPUs, numbered Socket 0 and Socket 1. On a dedicated host, ECS instances are not created across sockets to ensure maximum performance. An ECS instance is created based on a single socket only.
   * 
   * - If the remaining computing resources of one socket are greater than or equal to the instance type to be created, the ECS instance is created.
   * - If the remaining computing resources of each socket are less than the instance type to be created, the ECS instance fails to be created, even if the combined remaining resources of both sockets exceed the instance type requirements.
   * </notice>
   * 
   * @example
   * true
   */
  socketDetails?: string;
  /**
   * @remarks
   * The usage status of the dedicated host. Valid values:
   * 
   * - Available: The dedicated host is running normally.
   * 
   * - UnderAssessment: The physical machine is at risk. The physical machine is available but may cause issues for ECS instances on the dedicated host.
   * 
   * - PermanentFailure: The dedicated host has a permanent failure and is unavailable.
   * 
   * - TempUnavailable: The dedicated host is temporarily unavailable.
   * 
   * - Redeploying: The dedicated host is being restored.
   * 
   * Default value: Available.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The list of tags. Valid values of N: 0 to 20.
   */
  tag?: DescribeDedicatedHostsRequestTag[];
  /**
   * @remarks
   * The zone ID. You can call [DescribeZones](https://help.aliyun.com/document_detail/25610.html) to query the most recent zone list.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostClusterId: 'DedicatedHostClusterId',
      dedicatedHostIds: 'DedicatedHostIds',
      dedicatedHostName: 'DedicatedHostName',
      dedicatedHostType: 'DedicatedHostType',
      lockReason: 'LockReason',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryInventory: 'QueryInventory',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      socketDetails: 'SocketDetails',
      status: 'Status',
      tag: 'Tag',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostClusterId: 'string',
      dedicatedHostIds: 'string',
      dedicatedHostName: 'string',
      dedicatedHostType: 'string',
      lockReason: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      queryInventory: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      socketDetails: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeDedicatedHostsRequestTag },
      zoneId: 'string',
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

