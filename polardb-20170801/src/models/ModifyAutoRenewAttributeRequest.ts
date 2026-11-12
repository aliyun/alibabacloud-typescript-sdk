// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAutoRenewAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud service provider to which the instance belongs.
   * 
   * @example
   * ENS
   */
  cloudProvider?: string;
  /**
   * @remarks
   * The IDs of the database clusters. The billing method of the clusters must be subscription. If you call this operation for a pay-as-you-go cluster, the OperationDenied.DBClusterPayType error may be returned. You can first call the TransformDBClusterPayType operation to change the billing method. Usage notes: The billing method of the cluster must be subscription. Calling this operation for a pay-as-you-go cluster returns the OperationDenied.DBClusterPayType error.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-***************
   */
  DBClusterIds?: string;
  /**
   * @remarks
   * The auto-renewal duration for the instance. Valid values: 
   * 
   * - If **PeriodUnit** is set to **Month**, valid values are `1`, `2`, `3`, `6`, and `12`.
   * - If **PeriodUnit** is set to **Year**, valid values are `1`, `2`, and `3`.
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
   * The unit of the renewal duration. Valid values: 
   * 
   * - **Year**: Year.
   * - **Month**: Month.
   *  
   * Default value: **Month**.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The region ID. The value can be up to 50 characters in length.
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
   * - **AutoRenewal**: Auto-renewal.
   * - **Normal**: Manual renewal. 
   * - **NotRenewal**: No renewal. 
   * 
   * Default value: **AutoRenewal**. 
   * 
   * > If you set this parameter to **NotRenewal**, the system no longer sends expiration reminders and only sends a non-renewal reminder three days before expiration.
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

