// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePocOssTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID used to upload files to OSS.
   * 
   * @example
   * LTAxxxxxxxxx
   */
  accessId?: string;
  /**
   * @remarks
   * The host address.
   * 
   * @example
   * 192.168.34.191
   */
  host?: string;
  /**
   * @remarks
   * The key required for file upload.
   * 
   * @example
   * saf/de/namelist/e924/ufzgsedX9bd3a7
   */
  key?: string;
  /**
   * @remarks
   * The OSS security policy.
   * 
   * @example
   * eyJleHBpxxxcmF0aW9xxxIjoiMjAyNS0wNy0zMFQxxxxxwNjowNTo0OSxxxxx45NTRaIiwiY29uxxxZGl0a5Ymxxxxxxxxxxxxx
   */
  policy?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * The signature information for the upload.
   * 
   * @example
   * 0lxQEWM0BqHd476JJE0fNXdS3UA=
   */
  signature?: string;
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * true
   */
  resultObject?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      host: 'Host',
      key: 'Key',
      policy: 'Policy',
      requestId: 'RequestId',
      signature: 'Signature',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      host: 'string',
      key: 'string',
      policy: 'string',
      requestId: 'string',
      signature: 'string',
      resultObject: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

