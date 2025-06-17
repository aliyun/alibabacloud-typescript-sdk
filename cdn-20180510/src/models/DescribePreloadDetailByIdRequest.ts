// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePreloadDetailByIdRequest extends $dara.Model {
  /**
   * @remarks
   * Queries the details of a preload task by task ID. You can query one task ID at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * 15423123921
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

