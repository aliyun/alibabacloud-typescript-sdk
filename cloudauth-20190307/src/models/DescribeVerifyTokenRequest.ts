// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVerifyTokenRequest extends $dara.Model {
  /**
   * @remarks
   * Verification ID. A unique ID that identifies a verification task, not exceeding 64 characters. For a single verification task, the system supports unlimited submissions until the final verification is passed and the task is completed.
   * 
   * > Different BizIds are required for different verification tasks.
   * 
   * This parameter is required.
   * 
   * @example
   * 39ecf51e-2f81-4dc5-90ee-ff86125be683
   */
  bizId?: string;
  /**
   * @remarks
   * Identifier for the business scenario using the real person authentication service. Please refer to [Business Settings](https://help.aliyun.com/document_detail/127885.html) and complete the creation in the console first.
   * 
   * This parameter is required.
   * 
   * @example
   * RPBasicTest
   */
  bizType?: string;
  /**
   * @remarks
   * Callback seed.
   * 
   * @example
   * -
   */
  callbackSeed?: string;
  /**
   * @remarks
   * Callback URL.
   * 
   * @example
   * -
   */
  callbackUrl?: string;
  /**
   * @remarks
   * HTTP or HTTPS link to the retained portrait photo.
   * 
   * @example
   * http%3A%2F%2Fjiangsu.china.com.cn%2Fuploadfile%2F2015%2F0114%2F1421221304095989.jpg
   */
  faceRetainedImageUrl?: string;
  /**
   * @remarks
   * Redirect URL for failed verification.
   * 
   * @example
   * -
   */
  failedRedirectUrl?: string;
  /**
   * @remarks
   * HTTP or HTTPS link to the national emblem side of the ID card image.
   * 
   * @example
   * http%3A%2F%2Fjiangsu.china.com.cn%2Fuploadfile%2F2015%2F0114%2F1421221304095989.jpg
   */
  idCardBackImageUrl?: string;
  /**
   * @remarks
   * HTTP or HTTPS link to the portrait side of the ID card image.
   * 
   * @example
   * http%3A%2F%2Fjiangsu.china.com.cn%2Fuploadfile%2F2015%2F0114%2F1421221304095989.jpg
   */
  idCardFrontImageUrl?: string;
  /**
   * @remarks
   * ID card number.
   * 
   * @example
   * 330100xxxxxxxxxxxx
   */
  idCardNumber?: string;
  /**
   * @remarks
   * Name.
   * 
   * @example
   * 张三
   */
  name?: string;
  /**
   * @remarks
   * Redirect URL upon successful verification.
   * 
   * @example
   * -
   */
  passedRedirectUrl?: string;
  /**
   * @remarks
   * ID of the end user, such as the account ID of the end user.
   * 
   * @example
   * user111
   */
  userId?: string;
  /**
   * @remarks
   * User IP.
   * 
   * @example
   * 192.168.***.***
   */
  userIp?: string;
  /**
   * @remarks
   * User phone number.
   * 
   * @example
   * 187********
   */
  userPhoneNumber?: string;
  /**
   * @remarks
   * User registration time. Expressed in timestamp format, unit: milliseconds.
   * 
   * @example
   * 1577808000000
   */
  userRegistTime?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
      callbackSeed: 'CallbackSeed',
      callbackUrl: 'CallbackUrl',
      faceRetainedImageUrl: 'FaceRetainedImageUrl',
      failedRedirectUrl: 'FailedRedirectUrl',
      idCardBackImageUrl: 'IdCardBackImageUrl',
      idCardFrontImageUrl: 'IdCardFrontImageUrl',
      idCardNumber: 'IdCardNumber',
      name: 'Name',
      passedRedirectUrl: 'PassedRedirectUrl',
      userId: 'UserId',
      userIp: 'UserIp',
      userPhoneNumber: 'UserPhoneNumber',
      userRegistTime: 'UserRegistTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      callbackSeed: 'string',
      callbackUrl: 'string',
      faceRetainedImageUrl: 'string',
      failedRedirectUrl: 'string',
      idCardBackImageUrl: 'string',
      idCardFrontImageUrl: 'string',
      idCardNumber: 'string',
      name: 'string',
      passedRedirectUrl: 'string',
      userId: 'string',
      userIp: 'string',
      userPhoneNumber: 'string',
      userRegistTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

