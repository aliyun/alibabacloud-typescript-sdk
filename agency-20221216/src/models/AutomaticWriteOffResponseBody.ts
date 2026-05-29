// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AutomaticWriteOffResponseBody extends $dara.Model {
  /**
   * @remarks
   * code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  message?: string;
  /**
   * @example
   * 6fc1309b17543600398356606d0096
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
      data: 'boolean',
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

