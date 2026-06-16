// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOssPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access ID. This parameter corresponds to OSSAccessKeyId when you use the OSS SDK for upload.
   * 
   * @example
   * LTAxxxxxxxxxx
   */
  accessId?: string;
  /**
   * @remarks
   * The host ID of OSS.
   * 
   * @example
   * testvm.biubiubiuu.com
   */
  host?: string;
  /**
   * @remarks
   * The key required for file upload.
   * 
   * @example
   * saf/a/uid/ccc
   */
  key?: string;
  /**
   * @remarks
   * The OSS security policy.
   * 
   * @example
   * eyJleHBpxxxxxx
   */
  policy?: string;
  /**
   * @remarks
   * The signature data.
   * 
   * @example
   * tzl1wL4q8rR/xxxxxx
   */
  signature?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AE7E6105-7DEB-5125-9B24-DCBC139F6CD2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      host: 'Host',
      key: 'Key',
      policy: 'Policy',
      signature: 'Signature',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      host: 'string',
      key: 'string',
      policy: 'string',
      signature: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

