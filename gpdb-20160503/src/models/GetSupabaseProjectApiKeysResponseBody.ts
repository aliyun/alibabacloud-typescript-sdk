// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSupabaseProjectApiKeysResponseBodyApiKeys extends $dara.Model {
  /**
   * @remarks
   * The queried API key.
   * 
   * @example
   * Tmz2Z59caMDeq/Xi9vuc****
   */
  apiKey?: string;
  /**
   * @remarks
   * The name of the API key, including the Anon key and the service role key.
   * 
   * @example
   * anon key
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSupabaseProjectApiKeysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried API keys.
   */
  apiKeys?: GetSupabaseProjectApiKeysResponseBodyApiKeys[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeys: 'ApiKeys',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeys: { 'type': 'array', 'itemType': GetSupabaseProjectApiKeysResponseBodyApiKeys },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.apiKeys)) {
      $dara.Model.validateArray(this.apiKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

