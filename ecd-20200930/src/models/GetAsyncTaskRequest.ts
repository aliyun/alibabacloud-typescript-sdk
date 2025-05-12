// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAsyncTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The asynchronous task ID. This parameter is not returned if you copy files. This parameter is returned if you copy folders in the backend in an asynchronous manner. You can call the GetAsyncTask operation to obtain the ID and information about an asynchronous task.
   * 
   * This parameter is required.
   * 
   * @example
   * 81a8a07a-aec4-4dd5-80da-ae69e482****
   */
  asyncTaskId?: string;
  /**
   * @remarks
   * The ID of the cloud disk.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai+cds-135515****
   */
  cdsId?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'AsyncTaskId',
      cdsId: 'CdsId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
      cdsId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

