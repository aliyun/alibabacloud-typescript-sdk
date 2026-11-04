// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFaceUserRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the user in the caller\\"s business system, such as an ID card number or student ID.
   * 
   * @example
   * 52242819650301xxxx
   */
  customUserId?: string;
  /**
   * @remarks
   * The image download URL. Currently, JPG and JPEG formats are supported.
   * 
   * @example
   * https://test.com/test.jpg
   */
  facePicUrl?: string;
  /**
   * @remarks
   * The isolation ID.<br>It is used for data isolation between different applications under a tenant. For example, if a user has business operations in both Zhejiang and Shaanxi, you can create two isolation IDs for the operations in Zhejiang and Xi\\"an respectively.
   * 
   * This parameter is required.
   * 
   * @example
   * TestIsolati****
   */
  isolationId?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * ZhangSan
   */
  name?: string;
  /**
   * @remarks
   * The user information.
   * 
   * @example
   * {"age":28, "sex":"male"}
   */
  params?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * tibce3fsgqel****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      customUserId: 'CustomUserId',
      facePicUrl: 'FacePicUrl',
      isolationId: 'IsolationId',
      name: 'Name',
      params: 'Params',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customUserId: 'string',
      facePicUrl: 'string',
      isolationId: 'string',
      name: 'string',
      params: 'string',
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

