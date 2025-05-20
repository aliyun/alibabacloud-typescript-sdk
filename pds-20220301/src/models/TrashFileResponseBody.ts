// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrashFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * If an empty string is returned, the file or folder is moved to the recycle bin.
   * 
   * If a non-empty string is returned, an asynchronous task is required. You can call the GetAsyncTask operation to obtain the information about an asynchronous task based on the task ID.
   * 
   * @example
   * 13ebd3a24dba4166b1527add676ef2866051b4d5dele16
   */
  asyncTaskId?: string;
  /**
   * @remarks
   * The domain ID.
   * 
   * @example
   * bj1
   */
  domainId?: string;
  /**
   * @remarks
   * The drive ID.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @remarks
   * The ID of the file or folder.
   * 
   * @example
   * 4221bf6e6ab43c255edc4463bf3a6f5f5d317406
   */
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'async_task_id',
      domainId: 'domain_id',
      driveId: 'drive_id',
      fileId: 'file_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
      domainId: 'string',
      driveId: 'string',
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

