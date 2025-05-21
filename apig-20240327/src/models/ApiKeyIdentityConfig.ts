// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApiKeyIdentityConfigApikeySource } from "./ApiKeyIdentityConfigApikeySource";
import { ApiKeyIdentityConfigCredentials } from "./ApiKeyIdentityConfigCredentials";


export class ApiKeyIdentityConfig extends $dara.Model {
  apikeySource?: ApiKeyIdentityConfigApikeySource;
  credentials?: ApiKeyIdentityConfigCredentials[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      apikeySource: 'apikeySource',
      credentials: 'credentials',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apikeySource: ApiKeyIdentityConfigApikeySource,
      credentials: { 'type': 'array', 'itemType': ApiKeyIdentityConfigCredentials },
      type: 'string',
    };
  }

  validate() {
    if(this.apikeySource && typeof (this.apikeySource as any).validate === 'function') {
      (this.apikeySource as any).validate();
    }
    if(Array.isArray(this.credentials)) {
      $dara.Model.validateArray(this.credentials);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

