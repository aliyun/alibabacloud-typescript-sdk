// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDyplsOSSInfoForUploadFileResponseBodyData extends $dara.Model {
  /**
   * @example
   * LTAI***pSvPz
   */
  accessKeyId?: string;
  /**
   * @example
   * 1744613007
   */
  expireTime?: string;
  /**
   * @example
   * https://alicom-**********-cn-zhangjiakou.aliyuncs.com
   */
  host?: string;
  /**
   * @example
   * IjoiMjAyN*****9udGV
   */
  policy?: string;
  /**
   * @example
   * BXwW**********aoZH
   */
  signature?: string;
  /**
   * @example
   * 123456
   */
  startPath?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
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

