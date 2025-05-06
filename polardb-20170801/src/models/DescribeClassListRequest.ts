// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClassListRequest extends $dara.Model {
  /**
   * @remarks
   * The code of the commodity. Valid values:
   * 
   * *   polardb_sub: the subscription cluster in regions in the Chinese mainland
   * *   polardb_sub _intl: the subscription cluster in regions outside the Chinese mainland
   * *   polardb_payg: the pay-as-you-go cluster in regions in the Chinese mainland
   * *   polardb_payg_intl: the pay-as-you-go cluster in regions outside the Chinese mainland
   * *   polardb_sub_jushita: the subscription cluster for CloudTmall
   * *   polardb_payg_jushita: the pay-as-you-go cluster for CloudTmall
   * *   polardb_sub_cainiao: the subscription cluster for Cainiao
   * *   polardb_payg_cainiao: the pay-as-you-go cluster for Cainiao
   * 
   * > *   If you use an Alibaba Cloud account on the China site, you can view only the codes of the commodities that are available in the Chinese mainland.
   * >*   If you are using an Alibaba Cloud international account, you can view only the codes of the commodities that are available outside the Chinese mainland.
   * >*   If you use a CloudTmall account, you can view only the codes of the commodities that are available in CloudTmall.
   * >*   If you use a Cainiao account, you can view only the codes of the commodities that are available in Cainiao.
   * 
   * This parameter is required.
   * 
   * @example
   * polardb_sub
   */
  commodityCode?: string;
  /**
   * @remarks
   * The number of nodes. Valid values:
   * 
   * *   single: Standalone Edition.
   * *   cluster: Cluster Edition.
   * *   all: both Standalone Edition and Cluster Edition.
   * 
   * @example
   * cluster
   */
  masterHa?: string;
  /**
   * @remarks
   * The type of the order. Valid values:
   * 
   * *   BUY: The order is used to purchase a cluster.
   * *   UPGRADE: The order is used to change the specifications of a cluster.
   * *   RENEW: The order is used to renew a cluster.
   * *   CONVERT: The order is used to change the billing method of a cluster.
   * 
   * @example
   * BUY
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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
      commodityCode: 'CommodityCode',
      masterHa: 'MasterHa',
      orderType: 'OrderType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      masterHa: 'string',
      orderType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
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

