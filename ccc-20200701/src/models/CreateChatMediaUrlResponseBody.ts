// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChatMediaUrlResponseBodyData extends $dara.Model {
  /**
   * @example
   * $iAHNCNQCo21wMwMGBAAFAAbaACOEAaQhIH6TAqogDGyb-qD2Hbj0A88AAAGRLKYVnwTOACwwYwcACM8AAAGRLRPynQ
   */
  mediaId?: string;
  /**
   * @example
   * https://ccc-v2-online.oss-cn-shanghai.aliyuncs.com/ccc-test/namelist.csv?Expires=1642067227&OSSAccessKeyId=****&Signature=****
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateChatMediaUrlResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CreateChatMediaUrlResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  params?: string[];
  /**
   * @example
   * 03C67DAD-EB26-41D8-949D-9B0C470FB716
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateChatMediaUrlResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

