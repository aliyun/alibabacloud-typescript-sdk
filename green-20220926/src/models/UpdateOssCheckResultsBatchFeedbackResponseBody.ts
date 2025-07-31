// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOssCheckResultsBatchFeedbackResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  invalidCount?: number;
  /**
   * @example
   * 1
   */
  repeatCount?: number;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @example
   * 8
   */
  successCount?: number;
  /**
   * @example
   * xxxxx
   */
  tips?: string;
  /**
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

