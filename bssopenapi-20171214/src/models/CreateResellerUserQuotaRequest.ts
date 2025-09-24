// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResellerUserQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  amount?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * 7ed0bedc-056e-4a71-9249-4581615c028f
   */
  outBizId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      currency: 'Currency',
      outBizId: 'OutBizId',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'string',
      currency: 'string',
      outBizId: 'string',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

