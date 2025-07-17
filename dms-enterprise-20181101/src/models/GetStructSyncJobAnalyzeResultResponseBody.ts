// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResultResultList extends $dara.Model {
  /**
   * @remarks
   * The SQL script.
   */
  script?: string;
  /**
   * @remarks
   * The name of the source table.
   * 
   * @example
   * helloz_bak
   */
  sourceTableName?: string;
  /**
   * @remarks
   * The name of the destination table.
   * 
   * @example
   * helloz_bak
   */
  targetTableName?: string;
  static names(): { [key: string]: string } {
    return {
      script: 'Script',
      sourceTableName: 'SourceTableName',
      targetTableName: 'TargetTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      script: 'string',
      sourceTableName: 'string',
      targetTableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResultSummaryList extends $dara.Model {
  /**
   * @remarks
   * The type of the comparison. Valid values:
   * 
   * *   **CREATE_TABLE**: compares the created tables.
   * *   **ALTER_TABLE**: compares the modified tables.
   * *   **EQUAL_TABLE**: compares the identical tables.
   * *   **PASS_TABLE**: compares the tables that are skipped during schema synchronization.
   * *   **NOT_COMPARE**: does not compare tables.
   * 
   * @example
   * CREATE_TABLE
   */
  compareType?: string;
  /**
   * @remarks
   * The number of tables.
   * 
   * @example
   * 1
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      compareType: 'CompareType',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compareType: 'string',
      count: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResult extends $dara.Model {
  /**
   * @remarks
   * The details of the analysis results.
   */
  resultList?: GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResultResultList[];
  /**
   * @remarks
   * The statistics on the analysis results.
   */
  summaryList?: GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResultSummaryList[];
  static names(): { [key: string]: string } {
    return {
      resultList: 'ResultList',
      summaryList: 'SummaryList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultList: { 'type': 'array', 'itemType': GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResultResultList },
      summaryList: { 'type': 'array', 'itemType': GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResultSummaryList },
    };
  }

  validate() {
    if(Array.isArray(this.resultList)) {
      $dara.Model.validateArray(this.resultList);
    }
    if(Array.isArray(this.summaryList)) {
      $dara.Model.validateArray(this.summaryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStructSyncJobAnalyzeResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1810E635-A2D7-428B-BAA9-85DAEB9B1A77
   */
  requestId?: string;
  /**
   * @remarks
   * The analysis result of the schema synchronization task.
   */
  structSyncJobAnalyzeResult?: GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResult;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      structSyncJobAnalyzeResult: 'StructSyncJobAnalyzeResult',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      structSyncJobAnalyzeResult: GetStructSyncJobAnalyzeResultResponseBodyStructSyncJobAnalyzeResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.structSyncJobAnalyzeResult && typeof (this.structSyncJobAnalyzeResult as any).validate === 'function') {
      (this.structSyncJobAnalyzeResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

