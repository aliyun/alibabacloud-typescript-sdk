// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFaceUserPictureRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the user\\"s face image. Set this parameter to the **Data** value that you obtained and saved locally after you called the [AddFaceUserPicutre](https://help.aliyun.com/document_detail/312040.html) operation to add the face image for the user.
   * 
   * This parameter is required.
   * 
   * @example
   * 1bb580ef7****
   */
  facePicMd5?: string;
  /**
   * @remarks
   * The business isolation ID. It is used to isolate data between different business applications under the same Alibaba Cloud account. Set this parameter to the same value as the **IsolationId** that you specified when you called the [AddFaceUser](https://help.aliyun.com/document_detail/288338.html) operation to add the user.
   * 
   * This parameter is required.
   * 
   * @example
   * ZheJiangHZ
   */
  isolationId?: string;
  /**
   * @remarks
   * The user ID. Set this parameter to the **UserId** value that you obtained and saved locally after you called the [AddFaceUser](https://help.aliyun.com/document_detail/288338.html) operation to add the user.
   * 
   * This parameter is required.
   * 
   * @example
   * 3mtjaqebeq4d****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      facePicMd5: 'FacePicMd5',
      isolationId: 'IsolationId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      facePicMd5: 'string',
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

