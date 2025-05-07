// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePickUpWaybillResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The code of the courier company.
   * 
   * @example
   * YTO
   */
  cpCode?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * none
   */
  errorMsg?: string;
  /**
   * @remarks
   * The pickup code.
   * 
   * @example
   * 3524
   */
  gotCode?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 77312345629****
   */
  mailNo?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      cpCode: 'CpCode',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      gotCode: 'GotCode',
      mailNo: 'MailNo',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpCode: 'string',
      errorCode: 'string',
      errorMsg: 'string',
      gotCode: 'string',
      mailNo: 'string',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

