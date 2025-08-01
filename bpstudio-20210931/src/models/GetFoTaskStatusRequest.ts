// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFoTaskStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The disaster recovery switchover task ID.
   * 
   * @example
   * 2615
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

