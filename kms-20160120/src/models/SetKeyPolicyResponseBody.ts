// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetKeyPolicyResponseBody extends $dara.Model {
  /**
   * @example
   * 381D5D33-BB8F-395F-8EE4-AE3BB4B523C8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

