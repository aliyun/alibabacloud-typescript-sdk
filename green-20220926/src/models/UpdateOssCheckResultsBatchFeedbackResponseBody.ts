// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOssCheckResultsBatchFeedbackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of invalid items.
   * 
   * @example
   * 1
   */
  invalidCount?: number;
  /**
   * @remarks
   * The number of duplicate items.
   * 
   * @example
   * 1
   */
  repeatCount?: number;
  /**
   * @remarks
   * The ID assigned by the backend to uniquely identify a request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of successful items.
   * 
   * @example
   * 8
   */
  successCount?: number;
  /**
   * @remarks
   * The prompt information.
   * 
   * @example
   * xxxxx
   */
  tips?: string;
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      invalidCount: 'InvalidCount',
      repeatCount: 'RepeatCount',
      requestId: 'RequestId',
      successCount: 'SuccessCount',
      tips: 'Tips',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invalidCount: 'number',
      repeatCount: 'number',
      requestId: 'string',
      successCount: 'number',
      tips: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

