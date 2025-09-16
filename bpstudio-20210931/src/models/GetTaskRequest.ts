// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskRequest extends $dara.Model {
  /**
   * @example
   * 2615
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

