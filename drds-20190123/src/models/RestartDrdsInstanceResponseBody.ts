// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartDrdsInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A3140FC7-B78B-4D8E-B0C8-926D28******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the database creation failure records were removed from the PolarDB-X instance.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 1
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

