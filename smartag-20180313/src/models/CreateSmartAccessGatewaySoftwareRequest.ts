// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSmartAccessGatewaySoftwareRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment for the bills of the Smart Access Gateway app instance. Valid values:
   * 
   * - **true**: yes.
   * - **false** (default): no.
   * 
   * If you set this parameter to false, you must go to the Orders page in the console to complete the payment after you invoke this operation. Otherwise, the instance cannot be created.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The billing method of the Smart Access Gateway app instance. Valid value: **PREPAY** (upfront). This value serves as an identity indicating that the Smart Access Gateway app instance is a resource that requires upfront payment before use.
   * 
   * This parameter is required.
   * 
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The monthly data plan provided for each client account. Unit: GB. Valid value: **5**.
   * 
   * > Currently, only a free monthly data plan of 5 GB is supported for each client account.
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
   * The purchase duration of the Smart Access Gateway app instance. Unit: months. Valid values: **1** to **9**, **12**, **24**, and **36**.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
   */
  period?: number;
  /**
   * @remarks
   * The region ID of the Smart Access Gateway app instance.
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
   * The number of client accounts for the Smart Access Gateway app instance.
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

