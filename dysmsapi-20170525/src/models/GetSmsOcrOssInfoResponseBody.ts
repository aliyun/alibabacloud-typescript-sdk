// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSmsOcrOssInfoResponseBodyModel extends $dara.Model {
  /**
   * @remarks
   * 签名使用的 AccessKey ID。
   * 
   * @example
   * bypFNbG******
   */
  accessKeyId?: string;
  /**
   * @remarks
   * bucket名称。
   * 
   * @example
   * 示例值
   */
  bucket?: string;
  /**
   * @remarks
   * 过期时间戳，单位：秒。
   * 
   * @example
   * 1741521339
   */
  expireTime?: string;
  /**
   * @remarks
   * Host 地址。
   * 
   * @example
   * http://***.oss-cn-zhangjiakou.aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * 签名策略。
   * 
   * @example
   * eyJleHBpcmF0aW9uIjoiMjAyNS0wMy0wOVQxMTo1NTozOS4wMDFaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMTA0ODU3NjAwMF0seyJidWNrZXQiOiJhbGljb20tZmMtbWVkaWEifSxbImVxIiwiJGtleSIsIjEwMDAwMDM1ODA4MjA2M1wv********
   */
  policy?: string;
  /**
   * @remarks
   * 根据 AccessKey Secret 和 Policy 计算出的签名信息。调用 OSS API 时，OSS 验证该签名信息，从而确认请求的合法性。
   * 
   * @example
   * QvNTGC9DSLTeByP+ZWW******
   */
  signature?: string;
  /**
   * @remarks
   * 策略路径。
   * 
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
   * @remarks
   * 访问被拒绝详细信息，只有 RAM 校验失败才会返回此字段。
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * 请求状态码。
   * 
   * - 返回 OK 代表请求成功。
   * 
   * - 其他错误码，请参见 [API 错误码](https://www.alibabacloud.com/help/en/sms/developer-reference/api-error-codes)。
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * 状态码的描述。
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * OSS配置信息。
   */
  model?: GetSmsOcrOssInfoResponseBodyModel;
  /**
   * @remarks
   * 本次调用请求的 ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
   * 
   * @example
   * 25D5AFDE-xxxx-132E-8909-1FDC071DA
   */
  requestId?: string;
  /**
   * @remarks
   * 调用接口是否成功。取值：
   * 
   * - true：调用成功。
   * 
   * - false：调用失败。
   * 
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

