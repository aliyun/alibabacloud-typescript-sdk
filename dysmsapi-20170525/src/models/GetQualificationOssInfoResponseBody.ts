// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualificationOssInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * ak
   * 
   * @example
   * bypFNbG******
   */
  accessKeyId?: string;
  /**
   * @remarks
   * 过期时间
   * 
   * @example
   * 1741521339
   */
  expire?: number;
  /**
   * @remarks
   * 域名
   * 
   * @example
   * http://***.oss-cn-zhangjiakou.aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * 策略
   * 
   * @example
   * eyJleHBpcmF0aW9uIjoiMjAyNS0wMy0wOVQxMTo1NTozOS4wMDFaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMTA0ODU3NjAwMF0seyJidWNrZXQiOiJhbGljb20tZmMtbWVkaWEifSxbImVxIiwiJGtleSIsIjEwMDAwMDM1ODA4MjA2M1wv********
   */
  policy?: string;
  /**
   * @remarks
   * 签名
   * 
   * @example
   * QvNTGC9DSLTeByP+ZWW******
   */
  signature?: string;
  /**
   * @remarks
   * 前缀
   * 
   * @example
   * 1000********001
   */
  startPath?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      expire: 'Expire',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
      startPath: 'StartPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      expire: 'number',
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

export class GetQualificationOssInfoResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetQualificationOssInfoResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 25D5AFDE-8EBC-132E-8909-1FDC071DA
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
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: GetQualificationOssInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

