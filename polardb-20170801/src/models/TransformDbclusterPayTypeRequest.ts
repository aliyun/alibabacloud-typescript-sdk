// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransformDBClusterPayTypeRequest extends $dara.Model {
  autoUseCoupon?: boolean;
  /**
   * @remarks
   * A client token to ensure the idempotence of the request. The client generates the token, but you must make sure that the token is unique among different requests. The token is case-sensitive and can be up to 64 ASCII characters in length.
   * 
   * @example
   * 6000170000591aed949d0f5********************
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the PolarDB cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-bp10gr51qasnl****
   */
  DBClusterId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - **Postpaid**: pay-as-you-go
   * 
   * - **Prepaid**: subscription
   * 
   * This parameter is required.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The unit of the subscription duration. Valid values:
   * 
   * - **Year**
   * 
   * - **Month**
   * 
   * > This parameter is required when you set **PayType** to **Prepaid**.
   * 
   * @example
   * Month
   */
  period?: string;
  /**
   * @example
   * 727xxxxxx934
   */
  promotionCode?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
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
   * rg-acfm3f4un32****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The subscription duration. Valid values:
   * 
   * - If you set **Period** to **Year**, the value of **UsedTime** can be 1, 2, or 3.
   * 
   * - If you set **Period** to **Month**, the value of **UsedTime** can be an integer from 1 to 9.
   * 
   * > This parameter is required when you set **PayType** to **Prepaid**.
   * 
   * @example
   * 1
   */
  usedTime?: string;
  static names(): { [key: string]: string } {
    return {
      autoUseCoupon: 'AutoUseCoupon',
      clientToken: 'ClientToken',
      DBClusterId: 'DBClusterId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payType: 'PayType',
      period: 'Period',
      promotionCode: 'PromotionCode',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      usedTime: 'UsedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUseCoupon: 'boolean',
      clientToken: 'string',
      DBClusterId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      payType: 'string',
      period: 'string',
      promotionCode: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      usedTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

