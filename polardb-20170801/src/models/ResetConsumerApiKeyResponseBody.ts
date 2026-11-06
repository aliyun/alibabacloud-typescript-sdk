// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetConsumerApiKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The complete API key. This value is returned only in the current response.
   * 
   * @example
   * 6c4b1f0317cd4fd7a5b446d3503d**
   */
  apiKey?: string;
  /**
   * @remarks
   * The ID of the consumer.
   * 
   * @example
   * c-mqveroemc***
   */
  consumerId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3AA69096-757C-4647-B36C-29EBC2******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      consumerId: 'ConsumerId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      consumerId: 'string',
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

