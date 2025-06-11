// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTopSQLListRequest extends $dara.Model {
  /**
   * @remarks
   * The number of block index cache hits.
   * 
   * @example
   * testdb
   */
  dbName?: string;
  /**
   * @remarks
   * The SQL type.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-09-13T15:40:43Z
   */
  endTime?: string;
  /**
   * @remarks
   * The average number of logical reads of the SQL statement during the specified period of time.   
   * The value covers the numbers of reads of different caches and the number of disk I/Os. It is an important metric for measuring the SQL filtering performance.   
   * 
   * > <br> A higher ratio of the number of logical reads to the number of returned rows indicates poorer filtering performance. General causes include non-standard content written by SQL statements, non-standard table indexes created, and non-standard SQL execution plans.
   * 
   * @example
   * [dbName:sys]
   */
  filterCondition?: { [key: string]: any };
  /**
   * @remarks
   * The number of failures.
   * 
   * @example
   * i-bp19y05uq6xpacyqnlrc
   */
  nodeIp?: string;
  /**
   * @remarks
   * The queuing time, in ms.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of row cache hits.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The I/O wait time, in ms.
   * 
   * @example
   * 8D6E84****0B8FB1823D199E2CA1****
   */
  SQLId?: string;
  /**
   * @remarks
   * The number of retries.
   * 
   * @example
   * update
   */
  searchKeyWord?: string;
  /**
   * @remarks
   * SQLID.
   * 
   * @example
   * cputime
   */
  searchParameter?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * >
   */
  searchRule?: string;
  /**
   * @remarks
   * The number of Bloom filter cache hits.
   * 
   * @example
   * 0.01
   */
  searchValue?: string;
  /**
   * @remarks
   * The number of rows read from the disk.
   * 
   * @example
   * cputime
   */
  sortColumn?: string;
  /**
   * @remarks
   * The list of top SQL statements.
   * 
   * @example
   * desc
   */
  sortOrder?: string;
  /**
   * @remarks
   * The maximum response time, in ms.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-06-13T15:40:43Z
   */
  startTime?: string;
  /**
   * @remarks
   * The average CPU time, in ms.
   * 
   * This parameter is required.
   * 
   * @example
   * t2mr3oae0****
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      endTime: 'EndTime',
      filterCondition: 'FilterCondition',
      nodeIp: 'NodeIp',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      SQLId: 'SQLId',
      searchKeyWord: 'SearchKeyWord',
      searchParameter: 'SearchParameter',
      searchRule: 'SearchRule',
      searchValue: 'SearchValue',
      sortColumn: 'SortColumn',
      sortOrder: 'SortOrder',
      startTime: 'StartTime',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      endTime: 'string',
      filterCondition: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      nodeIp: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      SQLId: 'string',
      searchKeyWord: 'string',
      searchParameter: 'string',
      searchRule: 'string',
      searchValue: 'string',
      sortColumn: 'string',
      sortOrder: 'string',
      startTime: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    if(this.filterCondition) {
      $dara.Model.validateMap(this.filterCondition);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

