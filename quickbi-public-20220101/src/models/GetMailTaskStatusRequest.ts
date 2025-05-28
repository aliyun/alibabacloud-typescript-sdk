// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMailTaskStatusRequest extends $dara.Model {
  /**
   * @remarks
   * Mail ID
   * 
   * This parameter is required.
   * 
   * @example
   * d5a5****8b634d****5584f8dc159c62
   */
  mailId?: string;
  /**
   * @remarks
   * Task ID
   * 
   * > - If the task ID is not provided, the latest task status will be returned by default;
   * > - If the task ID is provided, the status of the specified task will be returned.
   * 
   * @example
   * 7218****0392****212
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      mailId: 'MailId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mailId: 'string',
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

