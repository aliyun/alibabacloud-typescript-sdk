// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CustomOAuth2ProviderConfig } from "./CustomOauth2providerConfig";
import { IncludedOAuth2ProviderConfig } from "./IncludedOauth2providerConfig";


export class OAuth2ProviderConfig extends $dara.Model {
  customOAuth2ProviderConfig?: CustomOAuth2ProviderConfig;
  includedOAuth2ProviderConfig?: IncludedOAuth2ProviderConfig;
  static names(): { [key: string]: string } {
    return {
      customOAuth2ProviderConfig: 'CustomOAuth2ProviderConfig',
      includedOAuth2ProviderConfig: 'IncludedOAuth2ProviderConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customOAuth2ProviderConfig: CustomOAuth2ProviderConfig,
      includedOAuth2ProviderConfig: IncludedOAuth2ProviderConfig,
    };
  }

  validate() {
    if(this.customOAuth2ProviderConfig && typeof (this.customOAuth2ProviderConfig as any).validate === 'function') {
      (this.customOAuth2ProviderConfig as any).validate();
    }
    if(this.includedOAuth2ProviderConfig && typeof (this.includedOAuth2ProviderConfig as any).validate === 'function') {
      (this.includedOAuth2ProviderConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

