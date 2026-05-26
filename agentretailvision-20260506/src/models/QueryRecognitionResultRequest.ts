// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRecognitionResultRequest extends $dara.Model {
  /**
   * @example
   * ORDER_001
   */
  orderUniqueId?: string;
  /**
   * @example
   * TASK_001
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      orderUniqueId: 'OrderUniqueId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderUniqueId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

