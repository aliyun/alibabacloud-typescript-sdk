// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualificationUploadPolicyResponseBody extends $dara.Model {
  /**
   * @example
   * hObpgEXoca42****
   */
  accessid?: string;
  /**
   * @example
   * 20211220/131953297274****_4de3db85-4f98-488d-845b-d75bf035b13d
   */
  dir?: string;
  /**
   * @example
   * 1593688811881
   */
  expire?: string;
  /**
   * @example
   * https://********-review.oss-cn-********.aliyuncs.com
   */
  host?: string;
  /**
   * @example
   * eyJleHBpcmF0aW9uIjoiMjAaMC0wNy0wMlQxKToyMDoxMS44ODRaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsNTI0Mjg4MDBdLFsic3RhcnRzLXdpdGgiLCIka2V5IiwiMTIxOTU0MTE2MTIxMzA1Ny9PRkZMSU5FX1RSQU5TRkVSLzE1OTM2ODg1MTE4ODMi****
   */
  policy?: string;
  /**
   * @example
   * 20211220/131953297274****_4de3db85-4f98-488d-845b-d75bf035b13d_${filename}
   */
  prefix?: string;
  /**
   * @example
   * 9DFCF6F8-243C-****-8035-4B12FEFD7D48
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
      dir: 'Dir',
      expire: 'Expire',
      host: 'Host',
      policy: 'Policy',
      prefix: 'Prefix',
      requestId: 'RequestId',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessid: 'string',
      dir: 'string',
      expire: 'string',
      host: 'string',
      policy: 'string',
      prefix: 'string',
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

