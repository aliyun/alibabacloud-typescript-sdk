// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeColumnsV2Request extends $dara.Model {
  /**
   * @remarks
   * The page number in a paged query. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The engine type. Valid values:
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
   * > Queries column data in data asset tables that are connected to and authorized by Data Security Center based on the asset instance ID. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/141708.html) operation to obtain the instance ID.
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
   * The language of the request and response. Default value: **zh_cn**.
   * 
   * Valid values:
   * 
   * - **zh_cn**: Chinese (Simplified).
   * - **en_us**: English (US).
   * 
   * @example
   * zh_cn
   */
  lang?: string;
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
   * The maximum number of entries per page in a paged query. Default value: **10**.
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
   * > Queries column data in data asset tables that are connected to and authorized by Data Security Center based on the ID of the sensitive data detection rule that the column data matches. You can call the [DescribeRules](https://help.aliyun.com/document_detail/141389.html) operation to obtain the rule ID.
   * 
   * @example
   * 11122200
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
   * - **N/A**: no sensitive data detected.
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
   * The unique ID of the data asset table to which the columns belong in MaxCompute, ApsaraDB RDS, or other data assets.
   * 
   * > Queries column data in data asset tables that are connected to and authorized by Data Security Center based on the table ID. You can call the [DescribeTables](https://help.aliyun.com/document_detail/141709.html) operation to obtain the table ID.
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

