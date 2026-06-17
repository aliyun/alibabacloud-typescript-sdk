// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConsumerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The full APIKey, returned only in this response.
   * 
   * @example
   * 6c4b1f0317cd4fd7a5b446d3503d**
   */
  apiKey?: string;
  /**
   * @remarks
   * The consumer ID.
   * 
   * @example
   * c-mqveroemc***
   */
  consumerId?: string;
  /**
   * @remarks
   * The key type. The value is always ApiKey.
   * 
   * @example
   * ApiKey
   */
  keyType?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CD3FA5F3-FAF3-44CA-AFFF-BAF869******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      consumerId: 'ConsumerId',
      keyType: 'KeyType',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      consumerId: 'string',
      keyType: 'string',
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

