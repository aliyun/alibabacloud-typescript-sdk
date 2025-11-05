// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditNewBuyStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status Code</br>
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Success or not</br>
   * 
   * @example
   * true
   */
  data?: string;
  /**
   * @remarks
   * Message</br>
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Message</br>
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * Request ID</br>
   * 
   * @example
   * 9C14ADFE-DF0A-54D4-8BD5-45D0839246B4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      msg: 'Msg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      msg: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

