// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelTranslationTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The API key, the identity of member accounts. You can obtain it from the RuiYiBao console.
   * 
   * @example
   * sk-5****7
   */
  APIKey?: string;
  /**
   * @remarks
   * The task ID.
   * - The TaskId is returned after a task is submitted by calling SubmitTranslationTask.
   * - Only running tasks can be canceled.
   * 
   * This parameter is required.
   * 
   * @example
   * f9c35b0453b
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      APIKey: 'APIKey',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      APIKey: 'string',
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

