// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTaskCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether any O\\&M tasks need pop-up windows to notify users actions. Valid values:
   * 
   * *   **0**: No O\\&M tasks need pop-up windows to notify users actions.
   * *   **1**: Some O\\&M tasks need pop-up windows to notify users actions.
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
   * 770D7F11-21A2-402B-9DF6-D1A620570EF9
   */
  requestId?: string;
  /**
   * @remarks
   * The number of pending O\\&M tasks.
   * 
   * @example
   * 0
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

