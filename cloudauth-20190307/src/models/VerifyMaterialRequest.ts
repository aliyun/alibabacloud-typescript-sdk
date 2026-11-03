// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyMaterialRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID that identifies an authentication task. The ID cannot exceed 64 characters. For a single authentication task, the system supports unlimited submissions until the authentication is passed and the task is completed.
   * 
   * > You must use a different BizId when initiating different authentication tasks.
   * 
   * This parameter is required.
   * 
   * @example
   * 39ecf51e-2f81-4dc5-90ee-ff86125b****
   */
  bizId?: string;
  /**
   * @remarks
   * The business scenario identifier for using the ID Verification service. Create it in the console first. For more information, see [Business settings](https://help.aliyun.com/document_detail/127885.html).
   * 
   * This parameter is required.
   * 
   * @example
   * RPMinTest
   */
  bizType?: string;
  /**
   * @remarks
   * The HTTP or HTTPS URL of the front-facing portrait photo.
   * 
   * This parameter is required.
   * 
   * @example
   * http://image-demo.img-cn-hangzhou.aliyuncs.com/example.jpg
   */
  faceImageUrl?: string;
  /**
   * @remarks
   * The HTTP or HTTPS URL of the image for the back side of the ID card.
   * 
   * @example
   * http://image-demo.img-cn-hangzhou.aliyuncs.com/example3.jpg
   */
  idCardBackImageUrl?: string;
  /**
   * @remarks
   * The HTTP or HTTPS URL of the image for the front side of the ID card.
   * 
   * @example
   * http://image-demo.img-cn-hangzhou.aliyuncs.com/example2.jpg
   */
  idCardFrontImageUrl?: string;
  /**
   * @remarks
   * The ID card number.
   * 
   * This parameter is required.
   * 
   * @example
   * 02343218901123****
   */
  idCardNumber?: string;
  /**
   * @remarks
   * The name.
   * 
   * This parameter is required.
   * 
   * @example
   * Zhang San
   */
  name?: string;
  /**
   * @remarks
   * The ID of the end user, such as the account ID of the end user.
   * 
   * @example
   * 54sdj
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
      faceImageUrl: 'FaceImageUrl',
      idCardBackImageUrl: 'IdCardBackImageUrl',
      idCardFrontImageUrl: 'IdCardFrontImageUrl',
      idCardNumber: 'IdCardNumber',
      name: 'Name',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      faceImageUrl: 'string',
      idCardBackImageUrl: 'string',
      idCardFrontImageUrl: 'string',
      idCardNumber: 'string',
      name: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

