// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOSSInfoForUploadFileResponseBodyModel extends $dara.Model {
  /**
   * @remarks
   * AccessKey ID used for signing.
   * 
   * @example
   * LTAIxetqt1Dg****
   */
  accessKeyId?: string;
  /**
   * @remarks
   * Expiration time.
   * 
   * @example
   * 1719297445
   */
  expireTime?: string;
  /**
   * @remarks
   * Host address.
   * 
   * @example
   * https://alicom-fc-media.oss-cn-zhangjiakou.aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * Signature policy.
   * 
   * @example
   * eyJleHBpcmF0aW9uIjoiMjAyN***Ni0yNVQwNjozNzoyNS45NzBaI**iY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMTA0ODU3NjAwMF0sWyJzdGFydHMtd2l0***sIiRrZXkiLCIiXV19
   */
  policy?: string;
  /**
   * @remarks
   * Signature information calculated based on **AccessKey Secret** and **Policy**. When calling the OSS API, OSS verifies this signature information to confirm the legitimacy of the Post request.
   * 
   * @example
   * BXnwCWPrhVb*****aoZHZfli5KE=
   */
  signature?: string;
  /**
   * @remarks
   * Policy path.
   * 
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

