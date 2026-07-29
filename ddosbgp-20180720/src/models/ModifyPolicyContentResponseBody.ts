// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPolicyContentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique ID for each request, which can be used for troubleshooting and diagnostics.
   * 
   * @example
   * 3777EF25-940B-51F4-BB1D-99B5********
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

