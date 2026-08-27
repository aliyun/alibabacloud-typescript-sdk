// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOriginalFileUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The API key that identifies a member account. You can obtain it from the Ruiyi Bao console.
   * 
   * @example
   * ***
   */
  APIKey?: string;
  /**
   * @remarks
   * The task ID.
   * - The TaskId is returned after a task is submitted by calling SubmitTranslationTask.
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

