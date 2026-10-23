// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyLakebaseMountParameterGroupResponseBody extends $dara.Model {
  /**
   * @example
   * F45FFACC-xxx
   */
  requestId?: string;
  /**
   * @example
   * 123456
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

