// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeSignatureQualificationRequest extends $dara.Model {
  /**
   * @remarks
   * 授权委托书id
   * 
   * @example
   * 1000********1234
   */
  authorizationLetterId?: number;
  ownerId?: number;
  /**
   * @remarks
   * 资质id
   * 
   * This parameter is required.
   * 
   * @example
   * 1*****2
   */
  qualificationId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 签名
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  signatureName?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationLetterId: 'AuthorizationLetterId',
      ownerId: 'OwnerId',
      qualificationId: 'QualificationId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signatureName: 'SignatureName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationLetterId: 'number',
      ownerId: 'number',
      qualificationId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signatureName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

