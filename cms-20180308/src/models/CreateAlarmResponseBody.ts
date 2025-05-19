// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlarmResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 0c4af0f1-a864-468b-bed3-15c7deff75ee
   */
  data?: string;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 910ABE4E-DC9D-4231-9DC0-C96835553327
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
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

