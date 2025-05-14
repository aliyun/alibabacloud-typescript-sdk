// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AttachInstancesResponseBodyList } from "./AttachInstancesResponseBodyList";


export class AttachInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the added nodes.
   */
  list?: AttachInstancesResponseBodyList[];
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * T-5a544aff80282e39ea000039
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      list: 'list',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': AttachInstancesResponseBodyList },
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

