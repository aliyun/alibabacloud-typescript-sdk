// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AccountContactDeleteResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * {\\"count\\": 1}
   */
  data?: boolean;
  /**
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @example
   * 8CCD6B37-98E7-5A68-B1F7-A900C9BFF45C
   */
  requestId?: string;
  /**
   * @example
   * True
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
      data: 'boolean',
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

