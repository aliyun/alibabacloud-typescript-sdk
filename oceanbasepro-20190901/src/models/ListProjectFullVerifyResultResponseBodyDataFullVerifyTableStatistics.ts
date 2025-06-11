// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListProjectFullVerifyResultResponseBodyDataFullVerifyTableStatisticsErrorDetails } from "./ListProjectFullVerifyResultResponseBodyDataFullVerifyTableStatisticsErrorDetails";


export class ListProjectFullVerifyResultResponseBodyDataFullVerifyTableStatistics extends $dara.Model {
  /**
   * @example
   * 200
   */
  consistentCount?: number;
  /**
   * @example
   * 0
   */
  destOnlyCount?: number;
  /**
   * @example
   * dest_db
   */
  destSchemaName?: string;
  errorDetails?: ListProjectFullVerifyResultResponseBodyDataFullVerifyTableStatisticsErrorDetails[];
  /**
   * @example
   * null
   */
  message?: string;
  /**
   * @example
   * 0
   */
  mismatchedCount?: number;
  /**
   * @example
   * 80
   */
  progress?: string;
  /**
   * @example
   * desc
   */
  resultDesc?: string;
  /**
   * @example
   * RUNNING
   */
  resultType?: string;
  /**
   * @example
   * 0
   */
  sourceOnlyCount?: number;
  /**
   * @example
   * source_db
   */
  sourceSchemaName?: string;
  /**
   * @example
   * source_table
   */
  sourceTableName?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      consistentCount: 'ConsistentCount',
      destOnlyCount: 'DestOnlyCount',
      destSchemaName: 'DestSchemaName',
      errorDetails: 'ErrorDetails',
      message: 'Message',
      mismatchedCount: 'MismatchedCount',
      progress: 'Progress',
      resultDesc: 'ResultDesc',
      resultType: 'ResultType',
      sourceOnlyCount: 'SourceOnlyCount',
      sourceSchemaName: 'SourceSchemaName',
      sourceTableName: 'SourceTableName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consistentCount: 'number',
      destOnlyCount: 'number',
      destSchemaName: 'string',
      errorDetails: { 'type': 'array', 'itemType': ListProjectFullVerifyResultResponseBodyDataFullVerifyTableStatisticsErrorDetails },
      message: 'string',
      mismatchedCount: 'number',
      progress: 'string',
      resultDesc: 'string',
      resultType: 'string',
      sourceOnlyCount: 'number',
      sourceSchemaName: 'string',
      sourceTableName: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.errorDetails)) {
      $dara.Model.validateArray(this.errorDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

