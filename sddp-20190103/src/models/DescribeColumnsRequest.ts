// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeColumnsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The engine type. Valid values:
   * 
   * *   **MySQL**
   * *   **MariaDB**
   * *   **Oracle**
   * *   **PostgreSQL**
   * *   **SQLServer**
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * The ID of the instance to which data in the column of the table belongs.
   * 
   * > You can call the [DescribeInstances](~~DescribeRules~~) operation to query the IDs of instances.
   * 
   * @example
   * 1
   */
  instanceId?: number;
  /**
   * @remarks
   * The name of the instance to which data in the column of the table belongs.
   * 
   * @example
   * rm-bp17t1htja573l5i8****
   */
  instanceName?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh_cn**. Valid values:
   * 
   * *   **zh_cn**: Chinese
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The data tag.
   * 
   * *   101: personal sensitive information
   * *   102: personal information
   * 
   * @example
   * 101
   */
  modelTagId?: string;
  /**
   * @remarks
   * The search keyword. Fuzzy match is supported.
   * 
   * For example, if you enter **test**, all columns whose names contain **test** are retrieved.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the service to which data in the column of the table belongs. Valid values include **MaxCompute, OSS, ADS, OTS, and RDS**.
   * 
   * @example
   * MaxCompute
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the service to which the data object belongs. Valid values:
   * 
   * *   **1**: MaxCompute
   * *   **2**: Object Storage Service (OSS)
   * *   **3**: AnalyticDB for MySQL
   * *   **4**: Tablestore (OTS)
   * *   **5**: ApsaraDB RDS
   * *   **6**: self-managed database
   * *   **7**: PolarDB for Xscale (PolarDB-X)
   * *   **8**: PolarDB
   * *   **9**: AnalyticDB for PostgreSQL
   * *   **10**: ApsaraDB for OceanBase
   * *   **11**: ApsaraDB for MongoDB
   * *   **25**: ApsaraDB for Redis
   * 
   * @example
   * 5
   */
  productId?: string;
  /**
   * @remarks
   * The sensitivity level of the sensitive data that hits the sensitive data detection rule. Valid values:
   * 
   * *   **1**: N/A
   * *   **2**: S1
   * *   **3**: S2
   * *   **4**: S3
   * *   **5**: S4
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The ID of the sensitive data detection rule that data in the column of the table hits.
   * 
   * > You can call the [DescribeRules](~~DescribeRules~~) operation to query the IDs of sensitive data detection rules.
   * 
   * @example
   * 11111
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the sensitive data detection rule that data in the column of the table hits.
   * 
   * @example
   * ID card number (the Chinese mainland)
   */
  ruleName?: string;
  /**
   * @remarks
   * The name of the sensitivity level of the data that hits the sensitive data detection rule. Valid values:
   * 
   * *   **N/A**: No sensitive data is detected.
   * *   **S1**: indicates the low sensitivity level.
   * *   **S2**: indicates the medium sensitivity level.
   * *   **S3**: indicates the high sensitivity level.
   * *   **S4**: indicates the highest sensitivity level.
   * 
   * @example
   * S2
   */
  sensLevelName?: string;
  /**
   * @remarks
   * The ID of the table to which the column belongs.
   * 
   * > You can call the [DescribeTables](~~DescribeTables~~) operation to query the IDs of tables.
   * 
   * @example
   * 11132334
   */
  tableId?: number;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * it_table
   */
  tableName?: string;
  /**
   * @remarks
   * The ID of the industry-specific classification template.
   * 
   * >  You can call the [DescribeCategoryTemplateList](https://help.aliyun.com/document_detail/2399296.html) operation to obtain the IDs of industry-specific classification templates.
   * 
   * @example
   * 5
   */
  templateId?: string;
  /**
   * @remarks
   * The ID of the template rule that is hit.
   * 
   * >  You can call the [DescribeCategoryTemplateRuleList](https://help.aliyun.com/document_detail/410143.html) operation to obtain the IDs of hit template rules.
   * 
   * @example
   * 1542
   */
  templateRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      engineType: 'EngineType',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      lang: 'Lang',
      modelTagId: 'ModelTagId',
      name: 'Name',
      pageSize: 'PageSize',
      productCode: 'ProductCode',
      productId: 'ProductId',
      riskLevelId: 'RiskLevelId',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      sensLevelName: 'SensLevelName',
      tableId: 'TableId',
      tableName: 'TableName',
      templateId: 'TemplateId',
      templateRuleId: 'TemplateRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      engineType: 'string',
      instanceId: 'number',
      instanceName: 'string',
      lang: 'string',
      modelTagId: 'string',
      name: 'string',
      pageSize: 'number',
      productCode: 'string',
      productId: 'string',
      riskLevelId: 'number',
      ruleId: 'number',
      ruleName: 'string',
      sensLevelName: 'string',
      tableId: 'number',
      tableName: 'string',
      templateId: 'string',
      templateRuleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

