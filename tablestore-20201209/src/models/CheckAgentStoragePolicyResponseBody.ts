// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckAgentStoragePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Verification passed.
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which can be used for troubleshooting.
   * 
   * @example
   * E734979F-5A44-5993-9CE5-C23103576923
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

