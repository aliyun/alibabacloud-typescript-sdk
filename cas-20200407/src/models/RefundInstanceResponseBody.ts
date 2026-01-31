// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefundInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * D3F1FA43-1C26-50A2-8F0F-7A03851DBB46
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

