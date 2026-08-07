// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeColumnsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number for a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The database engine type. Valid values:
   * - **MySQL**
   * - **MariaDB**
   * - **Oracle**
   * - **PostgreSQL**
   * - **SQLServer**
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * The ID of the asset instance to which the column data in the data asset table belongs.
   * 
   * > Queries column data in data asset tables authorized for connection by Data Security Center based on the asset instance ID. You can call the [DescribeInstances](~~DescribeRules~~) operation to obtain the instance ID.
   * 
   * @example
   * 1
   */
  instanceId?: number;
  /**
   * @remarks
   * The name of the asset instance to which the column data in the data asset table belongs.
   * 
   * @example
   * rm-bp17t1htja573l5i8****
   */
  instanceName?: string;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh_cn**. Valid values:
   * - **zh_cn**: Chinese.
   * - **en_us**: English.
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The data tag.
   * 
   * - 101: personal sensitive information
   * 
   * - 102: personal information
   * 
   * @example
   * 101
   */
  modelTagId?: string;
  /**
   * @remarks
   * The keyword to search for. Fuzzy match is supported.
   * 
   * For example, if you enter **test**, all data entries that contain **test** in the search fields are returned.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the product to which the column data in the data asset table belongs. Valid values: **MaxCompute, OSS, ADS, OTS, RDS**, and others.
   * 
   * @example
   * MaxCompute
   */
  productCode?: string;
  /**
   * @remarks
   * The ID that corresponds to the product name to which the data object belongs. Valid values:
   * - **1**: MaxCompute
   * - **2**: OSS
   * - **3**: ADB-MYSQL
   * - **4**: TableStore
   * - **5**: RDS
   * - **6**: SELF_DB
   * - **7**: PolarDB-X
   * - **8**: PolarDB
   * - **9**: ADB-PG
   * - **10**: OceanBase
   * - **11**: MongoDB
   * - **25**: Redis
   * 
   * @example
   * 5
   */
  productId?: string;
  /**
   * @remarks
   * The risk level ID of the sensitive data detection rule. Valid values:
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
   * The unique ID of the sensitive data detection rule that the column data matches.
   * 
   * > Queries column data in data asset tables authorized for connection by Data Security Center based on the ID of the sensitive data detection rule that the column data matches. You can call the [DescribeRules](~~DescribeRules~~) operation to obtain the rule ID.
   * 
   * @example
   * 11111
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the sensitive data detection rule that the column data in the data asset table matches.
   * 
   * @example
   * name
   */
  ruleName?: string;
  /**
   * @remarks
   * The sensitivity level name. Valid values:
   * - **N/A**: No sensitive data is detected.
   * - **S1**: Level-1 sensitive data.
   * - **S2**: Level-2 sensitive data.
   * - **S3**: Level-3 sensitive data.
   * - **S4**: Level-4 sensitive data.
   * 
   * @example
   * S2
   */
  sensLevelName?: string;
  /**
   * @example
   * cn-zhangjiakou
   */
  serviceRegionId?: string;
  /**
   * @remarks
   * The unique ID of the data asset table to which the columns belong in MaxCompute, ApsaraDB RDS, or other assets.
   * 
   * > Queries column data in data asset tables authorized for connection by Data Security Center based on the table ID. You can call the [DescribeTables](~~DescribeTables~~) operation to obtain the table ID.
   * 
   * @example
   * 11132334
   */
  tableId?: number;
  /**
   * @remarks
   * The name of the data asset table.
   * 
   * @example
   * it_table
   */
  tableName?: string;
  /**
   * @remarks
   * The industry template ID.
   * > You can call the [DescribeCategoryTemplateList](https://help.aliyun.com/document_detail/2399296.html) operation to obtain the industry template ID.
   * 
   * @example
   * 5
   */
  templateId?: string;
  /**
   * @remarks
   * The ID of the matched template rule.
   * > You can call the [DescribeCategoryTemplateRuleList](https://help.aliyun.com/document_detail/410143.html) operation to obtain the matched template rule ID.
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
      serviceRegionId: 'ServiceRegionId',
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
      serviceRegionId: 'string',
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

