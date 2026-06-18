// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTaskCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a pop-up notification is required. Valid values:
   * 
   * - 1: Required.
   * - 0: Not required.
   * 
   * @example
   * 1
   */
  needPop?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EC7E27FC-58F8-4722-89BB-D1B6D0971956
   */
  requestId?: string;
  /**
   * @remarks
   * The total number.
   * 
   * @example
   * 20
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

