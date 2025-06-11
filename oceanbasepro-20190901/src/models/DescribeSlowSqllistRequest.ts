// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSlowSQLListRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * testdb
   */
  dbName?: string;
  /**
   * @remarks
   * The end time of the time range for querying slow SQL statements.   
   * The value must be UTC time in the format of YYYY-MM-DDThh:mm:ssZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-09-13T15:40:43Z
   */
  endTime?: string;
  /**
   * @remarks
   * The filter condition.
   * 
   * @example
   * [dbName:sys]
   */
  filterCondition?: { [key: string]: any };
  /**
   * @remarks
   * The IP address of the database node.
   * 
   * @example
   * i-bp18qljorblo8es*****
   */
  nodeIp?: string;
  /**
   * @remarks
   * The number of rows to return on each page.  
   * - Maximum value: 100  
   * - Default value: 10
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of the page to return.    
   * - Start value: 1   
   * - Default value: 1
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The SQL ID, which uniquely identifies an SQL statement.
   * 
   * @example
   * 8D6E84****0B8FB1823D199E2CA1****
   */
  SQLId?: string;
  /**
   * @remarks
   * The search keyword.
   * 
   * @example
   * update
   */
  searchKeyWord?: string;
  /**
   * @remarks
   * The search parameter.
   * 
   * @example
   * cputime
   */
  searchParameter?: string;
  /**
   * @remarks
   * The search rule.
   * 
   * @example
   * >
   */
  searchRule?: string;
  /**
   * @remarks
   * The search value.
   * 
   * @example
   * 0.01
   */
  searchValue?: string;
  /**
   * @remarks
   * The sorted column.
   * 
   * @example
   * cputime
   */
  sortColumn?: string;
  /**
   * @remarks
   * The sorting rule.
   * 
   * @example
   * desc
   */
  sortOrder?: string;
  /**
   * @remarks
   * The start time of the time range for querying slow SQL statements.   
   * The value must be UTC time in the format of YYYY-MM-DDThh:mm:ssZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021-06-13T15:40:43Z
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the tenant.
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

