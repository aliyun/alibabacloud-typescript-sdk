// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataExportPreCheckDetailResponseBodyPreCheckResultPreCheckDetailListPreCheckDetailList extends $dara.Model {
  /**
   * @remarks
   * The estimated number of data rows to be affected.
   * 
   * @example
   * 1
   */
  affectRows?: number;
  /**
   * @remarks
   * The SQL statement.
   * 
   * @example
   * SELECT * FROM tmp_table LIMIT 1
   */
  SQL?: string;
  static names(): { [key: string]: string } {
    return {
      affectRows: 'AffectRows',
      SQL: 'SQL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectRows: 'number',
      SQL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataExportPreCheckDetailResponseBodyPreCheckResultPreCheckDetailList extends $dara.Model {
  preCheckDetailList?: GetDataExportPreCheckDetailResponseBodyPreCheckResultPreCheckDetailListPreCheckDetailList[];
  static names(): { [key: string]: string } {
    return {
      preCheckDetailList: 'PreCheckDetailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preCheckDetailList: { 'type': 'array', 'itemType': GetDataExportPreCheckDetailResponseBodyPreCheckResultPreCheckDetailListPreCheckDetailList },
    };
  }

  validate() {
    if(Array.isArray(this.preCheckDetailList)) {
      $dara.Model.validateArray(this.preCheckDetailList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataExportPreCheckDetailResponseBodyPreCheckResult extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to skip verification. Valid values:
   * 
   * - true
   * - false
   * 
   * @example
   * true
   */
  ignoreAffectRows?: boolean;
  /**
   * @remarks
   * The list of pre-check details.
   */
  preCheckDetailList?: GetDataExportPreCheckDetailResponseBodyPreCheckResultPreCheckDetailList;
  static names(): { [key: string]: string } {
    return {
      ignoreAffectRows: 'IgnoreAffectRows',
      preCheckDetailList: 'PreCheckDetailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoreAffectRows: 'boolean',
      preCheckDetailList: GetDataExportPreCheckDetailResponseBodyPreCheckResultPreCheckDetailList,
    };
  }

  validate() {
    if(this.preCheckDetailList && typeof (this.preCheckDetailList as any).validate === 'function') {
      (this.preCheckDetailList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataExportPreCheckDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates the result of the precheck task.
   */
  preCheckResult?: GetDataExportPreCheckDetailResponseBodyPreCheckResult;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C1D39814-9808-47F8-AFE0-AF167239AC9B
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      preCheckResult: 'PreCheckResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      preCheckResult: GetDataExportPreCheckDetailResponseBodyPreCheckResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.preCheckResult && typeof (this.preCheckResult as any).validate === 'function') {
      (this.preCheckResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

