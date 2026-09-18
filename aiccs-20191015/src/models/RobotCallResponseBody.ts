// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RobotCallResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request status code. OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The unique receipt ID of this call, which is the unique call ID.
   * 
   * @example
   * 1160128*****^10281427*****
   */
  data?: string;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
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

