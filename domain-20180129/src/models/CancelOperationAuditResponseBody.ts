// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelOperationAuditResponseBody extends $dara.Model {
  /**
   * @example
   * 9KFCF6F8-243C-40EC-8035-4B12KKFD7D90
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

