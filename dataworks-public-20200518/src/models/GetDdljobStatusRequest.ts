// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDDLJobStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DDL task.
   * 
   * This parameter is required.
   * 
   * @example
   * abc
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

