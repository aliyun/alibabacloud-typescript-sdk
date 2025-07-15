// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAudioFileUploadParametersResponseBodyData extends $dara.Model {
  /**
   * @example
   * ****
   */
  accessKeyId?: string;
  /**
   * @example
   * 1647313420
   */
  expireTime?: number;
  /**
   * @example
   * ccc-test/test-file.wav
   */
  filePath?: string;
  /**
   * @example
   * https://ccc-v2-online.oss-cn-shanghai.aliyuncs.com
   */
  host?: string;
  /**
   * @example
   * eyJleHBpcmF0aW9uIjoiMjAyMi0wNi0yOVQwMDoyOTowMC42NTRaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMTA0ODU3NjBdLFsic3RhcnRzLXdpdGgiLCIka2V5IiwiYXVkaW8vMTU3NzI0NzExNTQ5MDQwMS9seS1vbmxpbmUvMjAyMjA2MjkwNzI5MDAvIl1d****
   */
  policy?: string;
  /**
   * @example
   * HIyClras8IcVlbTV7RIJWJbU****
   */
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      expireTime: 'ExpireTime',
      filePath: 'FilePath',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      expireTime: 'number',
      filePath: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAudioFileUploadParametersResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetAudioFileUploadParametersResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @example
   * C81FD1A5-4B99-470A-A527-D80150228784
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetAudioFileUploadParametersResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

