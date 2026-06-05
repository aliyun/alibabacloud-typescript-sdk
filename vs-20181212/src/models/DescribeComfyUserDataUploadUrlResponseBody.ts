// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComfyUserDataUploadUrlResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: number;
  /**
   * @example
   * 2026-08-28T16:00Z
   */
  expiredTime?: string;
  /**
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * oss-bucket.oss-cn-shanghai-cloudspe.aliyuncs.com/path/userid/test.png?x-oss-date=20260602T093618Z&x-oss-expires=29&x-oss-security-token=xxxxx%2F68FY2NI6nyNgueynMjneKjKXD6l5tS5h3S2%xxxxx%xxxx%xxxxxxx%2Fb%xxxx%sdffeeeaasdf%xxx%xx%xx%xxxx%2BeASOv2N8q%xxx%2B6XBxllroojFliSTfsqGI2YMHpoRwJmyfXK32BQPb2SvQ0AM23soq%2FspAI4f9vtFG0yv9fKWMw%xxxxxxxxx%xxxxxxxx%3D%3D&x-oss-signature-version=OSS4-HMAC&x-oss-credential=STS.xxxxx%2F20260dfa202%2Fcn-shanghai-cloud%2Foss%2Faliyun_v4_request&x-oss-signature=xxxxxxxxxxxxxx
   */
  uploadUrl?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      expiredTime: 'ExpiredTime',
      message: 'Message',
      requestId: 'RequestId',
      uploadUrl: 'UploadUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      expiredTime: 'string',
      message: 'string',
      requestId: 'string',
      uploadUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

