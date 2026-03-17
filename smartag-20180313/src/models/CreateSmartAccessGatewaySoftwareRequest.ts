// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSmartAccessGatewaySoftwareRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically complete the payment of the order. Valid values:
   * 
   * *   **true**: yes
   * *   **false** (default): no
   * 
   * If you set the parameter to false, go to Billing Management to complete the payment after you call this operation. The instance is created only after you complete the payment.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The billing method of the SAG app instance. Set the value to **PREPAY**. This value indicates that the SAG app instance is a subscription resource.
   * 
   * This parameter is required.
   * 
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The size of the free data plan that is allocated to each client account per month. Unit: GB. Valid value: **5**.
   * 
   * >  This value specifies that a free data plan of 5 GB is allocated to each client account per month.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  dataPlan?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The subscription duration of the SAG app instance. Unit: months.
   * 
   * Valid values: **1** to **9**, **12**, **24**, and **36**.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
   */
  period?: number;
  /**
   * @remarks
   * The ID of the region where you want to create the SAG app instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The maximum number of client accounts that can be created on the SAG app instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  userCount?: number;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      chargeType: 'ChargeType',
      dataPlan: 'DataPlan',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      userCount: 'UserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      chargeType: 'string',
      dataPlan: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      userCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

