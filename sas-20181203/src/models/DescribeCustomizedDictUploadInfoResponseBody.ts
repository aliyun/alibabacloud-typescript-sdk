// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomizedDictUploadInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID required to access the file.
   * 
   * @example
   * yourAccessKeyID
   */
  accessid?: string;
  /**
   * @remarks
   * The expiration time of the authentication, in timestamp format.
   * 
   * @example
   * 1719921470
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
   * The OSS file key.
   * 
   * @example
   * HC_CUSTOMIZED_DICT/176618589410****.tmp
   */
  key?: string;
  /**
   * @remarks
   * The bucket policy of the OSS bucket.
   * 
   * @example
   * eyJleHBpcmF0aW9uIjoiMjAyNC0wNy0wMlQxMTo1Nzo1MC44MzJaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsNDA5NjBdLFsiZXEiLCIka2V5IiwiSENfQ1VTVE9NSVpFRF9ESUNUXC8xNzY2MTg1ODk0MTA0Njc1LnRtc****
   */
  policy?: string;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each API request. You can use this identifier to troubleshoot issues.
   * 
   * @example
   * BDEDEEE7-AC25-559E-8C12-5168B139****
   */
  requestId?: string;
  /**
   * @remarks
   * The Security Token Service (STS) token.
   * 
   * @example
   * ***
   */
  securityToken?: string;
  /**
   * @remarks
   * The OSS signature.
   * 
   * @example
   * mWGRgn0CtdbVf8UuJbTXOmo2****
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
      securityToken: 'SecurityToken',
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
      securityToken: 'string',
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

