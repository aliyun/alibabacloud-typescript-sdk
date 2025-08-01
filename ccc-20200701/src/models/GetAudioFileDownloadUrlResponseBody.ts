// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAudioFileDownloadUrlResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * https://****.oss-cn-shanghai.aliyuncs.com/ccc-test/****.wav?Expires=1656472158&OSSAccessKeyId=****&Signature=****
   */
  data?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @example
   * 943D8EF3-3321-471F-A104-51C96FCA94D6
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
      data: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

