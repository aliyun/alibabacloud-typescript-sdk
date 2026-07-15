// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDeleteRouteStrategyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * job is not existed, jobId=162837
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 704A2A61-3681-5568-92F7-2DFCC53F33D1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. Valid values:
   * 
   * - **true**: The request succeeded.
   * 
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
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

