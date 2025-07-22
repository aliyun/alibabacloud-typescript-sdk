// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQueryOptimizeDataStatsResponseBodyDataListRuleList extends $dara.Model {
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * DAS_NOT_IMPORTANT
   */
  name?: string;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * * **Predefined**
   * * **UserDefined**
   * 
   * @example
   * Predefined
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeDataStatsResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The average lock wait time. Unit: seconds.
   * 
   * @example
   * 0.1
   */
  avgLockTime?: number;
  /**
   * @remarks
   * The average query execution time. Unit: seconds.
   * 
   * @example
   * 1.1
   */
  avgQueryTime?: number;
  /**
   * @remarks
   * The average number of rows affected by the SQL statement.
   * 
   * > A value of -1 indicates that this parameter is not collected.
   * 
   * @example
   * 100.1
   */
  avgRowsAffected?: number;
  /**
   * @remarks
   * The average number of scanned rows.
   * 
   * @example
   * 100.1
   */
  avgRowsExamined?: number;
  /**
   * @remarks
   * The average number of returned rows.
   * 
   * @example
   * 100.1
   */
  avgRowsSent?: number;
  /**
   * @remarks
   * The number of times that the SQL template is executed.
   * 
   * @example
   * 100
   */
  count?: number;
  /**
   * @remarks
   * The name of the database to which the SQL template belongs.
   * 
   * @example
   * testdb01
   */
  dbname?: string;
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
   * The longest lock wait time. Unit: seconds.
   * 
   * @example
   * 0.1
   */
  maxLockTime?: number;
  /**
   * @remarks
   * The longest query execution time. Unit: seconds.
   * 
   * @example
   * 1.1
   */
  maxQueryTime?: number;
  /**
   * @remarks
   * The largest number of rows affected by the SQL template.
   * 
   * > A value of -1 indicates that this parameter is not collected.
   * 
   * @example
   * 10000
   */
  maxRowsAffected?: number;
  /**
   * @remarks
   * The largest number of scanned rows.
   * 
   * @example
   * 100000
   */
  maxRowsExamined?: number;
  /**
   * @remarks
   * The largest number of returned rows.
   * 
   * @example
   * 10000
   */
  maxRowsSent?: number;
  /**
   * @remarks
   * The SQL template.
   * 
   * @example
   * select 1
   */
  psql?: string;
  /**
   * @remarks
   * The information about the rules.
   */
  ruleList?: GetQueryOptimizeDataStatsResponseBodyDataListRuleList[];
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
   * The sample query that took the longest time to execute.
   * 
   * @example
   * select 2
   */
  sqlSample?: string;
  /**
   * @remarks
   * The type of the SQL statement.
   * 
   * @example
   * INSERT
   */
  sqlType?: string;
  /**
   * @remarks
   * The account of the database.
   * 
   * @example
   * testUser
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      avgLockTime: 'AvgLockTime',
      avgQueryTime: 'AvgQueryTime',
      avgRowsAffected: 'AvgRowsAffected',
      avgRowsExamined: 'AvgRowsExamined',
      avgRowsSent: 'AvgRowsSent',
      count: 'Count',
      dbname: 'Dbname',
      instanceId: 'InstanceId',
      maxLockTime: 'MaxLockTime',
      maxQueryTime: 'MaxQueryTime',
      maxRowsAffected: 'MaxRowsAffected',
      maxRowsExamined: 'MaxRowsExamined',
      maxRowsSent: 'MaxRowsSent',
      psql: 'Psql',
      ruleList: 'RuleList',
      sqlId: 'SqlId',
      sqlSample: 'SqlSample',
      sqlType: 'SqlType',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgLockTime: 'number',
      avgQueryTime: 'number',
      avgRowsAffected: 'number',
      avgRowsExamined: 'number',
      avgRowsSent: 'number',
      count: 'number',
      dbname: 'string',
      instanceId: 'string',
      maxLockTime: 'number',
      maxQueryTime: 'number',
      maxRowsAffected: 'number',
      maxRowsExamined: 'number',
      maxRowsSent: 'number',
      psql: 'string',
      ruleList: { 'type': 'array', 'itemType': GetQueryOptimizeDataStatsResponseBodyDataListRuleList },
      sqlId: 'string',
      sqlSample: 'string',
      sqlType: 'string',
      user: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ruleList)) {
      $dara.Model.validateArray(this.ruleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueryOptimizeDataStatsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  extra?: string;
  /**
   * @remarks
   * The information about the SQL templates.
   */
  list?: GetQueryOptimizeDataStatsResponseBodyDataList[];
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  pageNo?: number;
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      extra: 'Extra',
      list: 'List',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
      list: { 'type': 'array', 'itemType': GetQueryOptimizeDataStatsResponseBodyDataList },
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

export class GetQueryOptimizeDataStatsResponseBody extends $dara.Model {
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
   * The data returned.
   */
  data?: GetQueryOptimizeDataStatsResponseBodyData;
  /**
   * @remarks
   * The returned message.
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
   * B6D17591-B48B-4D31-9CD6-9B9796B2****
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
      data: GetQueryOptimizeDataStatsResponseBodyData,
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

