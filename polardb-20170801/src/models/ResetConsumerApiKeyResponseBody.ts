// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetConsumerApiKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The complete api key, which is returned only in this response.
   * 
   * @example
   * xxx
   */
  apiKey?: string;
  /**
   * @remarks
   * The user ID.
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

