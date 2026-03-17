// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeSmartAccessGatewaySoftwareRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-payment for the instance.
   * 
   * *   **false**: no
   * *   **true**: yes
   * 
   * >  If the parameter is set to false, you must complete the payment in the SAG console after you call this operation.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The data transfer plan for each client account. Unit: GB.
   * 
   * >  Each client account has a data transfer plan of 5 GB that is free of charge each month.
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
   * The ID of the region where the SAG app instance is created.
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
   * The ID of the SAG app instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-8biez7habqwmx6****
   */
  smartAGId?: string;
  /**
   * @remarks
   * The maximum number of client accounts supported by the SAG app instance.
   * 
   * After you complete the payment, you can create a client account for each employee who needs to use the SAG app.
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
      dataPlan: 'DataPlan',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      userCount: 'UserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      dataPlan: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
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

