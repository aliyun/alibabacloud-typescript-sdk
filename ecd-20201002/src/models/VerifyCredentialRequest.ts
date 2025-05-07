// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyCredentialRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * d0b95762-0541-4b53-a0e4-7ed09f39****
   */
  clientId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456789cyG
   */
  credential?: string;
  /**
   * @example
   * Password
   */
  credentialType?: string;
  /**
   * @example
   * drjfs****
   */
  encryptedKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v1f5772a1c60dbea9fd8e1648567079018086448d234b5bc8e30bec0ba6e80c41c767c4dd0db51e9e5c4e0f111431a****
   */
  loginToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shanghai+dir-227468****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * eb17af2e-1dd6-4cc4-a3ee-3a14d0d7****
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      credential: 'Credential',
      credentialType: 'CredentialType',
      encryptedKey: 'EncryptedKey',
      loginToken: 'LoginToken',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      credential: 'string',
      credentialType: 'string',
      encryptedKey: 'string',
      loginToken: 'string',
      officeSiteId: 'string',
      regionId: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

