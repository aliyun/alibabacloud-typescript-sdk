// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOSSInfoForCardTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 签名使用的AccessKey ID。
   * 
   * @example
   * LTAI************
   */
  accessKeyId?: string;
  /**
   * @remarks
   * 阿里云账号ID。
   * 
   * @example
   * 168**********184
   */
  aliUid?: string;
  /**
   * @remarks
   * OSS文件保存桶名称。
   * 
   * @example
   * alicom-cardsms-resources
   */
  bucket?: string;
  /**
   * @remarks
   * 超时时间戳。单位：秒。
   * 
   * @example
   * 1634209418
   */
  expireTime?: string;
  /**
   * @remarks
   * 访问地址。
   * 
   * @example
   * http://***.aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * 签名策略。
   * 
   * @example
   * eyJleHBpcmF0aW9uIjoiMjAyNS0wMy0yNlQwMzo0NDoyMy4xNTlaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMTA0ODU3NjAwMF0sWyJzdGFydHMtd2l0aCIsIiRrZXkiLCIxNDIwNjM0******************
   */
  policy?: string;
  /**
   * @remarks
   * 短信签名。
   * 
   * @example
   * 阿里云
   */
  signature?: string;
  /**
   * @remarks
   * 策略路径。
   * 
   * @example
   * 168**********184
   */
  startPath?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      aliUid: 'AliUid',
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
      aliUid: 'string',
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

export class GetOSSInfoForCardTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * 请求状态码。
   * 
   * - OK：代表请求成功。
   * - 其他错误码，请参见[API错误码](https://help.aliyun.com/document_detail/101346.html)。
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * 返回数据。
   */
  data?: GetOSSInfoForCardTemplateResponseBodyData;
  /**
   * @remarks
   * 请求ID。
   * 
   * @example
   * A90E4451-FED7-49D2-87C8-00700A8C4D0D
   */
  requestId?: string;
  /**
   * @remarks
   * 调用接口是否成功。取值：
   * 
   * - **true**：调用成功。
   * 
   * - **false**：调用失败。
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetOSSInfoForCardTemplateResponseBodyData,
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

