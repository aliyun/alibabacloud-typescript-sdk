// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationTaskCountResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  needPop?: number;
  /**
   * @example
   * EC7E27FC-58F8-4722-89BB-D1B6D0971956
   */
  requestId?: string;
  /**
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

