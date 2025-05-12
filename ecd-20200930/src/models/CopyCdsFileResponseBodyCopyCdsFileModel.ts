// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyCdsFileResponseBodyCopyCdsFileModel extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous task. This parameter is not returned if you copy a file. This parameter is returned if you copy a folder in the backend in an asynchronous manner. You can call the GetAsyncTask operation to obtain the ID and details of an asynchronous task.
   * 
   * @example
   * 4221bf6e6ab43a255edc4463bffa6f5f5d31****
   */
  asyncTaskId?: string;
  /**
   * @remarks
   * The ID of the copied file or folder.
   * 
   * @example
   * 6400727cb878821bcb414615a609b4072463****
   */
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'AsyncTaskId',
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
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

