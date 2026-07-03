// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HiMarketApiKeyConfigCredentials extends $dara.Model {
  /**
   * @remarks
   * The API key value.
   * 
   * @example
   * my-api-key-123
   */
  apiKey?: string;
  /**
   * @remarks
   * The generation mode.
   * 
   * @example
   * Custom
   */
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      mode: 'mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      mode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HiMarketApiKeyConfig extends $dara.Model {
  /**
   * @remarks
   * The list of credentials.
   */
  credentials?: HiMarketApiKeyConfigCredentials[];
  /**
   * @remarks
   * The name of the location from which the API key is extracted.
   * 
   * @example
   * Apikey
   */
  key?: string;
  /**
   * @remarks
   * The source type of the API key.
   * 
   * @example
   * Header
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      credentials: 'credentials',
      key: 'key',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentials: { 'type': 'array', 'itemType': HiMarketApiKeyConfigCredentials },
      key: 'string',
      source: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.credentials)) {
      $dara.Model.validateArray(this.credentials);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

