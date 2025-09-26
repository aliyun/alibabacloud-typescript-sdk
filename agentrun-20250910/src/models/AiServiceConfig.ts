// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiServiceConfig extends $dara.Model {
  address?: string;
  apiKeys?: string[];
  enableHealthCheck?: boolean;
  protocols?: string[];
  provider?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      apiKeys: 'apiKeys',
      enableHealthCheck: 'enableHealthCheck',
      protocols: 'protocols',
      provider: 'provider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      apiKeys: { 'type': 'array', 'itemType': 'string' },
      enableHealthCheck: 'boolean',
      protocols: { 'type': 'array', 'itemType': 'string' },
      provider: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.apiKeys)) {
      $dara.Model.validateArray(this.apiKeys);
    }
    if(Array.isArray(this.protocols)) {
      $dara.Model.validateArray(this.protocols);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

