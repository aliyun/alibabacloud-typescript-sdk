// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSupabaseProjectApiKeysResponseBodyApiKeys } from "./GetSupabaseProjectApiKeysResponseBodyApiKeys";


export class GetSupabaseProjectApiKeysResponseBody extends $dara.Model {
  apiKeys?: GetSupabaseProjectApiKeysResponseBodyApiKeys[];
  /**
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

