// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelPickUpWaybillRequest extends $dara.Model {
  /**
   * @remarks
   * The cancellation reason.
   * 
   * This parameter is required.
   * 
   * @example
   * {\\"action\\":\\"UPDATE_DESC\\",\\"value\\":\\"The courier is unable to pick up the package.\\"}
   */
  cancelDesc?: string;
  /**
   * @remarks
   * The ID of the external order.
   * 
   * This parameter is required.
   * 
   * @example
   * 1145678823****
   */
  outerOrderCode?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cancelDesc: 'CancelDesc',
      outerOrderCode: 'OuterOrderCode',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelDesc: 'string',
      outerOrderCode: 'string',
      ownerId: 'number',
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

