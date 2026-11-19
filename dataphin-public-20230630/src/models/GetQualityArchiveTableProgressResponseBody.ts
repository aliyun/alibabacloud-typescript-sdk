// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityArchiveTableProgressResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the archive table. This parameter is returned after the task succeeds and can be used to switch the active table later.
   * 
   * @example
   * 88012
   */
  archiveTableId?: number;
  /**
   * @remarks
   * The full name of the archive table. This parameter is returned after the task succeeds. When a table is created, the _exception_data suffix is automatically appended to the name.
   * 
   * @example
   * Train.a01_reanme3_exception_data
   */
  archiveTableName?: string;
  /**
   * @remarks
   * The cause of the task failure. This parameter is returned only when Status is FAILED.
   * 
   * @example
   * The archive table name already exists!
   */
  errorMessage?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - PROGRESS: The task is in progress.
   * - SUCCESS: The task is successful.
   * - FAILED: The task failed.
   * - CANCEL: The task is canceled.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      archiveTableId: 'ArchiveTableId',
      archiveTableName: 'ArchiveTableName',
      errorMessage: 'ErrorMessage',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archiveTableId: 'number',
      archiveTableName: 'string',
      errorMessage: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityArchiveTableProgressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The progress details of the asynchronous task.
   */
  data?: GetQualityArchiveTableProgressResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The details of the backend exception.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetQualityArchiveTableProgressResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

