// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOasAnomalySQLListRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * - zh: Chinese
   * - en: English
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The current page.
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * db_****
   */
  dbName?: string;
  /**
   * @remarks
   * Specifies whether the specified SQL statements are dynamic SQL statements.
   * > This parameter specifies whether the values of the `SqlId` parameter are the IDs of dynamic SQL statements.
   * 
   * @example
   * false
   */
  dynamicSql?: boolean;
  /**
   * @remarks
   * The end time of the monitoring data.   
   * The value must be UTC time in the format of YYYY-MM-DDThh:mm:ssZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-04-12T05:38:38Z
   */
  endTime?: string;
  /**
   * @remarks
   * All parameters are referenced by the symbol @. For a list of available parameters, refer to the returned parameters in [Query performance indicators of an SQL statement](https://en.oceanbase.com/docs/community-ocp-en-10000000000840290).
   * 
   * @example
   * @avgCpuTime > 20 and @executions > 100
   */
  filterCondition?: string;
  /**
   * @remarks
   * The ID of the OceanBase cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to merge dynamic SQL statements in the return result. 
   * 
   * > This parameter specifies whether to aggregate the results of IN queries.
   * 
   * @example
   * false
   */
  mergeDynamicSql?: boolean;
  /**
   * @remarks
   * The node IP.
   * 
   * @example
   * i-bp19y05uq6x*********
   */
  nodeIp?: string;
  /**
   * @remarks
   * Page size.
   * - Start value: 1
   * - Default value: 1
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
  searchParam?: string;
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
   * SQL ID.
   * 
   * @example
   * 8D6E84****0B8FB1823D199E2CA1****
   */
  sqlId?: string;
  /**
   * @remarks
   * Max length of the returned SQL text.
   * 
   * @example
   * 65535
   */
  sqlTextLength?: number;
  /**
   * @remarks
   * The start time of the monitoring data.   
   * The value must be UTC time in the format of YYYY-MM-DDThh:mm:ssZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-04-12T04:38:38Z
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * This parameter is required.
   * 
   * @example
   * t4louaeei****
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      current: 'Current',
      dbName: 'DbName',
      dynamicSql: 'DynamicSql',
      endTime: 'EndTime',
      filterCondition: 'FilterCondition',
      instanceId: 'InstanceId',
      mergeDynamicSql: 'MergeDynamicSql',
      nodeIp: 'NodeIp',
      pageSize: 'PageSize',
      searchKeyWord: 'SearchKeyWord',
      searchParam: 'SearchParam',
      searchRule: 'SearchRule',
      searchValue: 'SearchValue',
      sqlId: 'SqlId',
      sqlTextLength: 'SqlTextLength',
      startTime: 'StartTime',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      current: 'number',
      dbName: 'string',
      dynamicSql: 'boolean',
      endTime: 'string',
      filterCondition: 'string',
      instanceId: 'string',
      mergeDynamicSql: 'boolean',
      nodeIp: 'string',
      pageSize: 'number',
      searchKeyWord: 'string',
      searchParam: 'string',
      searchRule: 'string',
      searchValue: 'string',
      sqlId: 'string',
      sqlTextLength: 'number',
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

