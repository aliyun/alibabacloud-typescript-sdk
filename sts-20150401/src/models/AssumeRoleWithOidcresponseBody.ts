// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AssumeRoleWithOIDCResponseBodyAssumedRoleUser } from "./AssumeRoleWithOidcresponseBodyAssumedRoleUser";
import { AssumeRoleWithOIDCResponseBodyCredentials } from "./AssumeRoleWithOidcresponseBodyCredentials";
import { AssumeRoleWithOIDCResponseBodyOIDCTokenInfo } from "./AssumeRoleWithOidcresponseBodyOidctokenInfo";


export class AssumeRoleWithOIDCResponseBody extends $dara.Model {
  /**
   * @remarks
   * The temporary identity that you use to assume the RAM role.
   */
  assumedRoleUser?: AssumeRoleWithOIDCResponseBodyAssumedRoleUser;
  /**
   * @remarks
   * The access credentials.
   */
  credentials?: AssumeRoleWithOIDCResponseBodyCredentials;
  /**
   * @remarks
   * The information about the OIDC token.
   */
  OIDCTokenInfo?: AssumeRoleWithOIDCResponseBodyOIDCTokenInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3D57EAD2-8723-1F26-B69C-F8707D8B565D
   */
  requestId?: string;
  sourceIdentity?: string;
  static names(): { [key: string]: string } {
    return {
      assumedRoleUser: 'AssumedRoleUser',
      credentials: 'Credentials',
      OIDCTokenInfo: 'OIDCTokenInfo',
      requestId: 'RequestId',
      sourceIdentity: 'SourceIdentity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumedRoleUser: AssumeRoleWithOIDCResponseBodyAssumedRoleUser,
      credentials: AssumeRoleWithOIDCResponseBodyCredentials,
      OIDCTokenInfo: AssumeRoleWithOIDCResponseBodyOIDCTokenInfo,
      requestId: 'string',
      sourceIdentity: 'string',
    };
  }

  validate() {
    if(this.assumedRoleUser && typeof (this.assumedRoleUser as any).validate === 'function') {
      (this.assumedRoleUser as any).validate();
    }
    if(this.credentials && typeof (this.credentials as any).validate === 'function') {
      (this.credentials as any).validate();
    }
    if(this.OIDCTokenInfo && typeof (this.OIDCTokenInfo as any).validate === 'function') {
      (this.OIDCTokenInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

