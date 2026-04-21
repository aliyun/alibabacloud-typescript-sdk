// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HiMarketApiKeyConfigCredentials extends $dara.Model {
  apiKey?: string;
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
  credentials?: HiMarketApiKeyConfigCredentials[];
  key?: string;
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

