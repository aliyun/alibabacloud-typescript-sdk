// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ThirdAppOidcSsoConfig } from "./ThirdAppOidcSsoConfig";
import { ThirdAppSecrets } from "./ThirdAppSecrets";


export class ThirdApp extends $dara.Model {
  appKey?: string;
  name?: string;
  oidcSsoConfig?: ThirdAppOidcSsoConfig;
  secrets?: ThirdAppSecrets[];
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      name: 'Name',
      oidcSsoConfig: 'OidcSsoConfig',
      secrets: 'Secrets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      name: 'string',
      oidcSsoConfig: ThirdAppOidcSsoConfig,
      secrets: { 'type': 'array', 'itemType': ThirdAppSecrets },
    };
  }

  validate() {
    if(this.oidcSsoConfig && typeof (this.oidcSsoConfig as any).validate === 'function') {
      (this.oidcSsoConfig as any).validate();
    }
    if(Array.isArray(this.secrets)) {
      $dara.Model.validateArray(this.secrets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

