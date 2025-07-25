// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecycleBinJobsResponseBodyJobs extends $dara.Model {
  /**
   * @remarks
   * The time when the job was created.
   * 
   * @example
   * 2021-05-30T10:08:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The error code returned.
   * 
   * A valid value is returned only if you set the Status parameter to Fail or PartialSuccess.
   * 
   * @example
   * InvalidFileId.NotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * A valid value is returned only if you set the Status parameter to Fail or PartialSuccess.
   * 
   * @example
   * The Target File or Directory does not exist.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the file or directory in the job.
   * 
   * @example
   * 04***08
   */
  fileId?: string;
  /**
   * @remarks
   * The name of the file or directory that is associated with the job.
   * 
   * @example
   * test001
   */
  fileName?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 8C****C54
   */
  id?: string;
  /**
   * @remarks
   * The progress of the job.
   * 
   * Valid values: 1 to 100.
   * 
   * @example
   * 100
   */
  progress?: string;
  /**
   * @remarks
   * The status of the job. Valid values:
   * 
   * *   Running: The job is running.
   * *   Defragmenting: The job is defragmenting data.
   * *   PartialSuccess: The job is partially completed.
   * *   Success: The job is completed.
   * *   Fail: The job failed.
   * *   Cancelled: The job is canceled.
   * 
   * @example
   * Fail
   */
  status?: string;
  /**
   * @remarks
   * The type of the job. Valid values:
   * 
   * *   Restore: a file restoration job
   * *   Delete: a file deletion job
   * 
   * @example
   * Restore
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      fileId: 'FileId',
      fileName: 'FileName',
      id: 'Id',
      progress: 'Progress',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      fileId: 'string',
      fileName: 'string',
      id: 'string',
      progress: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

