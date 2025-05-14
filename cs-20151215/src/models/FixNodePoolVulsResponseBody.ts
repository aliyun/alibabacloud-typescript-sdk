// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FixNodePoolVulsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the CVE patching task.
   * 
   * @example
   * T-60fea8ad2e277f087900****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'task_id',
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

