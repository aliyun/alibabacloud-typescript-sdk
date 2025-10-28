// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetryChangeOrderTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The retry status.
   * 
   * @example
   * true
   */
  retryStatus?: boolean;
  /**
   * @remarks
   * The ID of the process.
   * 
   * This parameter is required.
   * 
   * @example
   * 823-bhjf-23u4-eiuf*
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      retryStatus: 'RetryStatus',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      retryStatus: 'boolean',
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

