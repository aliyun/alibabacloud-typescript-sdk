// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAbnormalPatternDetectionResponseBodyDetectionItemsResults extends $dara.Model {
  /**
   * @remarks
   * The IP address of the SQL client that submits the SQL pattern.
   * 
   * @example
   * 11.81.238.102
   */
  accessIp?: string;
  /**
   * @remarks
   * The details about the detection report of the SQL pattern.
   * 
   * @example
   * {}
   */
  detail?: string;
  /**
   * @remarks
   * The number of failed SQL patterns within the time range.
   * 
   * @example
   * 63
   */
  failedCount?: number;
  /**
   * @remarks
   * The SQL pattern ID.
   * 
   * @example
   * 5495577090378760322
   */
  patternId?: string;
  /**
   * @remarks
   * The number of executed SQL patterns within the time range.
   * 
   * @example
   * 72
   */
  queryCount?: number;
  /**
   * @remarks
   * The metrics related to the SQL pattern.
   * 
   * @example
   * Maximum query duration: 1.43s
   * Maximum peak memory: 20.73 MB
   * Maximum read table data: 10.12 MB
   */
  relatedMetrics?: string;
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
   * The names of tables.
   * 
   * @example
   * ad_marketing_engine.prod_dws_oe_promotion_daily_trend_report
   */
  tables?: string;
  /**
   * @remarks
   * The name of the database account that is used to submit the query.
   * 
   * @example
   * test
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      accessIp: 'AccessIp',
      detail: 'Detail',
      failedCount: 'FailedCount',
      patternId: 'PatternId',
      queryCount: 'QueryCount',
      relatedMetrics: 'RelatedMetrics',
      SQLPattern: 'SQLPattern',
      tables: 'Tables',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessIp: 'string',
      detail: 'string',
      failedCount: 'number',
      patternId: 'string',
      queryCount: 'number',
      relatedMetrics: 'string',
      SQLPattern: 'string',
      tables: 'string',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

