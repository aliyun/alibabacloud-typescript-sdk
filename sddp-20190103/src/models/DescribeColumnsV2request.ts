// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeColumnsV2Request extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The type of the database engine. Valid values:
   * 
   * - **MySQL**
   * 
   * - **MariaDB**
   * 
   * - **Oracle**
   * 
   * - **PostgreSQL**
   * 
   * - **SQLServer**
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * The ID of the data asset instance to which the data in the column belongs.
   * 
   * > Query data in columns of a data asset table based on the ID of the data asset instance. The data asset table must be authorized in Data Security Center. To obtain the ID of the data asset instance, call the [DescribeInstances](https://help.aliyun.com/document_detail/141708.html) operation.
   * 
   * @example
   * 1
   */
  instanceId?: number;
  /**
   * @remarks
   * The name of the data asset instance to which the data in the column belongs.
   * 
   * @example
   * rm-bp17t1htja573l5i8****
   */
  instanceName?: string;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh_cn**.
   * Valid values:
   * 
   * - **zh_cn**: Simplified Chinese
   * 
   * - **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The keyword for the search. Fuzzy match is supported.
   * 
   * For example, if you enter **test**, all data that contains **test** is returned.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the product to which the data in the column of the data asset table belongs. Valid values include **MaxCompute, OSS, ADS, OTS, and RDS**.
   * 
   * @example
   * MaxCompute
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the risk level for the sensitive data detection rule. Valid values:
   * 
   * - **1**: N/A
   * 
   * - **2**: S1
   * 
   * - **3**: S2
   * 
   * - **4**: S3
   * 
   * - **5**: S4
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The unique ID of the sensitive data detection rule that is hit by the data in the column.
   * 
   * > Query data in columns of a data asset table based on the ID of the sensitive data detection rule that is hit. The data asset table must be authorized in Data Security Center. To obtain the ID of the sensitive data detection rule, call the [DescribeRules](https://help.aliyun.com/document_detail/141389.html) operation.
   * 
   * @example
   * 11122200
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the sensitive data detection rule that is hit by the data in the column.
   * 
   * @example
   * name
   */
  ruleName?: string;
  /**
   * @remarks
   * The name of the sensitivity level. Valid values:
   * 
   * - **N/A**: No sensitive data is detected.
   * 
   * - **S1**: Level 1 sensitive data.
   * 
   * - **S2**: Level 2 sensitive data.
   * 
   * - **S3**: Level 3 sensitive data.
   * 
   * - **S4**: Level 4 sensitive data.
   * 
   * @example
   * S2
   */
  sensLevelName?: string;
  /**
   * @remarks
   * The unique ID of the data asset table that contains the column. The table can be in a data asset such as MaxCompute or RDS.
   * 
   * > Query data in columns of a data asset table by the table ID. The data asset table must be authorized in Data Security Center. To obtain the ID of the data asset table, call the [DescribeTables](https://help.aliyun.com/document_detail/141709.html) operation.
   * 
   * @example
   * 11132334
   */
  tableId?: string;
  /**
   * @remarks
   * The name of the data asset table.
   * 
   * @example
   * it_table
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      engineType: 'EngineType',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      lang: 'Lang',
      name: 'Name',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      riskLevelId: 'RiskLevelId',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      sensLevelName: 'SensLevelName',
      tableId: 'TableId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      engineType: 'string',
      instanceId: 'number',
      instanceName: 'string',
      lang: 'string',
      name: 'string',
      pageSize: 'number',
      productCode: 'string',
      riskLevelId: 'number',
      ruleId: 'number',
      ruleName: 'string',
      sensLevelName: 'string',
      tableId: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

