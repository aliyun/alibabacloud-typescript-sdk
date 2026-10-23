// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDedicatedHostsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the dedicated host. If you specify this parameter, it cannot be an empty string. The tag key can be up to 128 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the dedicated host. If you specify this parameter, it can be an empty string. The tag value can be up to 128 characters in length, and cannot contain `http://` or `https://`.
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
   * The IDs of the dedicated hosts. You can specify up to 100 IDs. Separate multiple IDs with commas (,).
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
   * The dedicated host type. You can call the [DescribeDedicatedHostTypes](https://help.aliyun.com/document_detail/134240.html) operation to query the most recent dedicated host type list.
   * 
   * @example
   * ddh.g5
   */
  dedicatedHostType?: string;
  /**
   * @remarks
   * The reason why the dedicated host is locked. Valid values:
   * - financial: The dedicated host is locked due to overdue payments.
   * - security: The dedicated host is locked due to security reasons.
   * 
   * @example
   * financial
   */
  lockReason?: string;
  /**
   * @remarks
   * The maximum number of entries per page for a paged query. If you specify this parameter, the query is performed by using the combination of MaxResults and NextToken.
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
   * Specifies whether to return the details of the dedicated host.
   * 
   * @example
   * false
   */
  needHostDetail?: string;
  /**
   * @remarks
   * The query token. Set the value to the NextToken value returned from the previous call to this operation. You do not need to specify this parameter when you call this operation for the first time.
   * 
   * @example
   * e71d8a535bd9cc11
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * > This parameter will soon be deprecated. We recommend that you use NextToken and MaxResults for pagination.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * > This parameter will soon be deprecated. We recommend that you use NextToken and MaxResults for pagination.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  queryInventory?: boolean;
  /**
   * @remarks
   * The region ID of the dedicated host. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the dedicated host belongs. When you use this parameter to filter resources, the resource count cannot exceed 1,000.
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
   * Specifies whether to display the capacity information at the socket level. You can view the remaining resource information (vCPU and memory usage, remaining amount, and total amount) at the socket level to determine whether ECS instances of the corresponding types can be created. Valid values:
   * 
   * - true: Display the information. Only dedicated hosts of specific types support displaying socket-level resource information. For more information, see [View and export dedicated host information](https://help.aliyun.com/document_detail/68989.html).
   * - false: Do not display the information.
   * 
   * >Notice: 
   * 
   * Generally, each dedicated host has two CPUs, and the ID of each CPU is Socket 0 or Socket 1. On an exclusive dedicated host, to ensure that the ECS instances on the dedicated host deliver maximum performance, ECS instances are not created across sockets. This means that an ECS instance is created based on only one socket.
   * 
   * - If the remaining computing resources of one socket are greater than or equal to the requirements of the ECS instance type to be created, the ECS instance is created.
   * - If the remaining computing resources of each socket are less than the requirements of the ECS instance type to be created, the ECS instance fails to be created. Even if the total remaining resources of the two sockets on the dedicated host meet the requirements of the ECS instance type, the ECS instance still cannot be created.
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
   * - Available: The dedicated host is running. This is the normal running status of the dedicated host.
   * 
   * - UnderAssessment: The physical machine has risks and is in the incubation period of a fault. The physical machine is available, but may cause issues for the ECS instances on the dedicated host.
   * 
   * - PermanentFailure: A permanent failure occurred and the dedicated host is unavailable.
   * 
   * - TempUnavailable: The dedicated host is temporarily unavailable.
   * 
   * - Redeploying: The dedicated host is being recovered.
   * 
   * Default value: Available.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The list of tags. The list can contain 0 to 20 tags.
   */
  tag?: DescribeDedicatedHostsRequestTag[];
  /**
   * @remarks
   * The zone ID. You can call the [DescribeZones](https://help.aliyun.com/document_detail/25610.html) operation to query the most recent zone list.
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
      needHostDetail: 'NeedHostDetail',
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
      needHostDetail: 'string',
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

