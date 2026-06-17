// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAutoRenewAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud provider of the cluster.
   * 
   * @example
   * ENS
   */
  cloudProvider?: string;
  /**
   * @remarks
   * The ID of the database cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-***************
   */
  DBClusterIds?: string;
  /**
   * @remarks
   * The auto-renewal period. Valid values:
   * 
   * - When **PeriodUnit** is **Month**, the valid values are `[1,2,3,6,12]`.
   * 
   * - When **PeriodUnit** is **Year**, the valid values are `[1-3]`.
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
   * The unit of the auto-renewal period. Valid values:
   * 
   * - **Year**
   * 
   * - **Month**
   * 
   * Default value: **Month**.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The region ID. The ID can be up to 50 characters in length.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/2319134.html) operation to query available regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The auto-renewal status. Valid values:
   * 
   * - **AutoRenewal**: Enables auto-renewal.
   * 
   * - **Normal**: Enables manual renewal.
   * 
   * - **NotRenewal**: Disables renewal.
   * 
   * Default value: **AutoRenewal**.
   * 
   * > When you set this parameter to **NotRenewal**, the system stops sending expiration reminders and sends only a non-renewal notification three days before the expiration date.
   * 
   * @example
   * AutoRenewal
   */
  renewalStatus?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-************
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cloudProvider: 'CloudProvider',
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
      cloudProvider: 'string',
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

