// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRequestDiagnosisPageResponseBodyDataList extends $dara.Model {
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
   * The name of the database.
   * 
   * @example
   * das
   */
  dbSchema?: string;
  /**
   * @remarks
   * The database engine. Valid values:
   * 
   * * **MySQL**
   * * **PostgreSQL**
   * * **SQLServer**
   * * **PolarDBMySQL**
   * * **PolarDBOracle**
   * * **MongoDB**
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The time when the SQL diagnostics task was created. The value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1633071840000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the SQL diagnostics task was modified. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1633071850000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The unique ID of the diagnostics task.
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
   * The result of the SQL diagnostics task. The result includes the following information:
   * 
   * * **endTime**: the end time of the SQL diagnostics task.
   * * **errorCode**: indicates whether the SQL diagnostics task is complete. Valid values:
   *   * **0001**: The SQL diagnostics task is complete.
   *   * **0003**: The SQL diagnostics task failed.
   * 
   * * **errorMessage**: the error message.
   * * **estimateCost**: the estimated cost.
   *   * **cpu**: the estimated CPU utilization of the index.
   *   * **io**: the estimated I/O usage of the index.
   *   * **rows**: the estimated values of the rows returned for the index.
   * * **improvement**: the performance improvement ratio.
   * * **indexAdvices**: the index recommendations, which include the following information:
   *   * **columns**: the index columns.
   *   * **ddlAddIndex**: the DDL statement for the index.
   *   * **indexName**: the name of the index.
   *   * **schemaName**: the name of the database.
   *   * **tableName**: the name of the table.
   *   * **unique**: indicates whether the index is unique.
   * 
   * * **ip**: the IP address of the instance.
   * * **messageId**: the ID of the diagnostics task.
   * * **port**: the port used to connect to the instance.
   * * **sqlTag**: the SQL tag.
   * * **startTime**: the start time of the SQL diagnostics task.
   * * **success**: indicates whether the request was successful.
   * * **support**: indicates whether the SQL statement can be diagnosed. Valid values:
   *   * **true**: The SQL statement can be diagnosed.
   *   * **false**: The SQL statement cannot be diagnosed.
   * 
   * * **tuningAdvices**: the SQL rewrite suggestions.
   * 
   * @example
   * { "endTime":1636354256000, "errorCode":"0001", "errorMessage":"TFX Successful", "estimateCost":{ "cpu":1.7878745150389268, "io":9.948402604746128, "rows":8.889372575194633 }, "improvement":12933.97, "indexAdvices":[ { "columns":[ "work_no" ], "ddlAddIndex":"ALTER TABLE `test`.`work_order` ADD INDEX `idx_workno` (`work_no`)", "indexName":"idx_workno", "schemaName":"test", "tableName":"work_order", "unique":false } ], "ip":"****.mysql.rds.aliyuncs.com", "messageId":"6188c8cb2f1365b16aee****", "port":3306, "sqlTag":"{\\"PRED_EQUAL\\":\\"Y\\",\\"CNT_QB\\":\\"1\\",\\"CNT_TB\\":\\"1\\"}", "startTime":1636354252000, "success":true, "support":true, "tuningAdvices":[ ] }
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
   * The status of the diagnostics task. Valid values:
   * 
   * * **0**: The diagnostics task is in progress.
   * 
   * * **1**: A diagnostics error occurred.
   * 
   * * **2**: The diagnostics task is complete.
   * 
   * * **3**: An SQL error occurred.
   * 
   * * **4**: An engine error occurred.
   * 
   * @example
   * 2
   */
  state?: number;
  /**
   * @remarks
   * The unique ID of the diagnostics instance.
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

export class GetRequestDiagnosisPageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Additional information.
   * 
   * @example
   * {"":""}
   */
  extra?: string;
  /**
   * @remarks
   * The SQL diagnostics records returned.
   */
  list?: GetRequestDiagnosisPageResponseBodyDataList[];
  /**
   * @remarks
   * The page number. The value must be a positive integer. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. The value must be a positive integer. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      extra: 'extra',
      list: 'list',
      pageNo: 'pageNo',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
      list: { 'type': 'array', 'itemType': GetRequestDiagnosisPageResponseBodyDataList },
      pageNo: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRequestDiagnosisPageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetRequestDiagnosisPageResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request was successful, Successful is returned. If the request failed, an error message that contains information such as an error code is returned.
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
   * *   **true**
   * *   **false**
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
      data: GetRequestDiagnosisPageResponseBodyData,
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

