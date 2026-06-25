// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationImageRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * d700e680-aa4d-4ec1-afc2-6566b5ff****
   */
  appId?: string;
  /**
   * @remarks
   * The image URL.
   * 
   * This parameter is required.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/demo/demo:latest
   */
  imageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      imageUrl: 'ImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      imageUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

