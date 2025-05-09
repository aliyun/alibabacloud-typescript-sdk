// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDownloadTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the file download task.
   * 
   * @example
   * 4376
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
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

