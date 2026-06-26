// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateIdentityProviderShrinkRequest extends $dara.Model {
  allowedAudienceShrink?: string;
  description?: string;
  discoveryURL?: string;
  identityProviderName?: string;
  static names(): { [key: string]: string } {
    return {
      allowedAudienceShrink: 'AllowedAudience',
      description: 'Description',
      discoveryURL: 'DiscoveryURL',
      identityProviderName: 'IdentityProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedAudienceShrink: 'string',
      description: 'string',
      discoveryURL: 'string',
      identityProviderName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

