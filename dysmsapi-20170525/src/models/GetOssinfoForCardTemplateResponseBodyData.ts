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

