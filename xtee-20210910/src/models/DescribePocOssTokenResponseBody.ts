// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePocOssTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * AccessKeyId for OSS file upload
   * 
   * @example
   * LTAI5tE7sActovY6Hvpu5oTh
   */
  accessId?: string;
  /**
   * @remarks
   * Host address.
   * 
   * @example
   * 192.168.34.191
   */
  host?: string;
  /**
   * @remarks
   * The Key required for file upload.
   * 
   * @example
   * saf/de/namelist/e924/ufzgsedX9bd3a7
   */
  key?: string;
  /**
   * @remarks
   * OSS security policy.
   * 
   * @example
   * eyJleHBpcmF0aW9uIjoiMjAyNS0wNy0zMFQwNjowNTo0OS45NTRaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMTA0ODU3NjAwMF0sWyJlcSIsIiRrZXkiLCJzYWZcL2RlXC9uYW1lbGlzdFwvZTkyNFwvdWZ6Z3NlZFg5Ymxxxxxxxxxxx
   */
  policy?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Upload signature information.
   * 
   * @example
   * 0lxQEWM0BqHd476JJE0fNXdS3UA=
   */
  signature?: string;
  /**
   * @remarks
   * Return result.
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

