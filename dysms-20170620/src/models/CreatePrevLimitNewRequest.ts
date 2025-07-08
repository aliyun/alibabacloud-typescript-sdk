// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePrevLimitNewRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  hourLimit?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  increaseRate?: number;
  ownerId?: number;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  successRate?: number;
  static names(): { [key: string]: string } {
    return {
      hourLimit: 'HourLimit',
      increaseRate: 'IncreaseRate',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      successRate: 'SuccessRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hourLimit: 'number',
      increaseRate: 'number',
      ownerId: 'number',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      successRate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

