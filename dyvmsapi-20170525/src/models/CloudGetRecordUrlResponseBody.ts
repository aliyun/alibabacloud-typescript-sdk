// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudGetRecordUrlResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 试听或下载地址，默认120分钟过期（可配置），过期后，需重新请求接口
   * 
   * @example
   * http://voice-1.aliyun.cn/31102016/record/7000000/7000000-2016103111%204742-01087120766-01087120766--record-sip-1-1477885662.222.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20161114T100003Z&X-Amz-SignedHeaders=host&X-Amz-Expires=119&X-Amz-Credential=AKIAOTCJOBZFUWFI7FSA%2F20161114%2Fcn-north-1%2Fs3%2Faws4_request&X-Amz-Signature=0cda4389ecc743acc71d76a320705afd0c175c5ad2286305675c4dee5189b9c8
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CloudGetRecordUrlResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudGetRecordUrlResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 6086693B-2250-17CE-A41F-06259AB6DB1B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: CloudGetRecordUrlResponseBodyData,
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

