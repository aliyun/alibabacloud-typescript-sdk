// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDedicatedHostsRequestTag } from "./DescribeDedicatedHostsRequestTag";


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
   * The IDs of dedicated hosts. You can specify up to 100 dedicated host IDs in a single request. Separate the IDs with commas (,).
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
   * The dedicated host type. You can call the [DescribeDedicatedHostTypes](https://help.aliyun.com/document_detail/134240.html) operation to query the most recent list of dedicated host types.
   * 
   * @example
   * ddh.g5
   */
  dedicatedHostType?: string;
  /**
   * @remarks
   * The reason why the dedicated host is locked. Valid values:
   * 
   * *   financial: The dedicated host is locked due to overdue payments.
   * *   security: The dedicated host is locked due to security reasons.
   * 
   * @example
   * financial
   */
  lockReason?: string;
  /**
   * @remarks
   * The maximum number of entries per page. If you specify this parameter, both MaxResults and NextToken are used for a paged query.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * e71d8a535bd9cc11
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
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
   * The ID of the resource group to which the dedicated host belongs. When this parameter is specified to query resources, up to 1,000 resources that belong to the specified resource group can be displayed in the response.
   * 
   * > Resources in the default resource group are displayed in the response regardless of how this parameter is set.
   * 
   * @example
   * rg-aek3b6jzp66****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to display socket information. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  socketDetails?: string;
  /**
   * @remarks
   * The service state of the dedicated host. Valid values:
   * 
   * *   Available: The dedicated host is running normally.
   * *   UnderAssessment: The dedicated host is available but has potential risks that may cause the ECS instances on the dedicated host to fail.
   * *   PermanentFailure: The dedicated host encounters permanent failures and is unavailable.
   * *   TempUnavailable: The dedicated host is temporarily unavailable.
   * *   Redeploying: The dedicated host is being restored.
   * 
   * Default value: Available.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tags of the dedicated host.
   */
  tag?: DescribeDedicatedHostsRequestTag[];
  /**
   * @remarks
   * The zone ID of the dedicated host. You can call the [DescribeZones](https://help.aliyun.com/document_detail/25610.html) operation to query the most recent zone list.
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

