// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUploadOssUrlResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2023-07-26T06:33:11.175
   */
  expectedExpirationTime?: string;
  /**
   * @example
   * open_api_create_project/oacp_4xd****vk
   */
  ossKey?: string;
  /**
   * @example
   * https://cn-hangzhou-pre-omsstore.oss-cn-hangzhou.aliyuncs.com/open_api_create_project/oacp_4x****pvk?Expires=169031&OSSAccessKeyId=LTAI5tMN52D***TBf&Signature=XdDFPz%2BXKC***%2B
   */
  ossUrl?: string;
  static names(): { [key: string]: string } {
    return {
      expectedExpirationTime: 'ExpectedExpirationTime',
      ossKey: 'OssKey',
      ossUrl: 'OssUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expectedExpirationTime: 'string',
      ossKey: 'string',
      ossUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

