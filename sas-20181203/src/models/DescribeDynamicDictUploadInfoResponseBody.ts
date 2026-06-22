// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDynamicDictUploadInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID of OSS.
   * 
   * @example
   * yourAccessKeyID
   */
  accessid?: string;
  /**
   * @remarks
   * The expiration time of the OSS authorization, in timestamp format.
   * 
   * @example
   * 1719919893
   */
  expire?: string;
  /**
   * @remarks
   * The OSS domain name.
   * 
   * @example
   * https://aegis-update-static-file.oss-cn-hangzhou.aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * The key of the OSS file name.
   * 
   * @example
   * DegradePool_Offset_****
   */
  key?: string;
  /**
   * @remarks
   * The OSS security policy.
   * 
   * @example
   * eyJleHBpcmF0aW9uIjoiMjAyNC0wNy0wMlQxMTozMTozMy40MjlaIiwiY29uZGl0aW9********
   */
  policy?: string;
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * A3D7C47D-3F11-57BB-90E8-E5C20C61***
   */
  requestId?: string;
  /**
   * @remarks
   * The signature information calculated based on **AccessKeySecret** and **Policy**. When you call an OSS API operation, OSS verifies this signature information to confirm the validity of the POST request.
   * 
   * @example
   * wBiwkhd5LGcLzijtc3FhI****
   */
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessid: 'Accessid',
      expire: 'Expire',
      host: 'Host',
      key: 'Key',
      policy: 'Policy',
      requestId: 'RequestId',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessid: 'string',
      expire: 'string',
      host: 'string',
      key: 'string',
      policy: 'string',
      requestId: 'string',
      signature: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

