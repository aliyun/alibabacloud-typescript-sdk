// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PayOrderRequestEcIdAccountIds extends $dara.Model {
  accountIds?: number[];
  /**
   * @example
   * 123
   */
  ecId?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      ecId: 'EcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'number' },
      ecId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PayOrderRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1178418164369806
   */
  buyerId?: number;
  ecIdAccountIds?: PayOrderRequestEcIdAccountIds[];
  /**
   * @example
   * 26888345
   */
  nbid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 260591304500425
   */
  orderId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 201437655683478597
   */
  paySubmitUid?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 201437655683478597
   */
  payerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eyJwYWdlTnVtIjoyLCJwYWdlU2l6ZSI6MTB9
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      buyerId: 'BuyerId',
      ecIdAccountIds: 'EcIdAccountIds',
      nbid: 'Nbid',
      orderId: 'OrderId',
      paySubmitUid: 'PaySubmitUid',
      payerId: 'PayerId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyerId: 'number',
      ecIdAccountIds: { 'type': 'array', 'itemType': PayOrderRequestEcIdAccountIds },
      nbid: 'string',
      orderId: 'number',
      paySubmitUid: 'number',
      payerId: 'number',
      token: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ecIdAccountIds)) {
      $dara.Model.validateArray(this.ecIdAccountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

