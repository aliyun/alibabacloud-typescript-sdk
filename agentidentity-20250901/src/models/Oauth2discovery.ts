// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AuthorizationServerMetadata } from "./AuthorizationServerMetadata";


export class OAuth2Discovery extends $dara.Model {
  authorizationServerMetadata?: AuthorizationServerMetadata;
  discoveryURL?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationServerMetadata: 'AuthorizationServerMetadata',
      discoveryURL: 'DiscoveryURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationServerMetadata: AuthorizationServerMetadata,
      discoveryURL: 'string',
    };
  }

  validate() {
    if(this.authorizationServerMetadata && typeof (this.authorizationServerMetadata as any).validate === 'function') {
      (this.authorizationServerMetadata as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

