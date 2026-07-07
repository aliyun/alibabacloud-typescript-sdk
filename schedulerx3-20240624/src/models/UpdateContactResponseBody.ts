// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateContactResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * not support query script history, please upgrade engine version to 2.2.2+
   */
  message?: string;
  /**
   * @example
   * F131C3E0-3FAA-5FA4-A6F3-E974D69EF3C5
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
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

