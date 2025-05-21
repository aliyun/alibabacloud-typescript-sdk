// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePatternPerformanceResponseBodyPerformances } from "./DescribePatternPerformanceResponseBodyPerformances";


export class DescribePatternPerformanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IP address of the SQL client that submits the SQL pattern.
   * 
   * @example
   * 172.16.14.*
   */
  accessIp?: string;
  /**
   * @remarks
   * The end time of the query. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-18T18:05Z
   */
  endTime?: string;
  /**
   * @remarks
   * The number of failed SQL patterns within the time range.
   * 
   * @example
   * 0
   */
  failedCount?: number;
  /**
   * @remarks
   * The queried performance metrics.
   */
  performances?: DescribePatternPerformanceResponseBodyPerformances[];
  /**
   * @remarks
   * The number of queries executed in association with the SQL pattern within the time range.
   * 
   * @example
   * 35018
   */
  queryCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 210f47011634026610213529******
   */
  requestId?: string;
  /**
   * @remarks
   * The SQL statement that represents the SQL pattern.
   * 
   * @example
   * SELECT *nFROM HIVE.`ADB_EXTERNAL_TPCH_10GB`.`External_customer`nLIMIT ?
   */
  SQLPattern?: string;
  /**
   * @remarks
   * The start time of the query. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-18T00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The tables that are in association with the SQL pattern.
   * 
   * @example
   * tpch_1g.part;tpch_1g.supplier;tpch_1g.lineitem;tpch_1g.partsupp;tpch_1g.orders;tpch_1g.nation
   */
  tables?: string;
  /**
   * @remarks
   * The database account that is used to execute the SQL statement.
   * 
   * @example
   * test
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      accessIp: 'AccessIp',
      endTime: 'EndTime',
      failedCount: 'FailedCount',
      performances: 'Performances',
      queryCount: 'QueryCount',
      requestId: 'RequestId',
      SQLPattern: 'SQLPattern',
      startTime: 'StartTime',
      tables: 'Tables',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessIp: 'string',
      endTime: 'string',
      failedCount: 'number',
      performances: { 'type': 'array', 'itemType': DescribePatternPerformanceResponseBodyPerformances },
      queryCount: 'number',
      requestId: 'string',
      SQLPattern: 'string',
      startTime: 'string',
      tables: 'string',
      user: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.performances)) {
      $dara.Model.validateArray(this.performances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

