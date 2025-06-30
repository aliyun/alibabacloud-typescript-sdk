// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AssumeRoleWithSAMLResponseBodyAssumedRoleUser } from "./AssumeRoleWithSamlresponseBodyAssumedRoleUser";
import { AssumeRoleWithSAMLResponseBodyCredentials } from "./AssumeRoleWithSamlresponseBodyCredentials";
import { AssumeRoleWithSAMLResponseBodySAMLAssertionInfo } from "./AssumeRoleWithSamlresponseBodySamlassertionInfo";


export class AssumeRoleWithSAMLResponseBody extends $dara.Model {
  /**
   * @remarks
   * The temporary identity that you use to assume the RAM role.
   */
  assumedRoleUser?: AssumeRoleWithSAMLResponseBodyAssumedRoleUser;
  /**
   * @remarks
   * The STS credentials.
   */
  credentials?: AssumeRoleWithSAMLResponseBodyCredentials;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6894B13B-6D71-4EF5-88FA-F32781734A7F
   */
  requestId?: string;
  /**
   * @remarks
   * The information in the SAML assertion.
   */
  SAMLAssertionInfo?: AssumeRoleWithSAMLResponseBodySAMLAssertionInfo;
  sourceIdentity?: string;
  static names(): { [key: string]: string } {
    return {
      assumedRoleUser: 'AssumedRoleUser',
      credentials: 'Credentials',
      requestId: 'RequestId',
      SAMLAssertionInfo: 'SAMLAssertionInfo',
      sourceIdentity: 'SourceIdentity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumedRoleUser: AssumeRoleWithSAMLResponseBodyAssumedRoleUser,
      credentials: AssumeRoleWithSAMLResponseBodyCredentials,
      requestId: 'string',
      SAMLAssertionInfo: AssumeRoleWithSAMLResponseBodySAMLAssertionInfo,
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
    if(this.SAMLAssertionInfo && typeof (this.SAMLAssertionInfo as any).validate === 'function') {
      (this.SAMLAssertionInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

