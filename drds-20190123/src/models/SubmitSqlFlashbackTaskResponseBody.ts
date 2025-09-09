// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSqlFlashbackTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DSSDF-SEWE-*****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the database creation failure records were removed from the DRDS instance.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the replication task.
   * 
   * @example
   * 1111
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
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

