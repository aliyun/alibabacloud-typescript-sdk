// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApiGroupNetworkPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4E707B25-5119-5ACF-9D26-7D2A2762F05C
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

