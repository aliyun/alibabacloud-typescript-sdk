// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeColumnsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number for paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Engine type. Valid values:
   * 
   * - **MySQL**.
   * 
   * - **MariaDB**.
   * 
   * - **Oracle**.
   * 
   * - **PostgreSQL**.
   * 
   * - **SQLServer**.
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * The ID of the asset instance to which the column data in the data asset table belongs.
   * 
   * > Query column data in data asset tables authorized to connect to Data Security Center using the ID of the asset instance to which the column data in the data asset table belongs. Obtain the asset instance ID by calling the [DescribeInstances](~~DescribeRules~~) API.
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
   * The language type for requests and responses. The default value is **zh_cn**. Valid values:
   * 
   * - **zh_cn**: Chinese.
   * 
   * - **en_us**: English.
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * Data tag.
   * 
   * - 101: Personal sensitive information
   * 
   * - 102: Personal information
   * 
   * @example
   * 101
   */
  modelTagId?: string;
  /**
   * @remarks
   * The keyword for search. Supports fuzzy match.
   * 
   * For example, entering **test** returns all data containing **test**.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The maximum number of data entries displayed per page in the list.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The product name to which the column data in the data asset table belongs. Valid values: **MaxCompute, OSS, ADS, OTS, RDS**, and others.
   * 
   * @example
   * MaxCompute
   */
  productCode?: string;
  /**
   * @remarks
   * The ID corresponding to the product name to which the data object belongs. Valid values:
   * 
   * - **1**: MaxCompute
   * 
   * - **2**: OSS
   * 
   * - **3**: ADB-MYSQL
   * 
   * - **4**: TableStore
   * 
   * - **5**: RDS
   * 
   * - **6**: SELF_DB
   * 
   * - **7**: PolarDB-X
   * 
   * - **8**: PolarDB
   * 
   * - **9**: ADB-PG
   * 
   * - **10**: OceanBase
   * 
   * - **11**: MongoDB
   * 
   * - **25**: Redis
   * 
   * @example
   * 5
   */
  productId?: string;
  /**
   * @remarks
   * The risk level ID of the sensitive data detection rule. Valid values:
   * 
   * - **1**: N/A.
   * 
   * - **2**: S1.
   * 
   * - **3**: S2.
   * 
   * - **4**: S3.
   * 
   * - **5**: S4.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The unique ID of the sensitive data detection rule hit by the column data in the asset table.
   * 
   * > Query column data in data asset tables authorized to connect to Data Security Center using the ID of the sensitive data detection rule hit by the column data in the asset table. Obtain the sensitive data detection rule ID by calling the [DescribeRules](~~DescribeRules~~) API.
   * 
   * @example
   * 11111
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the sensitive data detection rule hit by the column data in the data asset table.
   * 
   * @example
   * name
   */
  ruleName?: string;
  /**
   * @remarks
   * Sensitivity level name. Valid values:
   * 
   * - **N/A**: No sensitive data detected.
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
   * @example
   * cn-zhangjiakou
   */
  serviceRegionId?: string;
  /**
   * @remarks
   * The unique ID of the asset table that contains the columns in data asset tables such as MaxCompute and RDS.
   * 
   * > Query column data in data asset tables authorized to connect to Data Security Center using the asset table ID. Obtain the asset table ID by calling the [DescribeTables](~~DescribeTables~~) API.
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
   * Industry template ID.
   * 
   * > Obtain the industry template ID by calling [DescribeCategoryTemplateList](https://help.aliyun.com/document_detail/2399296.html).
   * 
   * @example
   * 5
   */
  templateId?: string;
  /**
   * @remarks
   * The ID of the hit template rule.
   * 
   * > Obtain the hit template rule ID by calling [DescribeCategoryTemplateRuleList](https://help.aliyun.com/document_detail/410143.html).
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

