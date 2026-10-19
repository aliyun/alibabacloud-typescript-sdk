// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTaskCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether there are O&M tasks that require a pop-up notification for user action. Valid values:
   * 
   * - **0**: No pop-up notification.
   * - **1**: A pop-up notification exists.
   * 
   * @example
   * 0
   */
  needPop?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2D9F3768-EDA9-4811-943E-42C8006E****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of pending O&M tasks.
   * 
   * @example
   * 1
   */
  taskCount?: number;
  static names(): { [key: string]: string } {
    return {
      needPop: 'NeedPop',
      requestId: 'RequestId',
      taskCount: 'TaskCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needPop: 'number',
      requestId: 'string',
      taskCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

