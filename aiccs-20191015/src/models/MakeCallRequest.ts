// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MakeCallRequest extends $dara.Model {
  /**
   * @remarks
   * Called number.
   * 
   * This parameter is required.
   * 
   * @example
   * 130****0000
   */
  calledNumber?: string;
  /**
   * @remarks
   * Calling number.
   * 
   * This parameter is required.
   * 
   * @example
   * 0571456****
   */
  callingNumber?: string;
  /**
   * @remarks
   * Operation code.
   * 
   * This parameter is required.
   * 
   * @example
   * outBound_Call
   */
  commandCode?: string;
  /**
   * @remarks
   * Pass-through business information.
   * 
   * @example
   * {"bizId": 23323}
   */
  extInfo?: string;
  /**
   * @remarks
   * External account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  outerAccountId?: string;
  /**
   * @remarks
   * External account type.
   * 
   * This parameter is required.
   * 
   * @example
   * ALIPAY
   */
  outerAccountType?: string;
  static names(): { [key: string]: string } {
    return {
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      commandCode: 'CommandCode',
      extInfo: 'ExtInfo',
      outerAccountId: 'OuterAccountId',
      outerAccountType: 'OuterAccountType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumber: 'string',
      callingNumber: 'string',
      commandCode: 'string',
      extInfo: 'string',
      outerAccountId: 'string',
      outerAccountType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

