// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocumentParseOnlineApiRequest extends $dara.Model {
  /**
   * @example
   * https://maas-multimodal.oss-cn-hangzhou.aliyuncs.com/yuhui%2Ftmp%2Fsample500%2Ftmp%2F01e67f7c18d739a47f09d6c6b4a3d478_35.jpg?OSSAccessKeyId=LTAI5tGFE7dDsowkX8eWZMEe&Expires=1779229955&Signature=8sjYEYUHOsqCV11hC2MN%2Bs%2BguSI%3D
   */
  imageUrl?: string;
  /**
   * @example
   * 0
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

