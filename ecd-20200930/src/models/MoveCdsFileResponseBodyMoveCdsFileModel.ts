// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveCdsFileResponseBodyMoveCdsFileModel extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous task. This parameter is not returned if you copy files. This parameter is returned if you copy folders in the backend in an asynchronous manner. You can call the GetAsyncTask operation to obtain the ID and details of an asynchronous task.
   * 
   * @example
   * fe307518-825a-4c8b-a69c-958f0e8a****
   */
  asyncTaskId?: string;
  /**
   * @remarks
   * Indicates whether the file exists.
   * 
   * Valid values:
   * 
   * *   <!-- -->
   * 
   *     true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   <!-- -->
   * 
   *     false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * false
   */
  exist?: boolean;
  /**
   * @remarks
   * The ID of the file.
   * 
   * @example
   * 63636837e47e5a24a8a940218bef395c210e****
   */
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'AsyncTaskId',
      exist: 'Exist',
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
      exist: 'boolean',
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

