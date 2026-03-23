// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewInstanceRequest extends $dara.Model {
  autoPay?: string;
  autoRenew?: string;
  autoUseCoupon?: boolean;
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  period?: number;
  promotionCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      autoUseCoupon: 'AutoUseCoupon',
      clientToken: 'ClientToken',
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
      period: 'Period',
      promotionCode: 'PromotionCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'string',
      autoRenew: 'string',
      autoUseCoupon: 'boolean',
      clientToken: 'string',
      DBInstanceId: 'string',
      ownerId: 'number',
      period: 'number',
      promotionCode: 'string',
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

