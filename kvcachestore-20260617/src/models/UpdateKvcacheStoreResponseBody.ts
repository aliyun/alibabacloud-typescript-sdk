// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKVCacheStoreResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the modified KVCacheStore.
   * 
   * @example
   * kvs-xxxxx
   */
  kvcsId?: string;
  /**
   * @remarks
   * The specification change order ID. Returned only when Capacity is modified.
   * 
   * @example
   * order-xxxxx
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID. The request ID is returned regardless of whether the operation is successful.
   * 
   * @example
   * 6AA27F1A-A62C-59C3-BCC7-D1DFA4E7EEA0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      kvcsId: 'KvcsId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kvcsId: 'string',
      orderId: 'string',
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

