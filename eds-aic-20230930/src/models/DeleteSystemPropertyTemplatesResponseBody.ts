// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSystemPropertyTemplatesResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * Success.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5C5CEF0A-D6E1-58D3-8750-67DB4F82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

