// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HiMarketApiKeyConfigCredentials extends $dara.Model {
  /**
   * @remarks
   * The value of the API key.
   */
  apiKey?: string;
  /**
   * @remarks
   * The operational mode for the key, such as `test` or `production`.
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
   * An array of objects, each containing a valid API key and its associated mode.
   */
  credentials?: HiMarketApiKeyConfigCredentials[];
  /**
   * @remarks
   * The name of the parameter that holds the API key. For example, if `source` is `HEADER`, this is the request header name, such as `X-API-Key`.
   */
  key?: string;
  /**
   * @remarks
   * The location of the API key in the request. Valid values are `HEADER` and `QUERY`.
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

