// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeJobGroupExportTaskProgressRequest extends $dara.Model {
  /**
   * @example
   * b3dbfb82-1ae6-4e73-b717-f494727d2af3
   */
  instanceId?: string;
  /**
   * @example
   * e4e2a770-b97b-465a-80d8-06dca008c503
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

