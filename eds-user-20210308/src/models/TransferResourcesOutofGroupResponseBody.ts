// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferResourcesOutofGroupResponseBody extends $dara.Model {
  /**
   * @example
   * D2B1DF9E-576B-5B91-BAF6-2C3DD1****
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

