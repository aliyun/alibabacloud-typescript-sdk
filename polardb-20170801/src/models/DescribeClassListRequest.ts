// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClassListRequest extends $dara.Model {
  /**
   * @remarks
   * The commodity code. Valid values:
   * 
   * - polardb_sub: subscription for the Chinese mainland.
   * 
   * - polardb_sub_intl: subscription for regions in Hong Kong (China) and outside the Chinese mainland.
   * 
   * - polardb_payg: pay-as-you-go for the Chinese mainland.
   * 
   * - polardb_payg_intl: pay-as-you-go for regions in Hong Kong (China) and outside the Chinese mainland.
   * 
   * - polardb_sub_jushita: Jushita subscription.
   * 
   * - polardb_payg_jushita: Jushita pay-as-you-go.
   * 
   * - polardb_sub_cainiao: Cainiao subscription.
   * 
   * - polardb_payg_cainiao: Cainiao pay-as-you-go.
   * 
   * > * If you use an Alibaba Cloud China site account, you can view only the commodity codes for the Chinese mainland.
   * >
   * > * If you use an Alibaba Cloud international site account, you can view only the commodity codes for regions outside the Chinese mainland.
   * >
   * > * If you use a Jushita account, you can view only the commodity codes for Jushita.
   * >
   * > * If you use a Cainiao account, you can view only the commodity codes for Cainiao.
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
   * - single: single node.
   * 
   * - cluster: cluster.
   * 
   * - all: single node and cluster.
   * 
   * @example
   * cluster
   */
  masterHa?: string;
  /**
   * @remarks
   * The order type. Valid values:
   * 
   * - BUY: new purchase.
   * 
   * - UPGRADE: changes the configuration.
   * 
   * - RENEW: renews the instance.
   * 
   * - CONVERT: changes the billing method.
   * 
   * @example
   * BUY
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * > This parameter is required if you use an Alibaba Cloud international site account.
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

