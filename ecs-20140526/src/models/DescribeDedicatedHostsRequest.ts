// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDedicatedHostsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. The key can be up to 128 characters long. It cannot be an empty string, start with `aliyun` or `acs:`, or contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The value can be up to 128 characters long and cannot contain `http://` or `https://`. You can leave the value empty.
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
   * The IDs of dedicated hosts. You can specify up to 100 dedicated host IDs in a JSON array.
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
   * The dedicated host type. Call the [`DescribeDedicatedHostTypes`](https://help.aliyun.com/document_detail/134240.html) operation to get the latest list of dedicated host types.
   * 
   * @example
   * ddh.g5
   */
  dedicatedHostType?: string;
  /**
   * @remarks
   * The reason that the dedicated host is locked. Valid values:
   * 
   * - `financial`: The dedicated host is locked due to an overdue payment.
   * 
   * - `security`: The dedicated host is locked for security reasons.
   * 
   * @example
   * financial
   */
  lockReason?: string;
  /**
   * @remarks
   * The maximum number of results to return per page.
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
   * The token used to retrieve the next page of results. Do not set this parameter for the first request. For subsequent requests, set this parameter to the `NextToken` value returned from the previous response.
   * 
   * @example
   * e71d8a535bd9cc11
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * > This parameter is deprecated. Use `NextToken` and `MaxResults` for pagination.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * > This parameter is deprecated. Use `NextToken` and `MaxResults` for pagination.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  queryInventory?: boolean;
  /**
   * @remarks
   * The ID of the region where the dedicated host resides. Call the [`DescribeRegions`](https://help.aliyun.com/document_detail/25609.html) operation to get the latest list of Alibaba Cloud regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the dedicated host belongs. When you use this parameter to filter resources, the number of resources cannot exceed 1,000.
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
   * Specifies whether to return socket-level capacity information. You can use the information to check the remaining vCPU and memory resources and determine whether an ECS instance of a specific instance type can be created on the dedicated host. Valid values:
   * 
   * - `true`: returns the information. Only specific dedicated host types support this feature. For more information, see [View and export information about dedicated hosts](https://help.aliyun.com/document_detail/68989.html).
   * 
   * - `false`: does not return the information.
   * 
   * >Notice: 
   * 
   * A dedicated host typically has two CPUs, which correspond to Socket 0 and Socket 1. To maximize performance, an ECS instance created on a dedicated host is allocated to a single socket and does not span sockets.
   * 
   * - If the remaining resources on a socket are sufficient for the specified ECS instance type, the instance can be created.
   * 
   * - If the remaining resources on each socket are insufficient for the specified ECS instance type, the instance cannot be created, even if the total remaining resources on both sockets are sufficient.
   * 
   * @example
   * true
   */
  socketDetails?: string;
  /**
   * @remarks
   * The state of the dedicated host. Valid values:
   * 
   * - `Available`: The dedicated host is running as expected.
   * 
   * - `UnderAssessment`: The dedicated host is being assessed for physical hardware risks. The host is available but may have hardware issues that could affect its ECS instances.
   * 
   * - `PermanentFailure`: The dedicated host has a permanent failure and is unavailable.
   * 
   * - `TempUnavailable`: The dedicated host is temporarily unavailable.
   * 
   * - `Redeploying`: The dedicated host is being redeployed.
   * 
   * The default value is `Available`.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tags used to filter dedicated hosts. You can specify up to 20 tags.
   */
  tag?: DescribeDedicatedHostsRequestTag[];
  /**
   * @remarks
   * The zone ID. Call the [`DescribeZones`](https://help.aliyun.com/document_detail/25610.html) operation to get the latest list of Alibaba Cloud zones.
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

