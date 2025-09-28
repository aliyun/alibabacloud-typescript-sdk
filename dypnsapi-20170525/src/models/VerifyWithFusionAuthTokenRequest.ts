// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyWithFusionAuthTokenRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The unified verification token that is returned by the client SDKs.
   * 
   * This parameter is required.
   * 
   * @example
   * LD108enNdlsl*******sFLKCks1==
   */
  verifyToken?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      verifyToken: 'VerifyToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      verifyToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

