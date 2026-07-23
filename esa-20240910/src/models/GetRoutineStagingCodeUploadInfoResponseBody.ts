// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRoutineStagingCodeUploadInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The code version number.
   * 
   * @example
   * 1710120201067203242
   */
  codeVersion?: string;
  /**
   * @remarks
   * The configuration information for uploading a JavaScript file to OSS. When uploading to OSS, you must include the OSSAccessKeyId and x-oss-security-token parameters.
   * 
   * @example
   * "OssPostConfig": {
   *             "Url": "http://oss_fake_bucket_url",
   *             "OSSAccessKeyId": "xxx",
   *             "XOssSecurityToken": "",
   *             "key": "sp_esa_rwa/xxx/hello/unstable/routine/index.js",
   *             "callback": "xxx=",
   *             "x:codeDescription": "xxx=",
   *             "policy": "xxx=",
   *             "Signature": "xxx="
   *         }
   */
  ossPostConfig?: { [key: string]: any };
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EDBD3EB3-97DA-5465-AEF5-8DCA5DC5E395
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      codeVersion: 'CodeVersion',
      ossPostConfig: 'OssPostConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeVersion: 'string',
      ossPostConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.ossPostConfig) {
      $dara.Model.validateMap(this.ossPostConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

