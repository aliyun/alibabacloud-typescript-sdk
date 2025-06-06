// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeOssUploadTokenResponseBodyOssUploadToken } from "./DescribeOssUploadTokenResponseBodyOssUploadToken";


export class DescribeOssUploadTokenResponseBody extends $dara.Model {
  ossUploadToken?: DescribeOssUploadTokenResponseBodyOssUploadToken;
  /**
   * @example
   * 2FA2C773-47DB-4156-B1EE-5B047321A939
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ossUploadToken: 'OssUploadToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossUploadToken: DescribeOssUploadTokenResponseBodyOssUploadToken,
      requestId: 'string',
    };
  }

  validate() {
    if(this.ossUploadToken && typeof (this.ossUploadToken as any).validate === 'function') {
      (this.ossUploadToken as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

