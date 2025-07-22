// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetErrorRequestSampleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * dbgateway
   */
  database?: string;
  /**
   * @remarks
   * The error code that is returned.
   * 
   * @example
   * 1062
   */
  errorCode?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address of the client that executes the SQL statement.
   * 
   * @example
   * 172.16.1****
   */
  originHost?: string;
  /**
   * @remarks
   * The SQL statement.
   * 
   * @example
   * insert into meter_****
   */
  sql?: string;
  /**
   * @remarks
   * The SQL query ID.
   * 
   * @example
   * 2cd4432556c3dab9d825ba363637****
   */
  sqlId?: string;
  /**
   * @remarks
   * The table information.
   */
  tables?: string[];
  /**
   * @remarks
   * The time when the SQL query was executed. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1644476100435
   */
  timestamp?: number;
  /**
   * @remarks
   * The username of the account that is used to log on to the database.
   * 
   * @example
   * dbgat****
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'database',
      errorCode: 'errorCode',
      instanceId: 'instanceId',
      originHost: 'originHost',
      sql: 'sql',
      sqlId: 'sqlId',
      tables: 'tables',
      timestamp: 'timestamp',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      errorCode: 'string',
      instanceId: 'string',
      originHost: 'string',
      sql: 'string',
      sqlId: 'string',
      tables: { 'type': 'array', 'itemType': 'string' },
      timestamp: 'number',
      user: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErrorRequestSampleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * [         {             "sqlId": "2cd4432556c3dab9d825ba363637****",             "database": "dbgateway",             "originHost": "172.16.1****",             "tables": [                 "meter_****"             ],             "instanceId": "rm-2ze8g2am97624****",             "errorCode": "1062",             "user": "dbgat****",             "sql": "insert into meter_****\\n        ( \\n        ****\\n     )\\n        values (now(), now(), \\"bbbc8624-5e19-455a-9714-8466f688****\\", \\"2022-02-10 14:00:00\\", \\"{\\"endTime\\":\\"2022-02-10 14:00:00\\",\\"endTimestamp\\":1644472800,\\"startTime\\":\\"2022-02-10 13:00:00\\",\\"startTimestamp\\":1644469200}\\", null, null)",             "timestamp": 1644476100435         }]
   */
  data?: GetErrorRequestSampleResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * >  If the request was successful, **Successful** is returned. If the request failed, an error message such as an error code is returned.
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
   * 7172BECE-588A-5961-8126-C216E16B****
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
  success?: boolean;
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
      code: 'number',
      data: { 'type': 'array', 'itemType': GetErrorRequestSampleResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

