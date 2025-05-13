// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteILMPolicyResponseBody extends $dara.Model {
  /**
   * @example
   * 694FDC20-0FDD-47C4-B921-BFF902FA****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

