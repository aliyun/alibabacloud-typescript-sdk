// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitReviewInfoV4ResponseBody extends $dara.Model {
  /**
   * @remarks
   * Result code. Use this field to identify failure causes.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Error details if the request failed. Returns **successful** if the request succeeded.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 106C6CA0-282D-4AF7-85F0-D2D24***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. true = success, false or null = failure
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
      code: 'string',
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

