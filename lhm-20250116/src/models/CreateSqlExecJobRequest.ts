// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSqlExecJobRequest extends $dara.Model {
  /**
   * @remarks
   * The concurrency level. This is an optional parameter.
   * 
   * @example
   * 5
   */
  concurrency?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 10001
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      concurrency: 'concurrency',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrency: 'number',
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

