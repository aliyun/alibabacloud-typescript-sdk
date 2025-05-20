// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQueryOptimizeExecErrorStatsResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * testdb01
   */
  dbname?: string;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * 1146
   */
  errorCode?: string;
  /**
   * @remarks
   * The number of errors.
   * 
   * @example
   * 10
   */
  errorCount?: number;
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
   * The alias of the database instance.
   * 
   * @example
   * test01
   */
  instanceName?: string;
  /**
   * @remarks
   * The SQL template ID.
   * 
   * @example
   * 2e8147b5ca2dfc640dfd5e43d96a****
   */
  sqlId?: string;
  /**
   * @remarks
   * The content of the SQL template.
   * 
   * @example
   * select * from test1
   */
  sqlText?: string;
  static names(): { [key: string]: string } {
    return {
      dbname: 'Dbname',
      errorCode: 'ErrorCode',
      errorCount: 'ErrorCount',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      sqlId: 'SqlId',
      sqlText: 'SqlText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbname: 'string',
      errorCode: 'string',
      errorCount: 'number',
      instanceId: 'string',
      instanceName: 'string',
      sqlId: 'string',
      sqlText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

