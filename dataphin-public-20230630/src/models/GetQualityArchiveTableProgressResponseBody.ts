// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityArchiveTableProgressResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The archived table ID. This parameter is returned after the task succeeds and can be used to switch the active table.
   * 
   * @example
   * 88012
   */
  archiveTableId?: number;
  /**
   * @remarks
   * The full name of the archived table. This parameter is returned after the task succeeds. When creating a table, the name includes the automatically appended _exception_data suffix.
   * 
   * @example
   * Train.a01_reanme3_exception_data
   */
  archiveTableName?: string;
  /**
   * @remarks
   * The reason for the task failure. This parameter is returned only when Status is FAILED.
   * 
   * @example
   * The archived table name already exists!
   */
  errorMessage?: string;
  /**
   * @remarks
   * The task status. Valid values:
   * - PROGRESS: In progress.
   * - SUCCESS: Succeeded.
   * - FAILED: Failed.
   * - CANCEL: Canceled.
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
   * The asynchronous task progress details.
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
   * The backend exception details.
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
   * Indicates whether the request was successful.
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

