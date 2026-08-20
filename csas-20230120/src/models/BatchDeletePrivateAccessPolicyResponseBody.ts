// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDeletePrivateAccessPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 019F3F8C-1127-5152-80E0-4F9D45DB5756
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

