// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQueryOptimizeExecErrorStatsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to sort the returned entries in ascending order. Default value: **true**. Valid values:
   * 
   * *   **true**: sorts the returned entries in ascending order.
   * *   **false**: does not sort the returned entries in ascending order.
   * 
   * @example
   * true
   */
  asc?: string;
  /**
   * @remarks
   * The name of the database to be queried.
   * 
   * @example
   * testdb01
   */
  dbNames?: string;
  /**
   * @remarks
   * The database engine. Valid values:
   * 
   * *   **MySQL**
   * *   **PolarDBMySQL**
   * *   **PostgreSQL**
   * 
   * This parameter is required.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The instance IDs. Separate multiple IDs with commas (,).
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceIds?: string;
  /**
   * @remarks
   * The keywords of the SQL template. Separate multiple keywords with spaces.
   * 
   * @example
   * select update
   */
  keywords?: string;
  /**
   * @remarks
   * The logical relationship between multiple keywords. Valid values:
   * 
   * *   **or**
   * *   **and**
   * 
   * @example
   * or
   */
  logicalOperator?: string;
  /**
   * @remarks
   * The field by which to sort the returned entries. Only error_count is supported, which specifies that the entries are sorted based on the number of failed executions.
   * 
   * @example
   * error_count
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The region in which the instance resides. Valid values:
   * 
   * *   **cn-china**: Chinese mainland
   * *   **cn-hongkong**: China (Hong Kong)
   * *   **ap-southeast-1**: Singapore
   * 
   * This parameter takes effect only if **InstanceIds** is left empty. If you leave **InstanceIds** empty, the system obtains data from the region set by **Region**. By default, Region is set to **cn-china**. If you specify **InstanceIds**, **Region** does not take effect and the system obtains data from the region in which the first specified instance resides.****
   * 
   * >  Set this parameter to **cn-china** for the instances that are created in the regions in the Chinese mainland.
   * 
   * @example
   * cn-china
   */
  region?: string;
  /**
   * @remarks
   * The time range to query. Specify the time in the UNIX timestamp format. Unit: milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1642953600000
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      asc: 'Asc',
      dbNames: 'DbNames',
      engine: 'Engine',
      instanceIds: 'InstanceIds',
      keywords: 'Keywords',
      logicalOperator: 'LogicalOperator',
      orderBy: 'OrderBy',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      region: 'Region',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asc: 'string',
      dbNames: 'string',
      engine: 'string',
      instanceIds: 'string',
      keywords: 'string',
      logicalOperator: 'string',
      orderBy: 'string',
      pageNo: 'string',
      pageSize: 'string',
      region: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

