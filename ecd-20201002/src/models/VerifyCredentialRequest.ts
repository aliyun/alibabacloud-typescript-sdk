// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyCredentialRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID. The system generates a unique ID for each client.
   * 
   * This parameter is required.
   * 
   * @example
   * d0b95762-0541-4b53-a0e4-7ed09f39****
   */
  clientId?: string;
  /**
   * @remarks
   * The credential.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456789cyG
   */
  credential?: string;
  /**
   * @remarks
   * The type of the logon credential that you want to clear.
   * 
   * Valid values:
   * 
   * *   MfaPasscode: the multi-factor verification code.
   * *   FingerPrint: the fingerprint.
   * *   Password: the password.
   * 
   * @example
   * Password
   */
  credentialType?: string;
  /**
   * @remarks
   * The ID of the key that you want to encrypt.
   * 
   * @example
   * drjfs****
   */
  encryptedKey?: string;
  /**
   * @remarks
   * The logon token.
   * 
   * This parameter is required.
   * 
   * @example
   * v1f5772a1c60dbea9fd8e1648567079018086448d234b5bc8e30bec0ba6e80c41c767c4dd0db51e9e5c4e0f111431a****
   */
  loginToken?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai+dir-227468****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The session ID.
   * 
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

