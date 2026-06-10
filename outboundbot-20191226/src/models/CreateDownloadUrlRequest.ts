// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDownloadUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the download task.
   * 
   * > This parameter is obtained from the TaskId response parameter of the ListDownloadTasks operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 137da36b41304bcd999a0a7895dc6881
   */
  downloadTaskId?: string;
  /**
   * @remarks
   * The ID of the file.
   * 
   * > This parameter is obtained from the FileId response parameter of the ListDownloadTasks operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 6f91885fa24b4c408d8f4eb392fd8ae6
   */
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      downloadTaskId: 'DownloadTaskId',
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadTaskId: 'string',
      fileId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

