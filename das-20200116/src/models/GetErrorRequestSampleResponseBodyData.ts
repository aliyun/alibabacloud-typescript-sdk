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

