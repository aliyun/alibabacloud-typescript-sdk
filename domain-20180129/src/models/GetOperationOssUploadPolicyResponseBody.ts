// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOperationOssUploadPolicyResponseBody extends $dara.Model {
  /**
   * @example
   * hObpgEXoca42****
   */
  accessid?: string;
  /**
   * @example
   * eyJleHBpcmF0aW9uIjoiMjAaMC0wNy0wMlQxKToyMDoxMS44ODRaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsNTI0Mjg4MDBdLFsic3RhcnRzLXdpdGgiLCIka2V5IiwiMTIxOTU0MTE2MTIxMzA1Ny9PRkZMSU5FX1RSQU5TRkVSLzE1OTM2ODg1MTE4ODMi****
   */
  encodedPolicy?: string;
  /**
   * @example
   * 1593688811881
   */
  expireTime?: string;
  /**
   * @example
   * 1219541161213157/OFFLINE_TRANSFER/159368851****
   */
  fileDir?: string;
  /**
   * @remarks
   * OSS Endpoint。
   * 
   * @example
   * //***-basic-cert.oss-cn-***.aliyuncs.com/
   */
  host?: string;
  /**
   * @example
   * 9DFCF6F8-243C-40EC-8035-4B12FEFD7D011
   */
  requestId?: string;
  /**
   * @example
   * pNVECGkyL0tl4bKXekV5ErZ****
   */
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessid: 'Accessid',
      encodedPolicy: 'EncodedPolicy',
      expireTime: 'ExpireTime',
      fileDir: 'FileDir',
      host: 'Host',
      requestId: 'RequestId',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessid: 'string',
      encodedPolicy: 'string',
      expireTime: 'string',
      fileDir: 'string',
      host: 'string',
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

