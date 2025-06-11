// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOasTopSQLListRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh: Chinese
   * - en: English
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  customColumns?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test_db
   */
  dbName?: string;
  dynamicSql?: boolean;
  /**
   * @remarks
   * The end time of querying the TOPSQL parameter.
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
  mergeDynamicSql?: boolean;
  /**
   * @remarks
   * The node IP.
   * 
   * @example
   * i-bp18l4****str4uk03
   */
  nodeIp?: string;
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
   * > When the SQL ID is provided, the system collects all the request data for the target SQL ID. When the SQL ID is empty, the system collects all the request data for the entire database instance.
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
   * The start time of querying the TOPSQL parameter.   
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
      customColumns: 'CustomColumns',
      dbName: 'DbName',
      dynamicSql: 'DynamicSql',
      endTime: 'EndTime',
      filterCondition: 'FilterCondition',
      instanceId: 'InstanceId',
      mergeDynamicSql: 'MergeDynamicSql',
      nodeIp: 'NodeIp',
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
      customColumns: 'string',
      dbName: 'string',
      dynamicSql: 'boolean',
      endTime: 'string',
      filterCondition: 'string',
      instanceId: 'string',
      mergeDynamicSql: 'boolean',
      nodeIp: 'string',
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

