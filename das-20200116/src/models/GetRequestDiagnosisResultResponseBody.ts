// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRequestDiagnosisResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 2093****
   */
  accountId?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * das
   */
  dbSchema?: string;
  /**
   * @remarks
   * The database engine. Valid values:
   * 
   * - **MySQL**
   * 
   * - **PostgreSQL**
   * 
   * - **SQL Server**
   * 
   * - **PolarDB-X**
   * 
   * - **PolarDB for Oracle**
   * 
   * - **MongoDB**
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The creation time of the SQL diagnosis, provided as a Unix timestamp in milliseconds.
   * 
   * @example
   * 1633071840000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The last modification time of the SQL diagnosis, provided as a Unix timestamp in milliseconds.
   * 
   * @example
   * 1633071850000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The unique ID of the diagnosis.
   * 
   * @example
   * 61820b594664275c4429****
   */
  messageId?: string;
  /**
   * @remarks
   * Additional information.
   * 
   * @example
   * {"":""}
   */
  param?: string;
  /**
   * @remarks
   * The details of the SQL diagnosis result, returned as a JSON-formatted string.
   * 
   * - **endTime**: The end time of the SQL diagnosis.
   * 
   * - **errorCode**: The error code.
   * 
   *   - **0001**: The diagnosis was successful.
   * 
   *   - **0003**: The diagnosis failed.
   * 
   * - **errorMessage**: The error message.
   * 
   * - **estimateCost**: The estimated cost.
   * 
   *   - **cpu**: The estimated CPU cost of the query.
   * 
   *   - **io**: The estimated I/O cost of the query.
   * 
   *   - **rows**: The estimated number of rows returned by the query.
   * 
   * - **improvement**: The performance improvement ratio.
   * 
   * - **indexAdvices**: The index suggestions.
   * 
   *   - **columns**: The index columns.
   * 
   *   - **ddlAddIndex**: The DDL statement for creating the index.
   * 
   *   - **indexName**: The index name.
   * 
   *   - **schemaName**: The schema name.
   * 
   *   - **tableName**: The table name.
   * 
   *   - **unique**: Indicates whether the index is a unique index.
   * 
   * - **ip**: The instance IP address.
   * 
   * - **messageId**: The diagnosis ID.
   * 
   * - **port**: The instance port.
   * 
   * - **sqlTag**: The SQL tags.
   * 
   *   - **PRED_EQUAL**: Equality predicate.
   * 
   *   - **CNT_QB**: Number of query blocks.
   * 
   *   - **CNT_TB**: Number of tables.
   * 
   *   - **JOIN_LEFT**: Left join.
   * 
   *   - **SEL_SMALL**: Small result set selection.
   * 
   *   - **AGGR_SEL**: Aggregate selection.
   * 
   *   - **PRED_LT_EQ / PRED_GT_EQ**: Less-than-or-equal-to / greater-than-or-equal-to predicate.
   * 
   *   - **PRED_LIKE_PREFIX**: LIKE prefix match.
   * 
   *   - **ORDER_BY**: Contains an ORDER BY clause.
   * 
   *   - **LIMIT**: Contains a LIMIT clause.
   * 
   *   - **GROUP_BY**: Contains a GROUP BY clause.
   * 
   *   - **JOIN_INNER**: Inner join.
   * 
   *   - **JOIN_RIGHT**: Right join.
   * 
   *   - **HAVING**: Contains a HAVING clause.
   * 
   *   - **UNION**: Contains a UNION operation.
   * 
   * - **startTime**: The start time of the SQL diagnosis.
   * 
   * - **success**: Indicates whether the diagnosis was successful.
   * 
   * - **support**: Indicates whether the SQL statement can be diagnosed.
   * 
   *   - **true**: Supported.
   * 
   *   - **false**: Not supported.
   * 
   * - **tuningAdvices**: The SQL rewrite suggestions.
   * 
   * @example
   * { "endTime":1636354256000, "errorCode":"0001", "errorMessage":"TFX成功", "estimateCost":{ "cpu":1.7878745150389268, "io":9.948402604746128, "rows":8.889372575194633 }, "improvement":12933.97, "indexAdvices":[ { "columns":[ "work_no" ], "ddlAddIndex":"ALTER TABLE `test`.`work_order` ADD INDEX `idx_workno` (`work_no`)", "indexName":"idx_workno", "schemaName":"test", "tableName":"work_order", "unique":false } ], "ip":"****.mysql.rds.aliyuncs.com", "messageId":"6188c8cb2f1365b16aee****", "port":3306, "sqlTag":"{\\"PRED_EQUAL\\":\\"Y\\",\\"CNT_QB\\":\\"1\\",\\"CNT_TB\\":\\"1\\"}", "startTime":1636354252000, "success":true, "support":true, "tuningAdvices":[ ] }
   */
  result?: string;
  /**
   * @remarks
   * The SQL template ID.
   * 
   * @example
   * 0c95dae3afef77be06572612df9b****
   */
  sqlId?: string;
  /**
   * @remarks
   * The diagnosis status. Valid values:
   * 
   * - **0**: In progress.
   * 
   * - **1**: Diagnosis error.
   * 
   * - **2**: Completed.
   * 
   * - **3**: SQL error.
   * 
   * - **4**: Engine error.
   * 
   * @example
   * 2
   */
  state?: number;
  /**
   * @remarks
   * The unique identifier of the diagnosed instance.
   * 
   * @example
   * hdm_51fe9bc19ec413f4d530431af87a****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      dbSchema: 'dbSchema',
      engine: 'engine',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      messageId: 'messageId',
      param: 'param',
      result: 'result',
      sqlId: 'sqlId',
      state: 'state',
      uuid: 'uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      dbSchema: 'string',
      engine: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      messageId: 'string',
      param: 'string',
      result: 'string',
      sqlId: 'string',
      state: 'number',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRequestDiagnosisResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetRequestDiagnosisResultResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * > This parameter returns `Successful` if the request succeeds. If the request fails, it returns an error message, which may include an error code.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 800FBAF5-A539-5B97-A09E-C63AB2F7****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request succeeded.
   * 
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetRequestDiagnosisResultResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

