// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetFingerPrintTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The client ID. The system generates a unique ID for each client.
   * 
   * This parameter is required.
   * 
   * @example
   * 347431a9-90f6-448e-82c4-42bc84a9****
   */
  clientId?: string;
  /**
   * @remarks
   * The client token to ensure the idempotency of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the node.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * The encrypted fingerprint template.
   * 
   * @example
   * AAAAAAAAAAAAAA
   */
  encryptedFingerPrintTemplate?: string;
  /**
   * @remarks
   * The encryption key.
   * 
   * @example
   * drjfspchj
   */
  encryptedKey?: string;
  /**
   * @remarks
   * The fingerprint template.
   * 
   * @example
   * goG3gG8AAABhujtscn
   */
  fingerPrintTemplate?: string;
  /**
   * @remarks
   * The logon credentials.
   * 
   * This parameter is required.
   * 
   * @example
   * v11c73e7af0cb43ff39301651142485099ffb447085d76c4147519dbaa21c3bd90d53045e327c1f525ee6331c52556****
   */
  loginToken?: string;
  /**
   * @remarks
   * The password that you want to encrypt.
   * 
   * This parameter is required.
   * 
   * @example
   * As53328794
   */
  password?: string;
  /**
   * @remarks
   * The region ID
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 8b42538a-246e-45a1-95ea-e5c65b09****
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      clientToken: 'ClientToken',
      description: 'Description',
      encryptedFingerPrintTemplate: 'EncryptedFingerPrintTemplate',
      encryptedKey: 'EncryptedKey',
      fingerPrintTemplate: 'FingerPrintTemplate',
      loginToken: 'LoginToken',
      password: 'Password',
      regionId: 'RegionId',
      sessionId: 'SessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      clientToken: 'string',
      description: 'string',
      encryptedFingerPrintTemplate: 'string',
      encryptedKey: 'string',
      fingerPrintTemplate: 'string',
      loginToken: 'string',
      password: 'string',
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

