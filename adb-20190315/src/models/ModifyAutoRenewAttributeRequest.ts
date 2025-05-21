// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAutoRenewAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1u389j9zjh5****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The renewal duration. Default value: **1**.
   * 
   * *   Valid values when PeriodUnit is set to **Month**: 1 to 11.
   * *   Valid values when PeriodUnit is set to **Year**: 1, 2, 3, and 5.
   * 
   * >  Longer subscription durations offer more savings. Purchasing a cluster for one year is more cost-effective than purchasing the cluster for 10 or 11 months.
   * 
   * @example
   * 1
   */
  duration?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The unit of the renewal duration. Default value: **Month**. Valid values:
   * 
   * *   **Year**
   * *   **Month**
   * 
   * @example
   * Year
   */
  periodUnit?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The renewal status of the cluster. Valid values:
   * 
   * *   **AutoRenewal**: The cluster is automatically renewed.
   * *   **Normal**: The cluster is manually renewed.
   * *   **NotRenewal**: The cluster is not renewed.
   * 
   * @example
   * AutoRenewal
   */
  renewalStatus?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      duration: 'Duration',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      periodUnit: 'PeriodUnit',
      regionId: 'RegionId',
      renewalStatus: 'RenewalStatus',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      duration: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      periodUnit: 'string',
      regionId: 'string',
      renewalStatus: 'string',
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

