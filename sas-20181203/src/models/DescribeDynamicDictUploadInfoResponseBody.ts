// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDynamicDictUploadInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID that is used to access OSS.
   * 
   * @example
   * yourAccessKeyID
   */
  accessid?: string;
  /**
   * @remarks
   * The validity period of the signature. The value is a UNIX timestamp.
   * 
   * @example
   * 1719919893
   */
  expire?: string;
  /**
   * @remarks
   * The OSS endpoint.
   * 
   * @example
   * https://aegis-update-static-file.oss-cn-hangzhou.aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * The name of the OSS object.
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
   * The request ID.
   * 
   * @example
   * A3D7C47D-3F11-57BB-90E8-E5C20C61***
   */
  requestId?: string;
  /**
   * @remarks
   * The signature that is calculated based on **AccessKeySecret** and **Policy**. When you call an OSS API operation, OSS uses the signature information to check the validity of the POST request.
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

