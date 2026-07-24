// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOssCheckResultsBatchFeedbackResponseBody extends $dara.Model {
  /**
   * @remarks
   * Quantity of invalid items.
   * 
   * @example
   * 1
   */
  invalidCount?: number;
  /**
   * @remarks
   * Quantity of duplicates.
   * 
   * @example
   * 1
   */
  repeatCount?: number;
  /**
   * @remarks
   * The ID assigned by the backend to uniquely identify a request. It can be used for troubleshooting.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * Number of succeeded items.
   * 
   * @example
   * 8
   */
  successCount?: number;
  /**
   * @remarks
   * Tips message.
   * 
   * @example
   * xxxxx
   */
  tips?: string;
  /**
   * @remarks
   * Total quantity.
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

