// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepoBuildRecordLogResponseBodyBuildRecordLogs extends $dara.Model {
  /**
   * @remarks
   * The build stage of the log entry.
   * 
   * @example
   * GIT_CLONE
   */
  buildStage?: string;
  /**
   * @remarks
   * The line number of the log entry.
   * 
   * @example
   * 2
   */
  lineNumber?: number;
  /**
   * @remarks
   * The log content.
   * 
   * @example
   * fetch stage begin
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      buildStage: 'BuildStage',
      lineNumber: 'LineNumber',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildStage: 'string',
      lineNumber: 'number',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepoBuildRecordLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The build log content.
   */
  buildRecordLogs?: ListRepoBuildRecordLogResponseBodyBuildRecordLogs[];
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of log entries displayed per page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4CE1F661-75DD-4EBD-A4AD-057B26834ABB
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1000
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      buildRecordLogs: 'BuildRecordLogs',
      code: 'Code',
      isSuccess: 'IsSuccess',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRecordLogs: { 'type': 'array', 'itemType': ListRepoBuildRecordLogResponseBodyBuildRecordLogs },
      code: 'string',
      isSuccess: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.buildRecordLogs)) {
      $dara.Model.validateArray(this.buildRecordLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

