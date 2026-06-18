// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiccsSmartCallResponseBody extends $dara.Model {
  /**
   * @remarks
   * Unique receipt ID for this call.
   * 
   * @example
   * 116012854210^10281427****
   */
  code?: string;
  /**
   * @remarks
   * Request status code. A return value of "OK" indicates that the request succeeded.
   * 
   * @example
   * OK
   */
  data?: string;
  /**
   * @remarks
   * Description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A90E4451-FED7-49D2-87C8-00700A8C4D0D
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
      data: 'string',
      message: 'string',
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

