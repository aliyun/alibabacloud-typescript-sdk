// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitHotlineTransferRegisterRequestTransferPhoneNumberInfos extends $dara.Model {
  /**
   * @remarks
   * The ID card number of the number owner.
   * 
   * This parameter is required.
   * 
   * @example
   * 500***
   */
  identityCard?: string;
  /**
   * @remarks
   * The China 400 number that you want to submit for registration.
   * 
   * This parameter is required.
   * 
   * @example
   * 1580000****
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The real name or company name of the number owner.
   * 
   * This parameter is required.
   * 
   * @example
   * A***
   */
  phoneNumberOwnerName?: string;
  static names(): { [key: string]: string } {
    return {
      identityCard: 'IdentityCard',
      phoneNumber: 'PhoneNumber',
      phoneNumberOwnerName: 'PhoneNumberOwnerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityCard: 'string',
      phoneNumber: 'string',
      phoneNumberOwnerName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitHotlineTransferRegisterRequest extends $dara.Model {
  /**
   * @remarks
   * The authenticity of the commitment. Valid values:
   * 
   * *   **true**: The commitment is authentic.
   * *   **false**: The commitment is not authentic.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  agreement?: string;
  /**
   * @remarks
   * The China 400 number.
   * 
   * This parameter is required.
   * 
   * @example
   * 400****
   */
  hotlineNumber?: string;
  /**
   * @remarks
   * The ID card number of the handler.
   * 
   * This parameter is required.
   * 
   * @example
   * 5****************9
   */
  operatorIdentityCard?: string;
  /**
   * @remarks
   * The email address of the handler.
   * 
   * This parameter is required.
   * 
   * @example
   * username@example.com
   */
  operatorMail?: string;
  /**
   * @remarks
   * The verification code that is received by the mailbox of the handler.
   * 
   * @example
   * 1234
   */
  operatorMailVerifyCode?: string;
  /**
   * @remarks
   * The mobile phone number of the handler.
   * 
   * This parameter is required.
   * 
   * @example
   * 158****7230
   */
  operatorMobile?: string;
  /**
   * @remarks
   * The verification code that is received by the mobile phone of the handler.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  operatorMobileVerifyCode?: string;
  /**
   * @remarks
   * The name of the handler.
   * 
   * This parameter is required.
   * 
   * @example
   * A***
   */
  operatorName?: string;
  ownerId?: number;
  /**
   * @remarks
   * The qualification ID. You can call the [GetHotlineQualificationByOrder](https://help.aliyun.com/document_detail/393548.html) operation to obtain the qualification ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000004933****
   */
  qualificationId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The registration information about the China 400 number.
   * 
   * This parameter is required.
   */
  transferPhoneNumberInfos?: SubmitHotlineTransferRegisterRequestTransferPhoneNumberInfos[];
  static names(): { [key: string]: string } {
    return {
      agreement: 'Agreement',
      hotlineNumber: 'HotlineNumber',
      operatorIdentityCard: 'OperatorIdentityCard',
      operatorMail: 'OperatorMail',
      operatorMailVerifyCode: 'OperatorMailVerifyCode',
      operatorMobile: 'OperatorMobile',
      operatorMobileVerifyCode: 'OperatorMobileVerifyCode',
      operatorName: 'OperatorName',
      ownerId: 'OwnerId',
      qualificationId: 'QualificationId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transferPhoneNumberInfos: 'TransferPhoneNumberInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agreement: 'string',
      hotlineNumber: 'string',
      operatorIdentityCard: 'string',
      operatorMail: 'string',
      operatorMailVerifyCode: 'string',
      operatorMobile: 'string',
      operatorMobileVerifyCode: 'string',
      operatorName: 'string',
      ownerId: 'number',
      qualificationId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transferPhoneNumberInfos: { 'type': 'array', 'itemType': SubmitHotlineTransferRegisterRequestTransferPhoneNumberInfos },
    };
  }

  validate() {
    if(Array.isArray(this.transferPhoneNumberInfos)) {
      $dara.Model.validateArray(this.transferPhoneNumberInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

