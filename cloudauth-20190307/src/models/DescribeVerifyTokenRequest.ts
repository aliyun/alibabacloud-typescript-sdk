// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVerifyTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The authentication ID. A unique ID that identifies an authentication task. The value can be up to 64 characters in length. For a single authentication task, the system supports unlimited submissions until the authentication is passed and the task is completed.
   * 
   * > Use a different BizId for each different authentication task.
   * 
   * This parameter is required.
   * 
   * @example
   * 39ecf51e-2f81-4dc5-90ee-ff86125be683
   */
  bizId?: string;
  /**
   * @remarks
   * The business scenario identifier for using the ID Verification service. Create one in the console first. For more information, see [Business settings](https://help.aliyun.com/document_detail/127885.html).
   * 
   * This parameter is required.
   * 
   * @example
   * RPBasicTest
   */
  bizType?: string;
  /**
   * @remarks
   * The callback seed.
   * 
   * @example
   * -
   */
  callbackSeed?: string;
  /**
   * @remarks
   * The callback URL.
   * 
   * @example
   * -
   */
  callbackUrl?: string;
  /**
   * @remarks
   * The HTTP or HTTPS URL of the retained face photo.
   * 
   * @example
   * http%3A%2F%2Fjiangsu.china.com.cn%2Fuploadfile%2F2015%2F0114%2F1421221304095989.jpg
   */
  faceRetainedImageUrl?: string;
  /**
   * @remarks
   * The redirect URL upon verification failure.
   * 
   * @example
   * -
   */
  failedRedirectUrl?: string;
  /**
   * @remarks
   * The HTTP or HTTPS URL of the national emblem side of the ID card image.
   * 
   * @example
   * http%3A%2F%2Fjiangsu.china.com.cn%2Fuploadfile%2F2015%2F0114%2F1421221304095989.jpg
   */
  idCardBackImageUrl?: string;
  /**
   * @remarks
   * The HTTP or HTTPS URL of the portrait side of the ID card image.
   * 
   * @example
   * http%3A%2F%2Fjiangsu.china.com.cn%2Fuploadfile%2F2015%2F0114%2F1421221304095989.jpg
   */
  idCardFrontImageUrl?: string;
  /**
   * @remarks
   * The ID card number.
   * 
   * @example
   * 330100xxxxxxxxxxxx
   */
  idCardNumber?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * 张三
   */
  name?: string;
  /**
   * @remarks
   * The redirect URL upon successful verification.
   * 
   * @example
   * -
   */
  passedRedirectUrl?: string;
  /**
   * @remarks
   * The ID of the end user, such as the account ID of the end user.
   * 
   * @example
   * user111
   */
  userId?: string;
  /**
   * @remarks
   * The IP address of the user.
   * 
   * @example
   * 192.168.***.***
   */
  userIp?: string;
  /**
   * @remarks
   * The phone number of the user.
   * 
   * @example
   * 187********
   */
  userPhoneNumber?: string;
  /**
   * @remarks
   * The registration time of the user. Specify the value in UNIX timestamp format. Unit: milliseconds.
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

