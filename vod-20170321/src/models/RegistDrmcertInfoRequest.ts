// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegistDRMCertInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  ask?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  certName?: string;
  description?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  passPhrase?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  privateKey?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  resourceRealOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  servCert?: string;
  static names(): { [key: string]: string } {
    return {
      ask: 'Ask',
      certName: 'CertName',
      description: 'Description',
      ownerId: 'OwnerId',
      passPhrase: 'PassPhrase',
      privateKey: 'PrivateKey',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceRealOwnerId: 'ResourceRealOwnerId',
      servCert: 'ServCert',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ask: 'string',
      certName: 'string',
      description: 'string',
      ownerId: 'number',
      passPhrase: 'string',
      privateKey: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceRealOwnerId: 'number',
      servCert: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

