// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The state of the task.
   * 
   * Valid values:
   * 
   * *   running
   * 
   *     <!-- -->
   * 
   *     : The task is
   * 
   *     <!-- -->
   * 
   *     running
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   failed
   * 
   *     <!-- -->
   * 
   *     : The task
   * 
   *     <!-- -->
   * 
   *     fails
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   succeeded
   * 
   *     <!-- -->
   * 
   *     : The task is
   * 
   *     <!-- -->
   * 
   *     successful
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * @example
   * running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

