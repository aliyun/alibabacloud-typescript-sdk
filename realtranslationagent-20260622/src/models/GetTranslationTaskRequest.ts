// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTranslationTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The API key that identifies a member accounts identity. You can obtain it from the RuiYiBao console.
   * 
   * @example
   * ***
   */
  APIKey?: string;
  /**
   * @remarks
   * The translation task ID, which is the TaskId obtained from UploadTranslationFile.
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

