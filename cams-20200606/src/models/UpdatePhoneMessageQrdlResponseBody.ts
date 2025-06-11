// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdatePhoneMessageQrdlResponseBodyData } from "./UpdatePhoneMessageQrdlResponseBodyData";


export class UpdatePhoneMessageQrdlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result returns OK as normal.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: UpdatePhoneMessageQrdlResponseBodyData;
  /**
   * @remarks
   * Error description information.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1612C226-E271-4CFE-9F18-4066D******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdatePhoneMessageQrdlResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

