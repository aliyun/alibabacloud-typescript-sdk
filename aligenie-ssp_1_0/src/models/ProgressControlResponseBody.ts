// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProgressControlResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code of the invocation
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Additional information. In typical scenarios, this provides a brief description of a failed invocation to help the caller identify the issue.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 10002398812
   */
  requestId?: string;
  /**
   * @remarks
   * Actual return result of the service
   * 
   * @example
   * true
   */
  result?: boolean;
  /**
   * @remarks
   * Indicates whether the invocation succeeded. true indicates success, and false indicates failure. When the invocation fails, pay attention to the Message field.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
      success: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

