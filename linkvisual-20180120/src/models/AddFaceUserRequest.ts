// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddFaceUserRequest extends $dara.Model {
  /**
   * @remarks
   * The user identification ID. It supports any uppercase letter and digits. Recommended Settings: the user\\"s ID card number, student ID, or similar identifier.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567890
   */
  customUserId?: string;
  /**
   * @remarks
   * The URL for downloading the user\\"s face image. Only JPEG and JPG image formats are supported, and the image URL cannot contain Chinese characters.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/test.jpeg
   */
  facePicUrl?: string;
  /**
   * @remarks
   * The business isolation ID. It is used for data isolation between different business applications under the same Alibaba Cloud account. It supports uppercase and lowercase English letters and digits.
   * 
   * For example, if you have face recognition businesses in Region A and Region B, you can set different business isolation IDs to distinguish the face recognition businesses in Region A and Region B.
   * 
   * >Notice: 
   * Save the business isolation ID properly for use in subsequent calls to other API operations in this business isolation zone.
   * 
   * This parameter is required.
   * 
   * @example
   * ZheJiangHZ
   */
  isolationId?: string;
  /**
   * @remarks
   * The username. It supports Chinese characters, uppercase and lowercase English letters, digits, underscores (_), and hyphens (-). The length cannot exceed 64 characters.
   * 
   * @example
   * Tony
   */
  name?: string;
  /**
   * @remarks
   * The custom user parameters.
   * 
   * @example
   * {"key1":"value1", "key2":"value2"}
   */
  params?: string;
  static names(): { [key: string]: string } {
    return {
      customUserId: 'CustomUserId',
      facePicUrl: 'FacePicUrl',
      isolationId: 'IsolationId',
      name: 'Name',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customUserId: 'string',
      facePicUrl: 'string',
      isolationId: 'string',
      name: 'string',
      params: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

