// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddFaceUserPictureRequest extends $dara.Model {
  /**
   * @remarks
   * The download URL of the user\\"s face image. Only JPEG and JPG images are supported, and the image URL cannot contain Chinese characters.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/test.jpeg
   */
  facePicUrl?: string;
  /**
   * @remarks
   * The business isolation ID, which is used to isolate data between different business applications under the same Alibaba Cloud account. Keep this value consistent with the **IsolationId** set when calling the [AddFaceUser](https://help.aliyun.com/document_detail/288338.html) API operation to add a user.
   * 
   * This parameter is required.
   * 
   * @example
   * ZheJiangHZ
   */
  isolationId?: string;
  /**
   * @remarks
   * The user ID. Pass in the **UserId** value that was obtained and saved locally after calling the [AddFaceUser](https://help.aliyun.com/document_detail/288338.html) API operation to add a user.
   * 
   * This parameter is required.
   * 
   * @example
   * 3mtjaqebeq4d****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      facePicUrl: 'FacePicUrl',
      isolationId: 'IsolationId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      facePicUrl: 'string',
      isolationId: 'string',
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

