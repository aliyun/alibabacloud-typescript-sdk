// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceVswitchResponseBody extends $dara.Model {
  /**
   * @example
   * 67F33190-946B-1105-B6A1-E2DF0426****
   */
  requestId?: string;
  /**
   * @example
   * F2C5B6A8-DD04-51F5-AAD5-BA2FE6FD****
   */
  result?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
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

