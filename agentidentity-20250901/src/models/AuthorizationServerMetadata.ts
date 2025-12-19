// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AuthorizationRequest } from "./AuthorizationRequest";
import { PKCE } from "./Pkce";
import { TokenReqeust } from "./TokenReqeust";


export class AuthorizationServerMetadata extends $dara.Model {
  authorizationRequest?: AuthorizationRequest;
  issuer?: string;
  PKCE?: PKCE;
  tokenRequest?: TokenReqeust;
  static names(): { [key: string]: string } {
    return {
      authorizationRequest: 'AuthorizationRequest',
      issuer: 'Issuer',
      PKCE: 'PKCE',
      tokenRequest: 'TokenRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationRequest: AuthorizationRequest,
      issuer: 'string',
      PKCE: PKCE,
      tokenRequest: TokenReqeust,
    };
  }

  validate() {
    if(this.authorizationRequest && typeof (this.authorizationRequest as any).validate === 'function') {
      (this.authorizationRequest as any).validate();
    }
    if(this.PKCE && typeof (this.PKCE as any).validate === 'function') {
      (this.PKCE as any).validate();
    }
    if(this.tokenRequest && typeof (this.tokenRequest as any).validate === 'function') {
      (this.tokenRequest as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

