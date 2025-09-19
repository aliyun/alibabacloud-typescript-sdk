// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomizedDictUploadInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID that is required to access the OSS object.
   * 
   * @example
   * yourAccessKeyID
   */
  accessid?: string;
  /**
   * @remarks
   * The time when the OSS signature expires. This value is a UNIX timestamp.
   * 
   * @example
   * 1719921470
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
   * The key of the OSS object.
   * 
   * @example
   * HC_CUSTOMIZED_DICT/176618589410****.tmp
   */
  key?: string;
  /**
   * @remarks
   * The policy of the OSS bucket.
   * 
   * @example
   * eyJleHBpcmF0aW9uIjoiMjAyNC0wNy0wMlQxMTo1Nzo1MC44MzJaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsNDA5NjBdLFsiZXEiLCIka2V5IiwiSENfQ1VTVE9NSVpFRF9ESUNUXC8xNzY2MTg1ODk0MTA0Njc1LnRtc****
   */
  policy?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BDEDEEE7-AC25-559E-8C12-5168B139****
   */
  requestId?: string;
  /**
   * @remarks
   * The security token.
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

