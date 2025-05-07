// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectList } from "./CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectList";


export class CreatePickUpWaybillPreQueryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * The information about whether the courier company can accept the order.
   */
  cpTimeSelectList?: CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectList[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Success
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
   * The response content.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      cpTimeSelectList: 'CpTimeSelectList',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      cpTimeSelectList: { 'type': 'array', 'itemType': CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectList },
      errorCode: 'string',
      errorMsg: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.cpTimeSelectList)) {
      $dara.Model.validateArray(this.cpTimeSelectList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

