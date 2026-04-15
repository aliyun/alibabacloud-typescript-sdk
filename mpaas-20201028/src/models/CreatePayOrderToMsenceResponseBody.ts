// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePayOrderToMsenceResponseBodyMpaasOrderCreateResponse extends $dara.Model {
  /**
   * @example
   * 3929520
   */
  bizOrderId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizOrderId: 'BizOrderId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizOrderId: 'string',
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

export class CreatePayOrderToMsenceResponseBody extends $dara.Model {
  mpaasOrderCreateResponse?: CreatePayOrderToMsenceResponseBodyMpaasOrderCreateResponse;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 11E66B29-9E5E-5C10-B64E-B5A0E0F26355
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  resultCode?: string;
  /**
   * @example
   * SUCCESS
   */
  resultMsg?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      mpaasOrderCreateResponse: 'MpaasOrderCreateResponse',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mpaasOrderCreateResponse: CreatePayOrderToMsenceResponseBodyMpaasOrderCreateResponse,
      requestId: 'string',
      resultCode: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.mpaasOrderCreateResponse && typeof (this.mpaasOrderCreateResponse as any).validate === 'function') {
      (this.mpaasOrderCreateResponse as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

