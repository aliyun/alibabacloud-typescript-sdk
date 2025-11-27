// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSmsOcrOssInfoResponseBodyModel extends $dara.Model {
  /**
   * @example
   * bypFNbG******
   */
  accessKeyId?: string;
  /**
   * @example
   * 示例值示例值
   */
  bucket?: string;
  /**
   * @example
   * 1741521339
   */
  expireTime?: string;
  /**
   * @example
   * http://***.oss-cn-zhangjiakou.aliyuncs.com
   */
  host?: string;
  /**
   * @example
   * eyJleHBpcmF0aW9uIjoiMjAyNS0wMy0wOVQxMTo1NTozOS4wMDFaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMTA0ODU3NjAwMF0seyJidWNrZXQiOiJhbGljb20tZmMtbWVkaWEifSxbImVxIiwiJGtleSIsIjEwMDAwMDM1ODA4MjA2M1wv********
   */
  policy?: string;
  /**
   * @example
   * QvNTGC9DSLTeByP+ZWW******
   */
  signature?: string;
  /**
   * @example
   * 1000********001
   */
  startPath?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      bucket: 'Bucket',
      expireTime: 'ExpireTime',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
      startPath: 'StartPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      bucket: 'string',
      expireTime: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
      startPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSmsOcrOssInfoResponseBody extends $dara.Model {
  /**
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * OK
   */
  message?: string;
  model?: GetSmsOcrOssInfoResponseBodyModel;
  /**
   * @example
   * 25D5AFDE-xxxx-132E-8909-1FDC071DA
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      model: GetSmsOcrOssInfoResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.model && typeof (this.model as any).validate === 'function') {
      (this.model as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

