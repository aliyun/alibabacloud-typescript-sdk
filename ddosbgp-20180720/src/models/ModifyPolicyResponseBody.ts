// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique ID for each request, which can be used for troubleshooting and diagnostics.
   * 
   * @example
   * B4B379C2-9319-4C6B-B579-FE36831****
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

