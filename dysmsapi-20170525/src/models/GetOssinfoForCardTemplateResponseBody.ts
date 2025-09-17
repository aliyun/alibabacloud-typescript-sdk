// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOSSInfoForCardTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID.
   * 
   * @example
   * LTAIxetqt1Dg****
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 599333677478****
   */
  aliUid?: string;
  /**
   * @remarks
   * The name of the OSS bucket.
   * 
   * @example
   * alicom-cardsms-resources
   */
  bucket?: string;
  /**
   * @remarks
   * The timeout period.
   * 
   * @example
   * 1634209418
   */
  expireTime?: string;
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * https://alicom-cardsms-resources.oss-cn-zhangjiakou.aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * The signature policy.
   * 
   * @example
   * eyJxxx0=
   */
  policy?: string;
  /**
   * @remarks
   * The signature.
   * 
   * @example
   * Aliyun
   */
  signature?: string;
  /**
   * @remarks
   * The path of the policy.
   * 
   * @example
   * 1631792777
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
   * The HTTP status code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   For more information about other response codes, see [API error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetOSSInfoForCardTemplateResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A90E4451-FED7-49D2-87C8-00700A8C4D0D
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   **true**
   * *   **false**
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

