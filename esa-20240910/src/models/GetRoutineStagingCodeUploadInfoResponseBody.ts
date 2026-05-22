// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRoutineStagingCodeUploadInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The code version.
   * 
   * @example
   * 1710120201067203242
   */
  codeVersion?: string;
  /**
   * @remarks
   * The configuration information that can be used to upload to OSS.
   * 
   * @example
   * {
   *             "Url": "http://oss_fake_bucket_url",
   *             "OSSAccessKeyId": "xxx",
   *             "key": "site_er_js/hello.1418586423220543.unstable.js",
   *             "callback": "xxx==",
   *             "x:codeDescription": "xxx=",
   *             "policy": "xxx",
   *             "Signature": "xxx="
   * }
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

