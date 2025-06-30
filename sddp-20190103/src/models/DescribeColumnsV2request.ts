// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeColumnsV2Request extends $dara.Model {
  /**
   * @remarks
   * When performing a paginated query, sets the current page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Engine type. Values:
   * - **MySQL**.
   * - **MariaDB**.
   * - **Oracle**.
   * - **PostgreSQL**.
   * - **SQLServer**.
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * ID of the asset instance to which the column data in the data asset table belongs.
   * 
   * > Query the data in the columns of the data assets authorized by the Data Security Center based on the ID of the asset instance to which the column data in the data asset table belongs. The asset instance ID can be obtained by calling the [DescribeInstances](https://help.aliyun.com/document_detail/141708.html) interface.
   * 
   * @example
   * 1
   */
  instanceId?: number;
  /**
   * @remarks
   * Name of the asset instance to which the column data in the data asset table belongs.
   * 
   * @example
   * rm-bp17t1htja573l5i8****
   */
  instanceName?: string;
  /**
   * @remarks
   * Sets the language type for requests and received messages, default is **zh_cn**.
   * Values:
   * 
   * - **zh_cn**: Simplified Chinese
   * - **en_us**: English (United States)
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * Search keyword, supports fuzzy matching.
   * 
   * For example, entering **test** will search for all data information containing **test** in the search items.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * When performing a paginated query, sets the maximum number of data asset instances displayed per page. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Product name to which the column data in the data asset table belongs. Values: **MaxCompute, OSS, ADS, OTS, RDS**, etc.
   * 
   * @example
   * MaxCompute
   */
  productCode?: string;
  /**
   * @remarks
   * Risk level ID of the sensitive data recognition rule. Values:
   * - **1**: N/A.
   * - **2**: S1.
   * - **3**: S2.
   * - **4**: S3.
   * - **5**: S4.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * Unique identifier ID of the sensitive data recognition rule hit by the column data in the asset table.
   * 
   * > Query the data in the columns of the data assets authorized by the Data Security Center based on the ID of the sensitive data recognition rule hit by the column data in the asset table. The sensitive data recognition rule ID can be obtained by calling the [DescribeRules](https://help.aliyun.com/document_detail/141389.html) interface.
   * 
   * @example
   * 11122200
   */
  ruleId?: number;
  /**
   * @remarks
   * Name of the sensitive data recognition rule hit by the column data in the data asset table.
   * 
   * @example
   * name
   */
  ruleName?: string;
  /**
   * @remarks
   * Sensitive level name. Values:
   * - **N/A**: No sensitive data detected.
   * - **S1**: Level 1 sensitive data.
   * - **S2**: Level 2 sensitive data.
   * - **S3**: Level 3 sensitive data.
   * - **S4**: Level 4 sensitive data.
   * 
   * @example
   * S2
   */
  sensLevelName?: string;
  /**
   * @remarks
   * Unique identifier ID of the asset table to which the column in MaxCompute, RDS, etc., belongs.
   * 
   * > Query the data in the columns of the data assets authorized by the Data Security Center based on the ID of the asset table. The asset table ID can be obtained by calling the [DescribeTables](https://help.aliyun.com/document_detail/141709.html) interface.
   * 
   * @example
   * 11132334
   */
  tableId?: string;
  /**
   * @remarks
   * Name of the data asset table.
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

