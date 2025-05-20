// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous task. This parameter is returned only in asynchronous processing scenarios. You can call the [GetAsyncTask](https://help.aliyun.com/document_detail/440456.html) operation to query the information about the asynchronous task based on the task ID.
   * 
   * @example
   * 000e89fb-cf8f-11e9-8ab4-b6e980803a3b
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
   * The file ID.
   * 
   * @example
   * 9520943DC264
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

