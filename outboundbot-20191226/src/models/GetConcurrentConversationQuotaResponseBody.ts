// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConcurrentConversationQuotaResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * maxConcurrent
   * 
   * @example
   * 10
   */
  maxConcurrent?: number;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 2
   */
  remainingConcurrent?: number;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      maxConcurrent: 'MaxConcurrent',
      message: 'Message',
      remainingConcurrent: 'RemainingConcurrent',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      maxConcurrent: 'number',
      message: 'string',
      remainingConcurrent: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

