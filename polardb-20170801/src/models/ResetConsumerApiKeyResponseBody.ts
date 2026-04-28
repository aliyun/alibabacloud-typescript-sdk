// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetConsumerApiKeyResponseBody extends $dara.Model {
  /**
   * @example
   * xxx
   */
  apiKey?: string;
  /**
   * @example
   * c-mqveroemc***
   */
  consumerId?: string;
  /**
   * @remarks
   * Id of the request
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

