// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAnomalySQLListShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the returned data.   
   * Default value: CN for a China site and EN for an International site.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
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
   * The end time of the time range for querying suspicious SQL statements.   
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
   * > <br> - All fields in OceanBase Database support filtering. <br> - You can write the key-value pair of a parameter in a JSON string in the JSON format to filter the parameter.
   * 
   * @example
   * {
   *   "UserName":testUser
   * }
   */
  filterConditionShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * obsd23j4f****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address of the node.
   * 
   * @example
   * i-bp19y05uq6xpacyqnlrc
   */
  nodeIp?: string;
  /**
   * @remarks
   * The number of the page to return.    
   * - Start value: 1   
   * - Default value: 1
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of rows to return on each page.    
   * - Maximum value: 100   
   * - Default value: 10
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * SQLID.
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
   * Valid values: "=", ">", ">=", "<", and "<="
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
   * The start time of the time range for querying suspicious SQL statements.   
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
      acceptLanguage: 'AcceptLanguage',
      dbName: 'DbName',
      endTime: 'EndTime',
      filterConditionShrink: 'FilterCondition',
      instanceId: 'InstanceId',
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
      acceptLanguage: 'string',
      dbName: 'string',
      endTime: 'string',
      filterConditionShrink: 'string',
      instanceId: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

