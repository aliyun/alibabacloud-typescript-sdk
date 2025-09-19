// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOssPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * accessId, a parameter used in OSS SDK uploads, corresponding to OSSAccessKeyId
   * 
   * @example
   * LTAxxxxxxxxxxxx
   */
  accessId?: string;
  /**
   * @remarks
   * OSS host ID.
   * 
   * @example
   * testvm.biubiubiuu.com
   */
  host?: string;
  /**
   * @remarks
   * Key required for file upload.
   * 
   * @example
   * saf/a/uid/ccc
   */
  key?: string;
  /**
   * @remarks
   * OSS security policy
   * 
   * @example
   * eyJleHBpxxxxxx
   */
  policy?: string;
  /**
   * @remarks
   * Signature data.
   * 
   * @example
   * tzl1wL4q8rR/xxxxxx
   */
  signature?: string;
  /**
   * @remarks
   * Request ID.
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

