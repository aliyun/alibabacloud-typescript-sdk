// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeSignatureQualificationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the authorization letter.
   * 
   * @example
   * 1000********1234
   */
  authorizationLetterId?: number;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the qualification, which is returned when you apply for it. You can also find this ID on the [Qualification Management](https://dysms.console.aliyun.com/domestic/text/qualification) page in the console for messages to the Chinese mainland.
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
   * The signature.
   * 
   * This parameter is required.
   * 
   * @example
   * 阿里云
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

