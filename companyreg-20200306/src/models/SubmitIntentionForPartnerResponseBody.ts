// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitIntentionForPartnerResponseBody extends $dara.Model {
  errorMsg?: string;
  /**
   * @example
   * I20211223101045000001
   */
  intentionBizId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6A603AA0-73BA-52B3-AC7D-0F846ECF7A9D
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorMsg: 'ErrorMsg',
      intentionBizId: 'IntentionBizId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMsg: 'string',
      intentionBizId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

