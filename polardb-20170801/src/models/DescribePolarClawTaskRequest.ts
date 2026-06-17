// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarClawTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The asynchronous task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 0ee00f56-f467-4d41-858c-ca4ede2c770e
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
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

