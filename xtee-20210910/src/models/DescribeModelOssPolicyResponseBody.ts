// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModelOssPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * Access ID for OSS.
   * 
   * @example
   * LTAIpeYTKEbC0v10
   */
  accessId?: string;
  /**
   * @remarks
   * Address.
   * 
   * @example
   * https://saf-ai.oss-cn-shanghai.aliyuncs.com
   */
  host?: string;
  /**
   * @remarks
   * OSS access key secret.
   * 
   * @example
   * saf/a/uid/ccc
   */
  key?: string;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The policy for user form upload, which is a base64-encoded string.
   * 
   * @example
   * eyJleHBpxxxxxx
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
   * Signature information.
   * 
   * @example
   * tzl1wL4q8rR/xxxxxx
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
      message: 'Message',
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
      message: 'string',
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

