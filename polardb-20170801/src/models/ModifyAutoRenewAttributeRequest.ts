// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAutoRenewAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID. If you need to specify multiple cluster IDs, separate the cluster IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * pc-***************
   */
  DBClusterIds?: string;
  /**
   * @remarks
   * The automatic renewal period.
   * 
   * *   Valid values when you set the **PeriodUnit** parameter to **Month**: `1, 2, 3, 6, and 12`.
   * *   Valid values when you set the **PeriodUnit** parameter to **Year**: `1, 2, and 3`.
   * 
   * Default value: **1**.
   * 
   * @example
   * 1
   */
  duration?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The unit of the renewal period. Valid values:
   * 
   * *   **Year**
   * *   **Month**
   * 
   * Default value: **Month**.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The ID of the region. The region ID can be up to 50 characters in length.
   * cn-hangzhou
   *  
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query the available regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The auto-renewal status of the cluster. Valid values:
   * 
   * *   **AutoRenewal:** The cluster is automatically renewed.
   * *   **Normal**: The cluster is manually renewed.
   * *   **NotRenewal:** The cluster is not renewed after expiration.
   * 
   * Default value: **AutoRenewal**.
   * 
   * >  If you set this parameter to **NotRenewal**, the system sends a notification that indicates the cluster is not renewed three days before the cluster expires. After the cluster expires, the system no longer sends a notification.
   * 
   * @example
   * AutoRenewal
   */
  renewalStatus?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-************
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterIds: 'DBClusterIds',
      duration: 'Duration',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      periodUnit: 'PeriodUnit',
      regionId: 'RegionId',
      renewalStatus: 'RenewalStatus',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterIds: 'string',
      duration: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      periodUnit: 'string',
      regionId: 'string',
      renewalStatus: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

