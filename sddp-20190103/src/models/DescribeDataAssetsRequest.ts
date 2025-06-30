// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataAssetsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh_cn**. Valid values:
   * 
   * *   **zh_cn**: Simplified Chinese
   * *   **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The keyword that is used to search for data assets. Fuzzy search is supported.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the data asset that you want to query. Valid values:
   * 
   * *   **1**: MaxCompute project
   * *   **2**: MaxCompute table
   * *   **3**: MaxCompute package
   * *   **11**: AnalyticDB for MySQL database
   * *   **12**: AnalyticDB for MySQL table
   * *   **21**: Object Storage Service (OSS) bucket
   * *   **22**: OSS object
   * *   **31**: Tablestore instance
   * *   **32**: Tablestore table
   * *   **51**: ApsaraDB RDS database
   * *   **52**: ApsaraDB RDS table
   * *   **61**: self-managed database hosted on an Elastic Compute Service (ECS) instance
   * *   **62**: self-managed table hosted on an ECS instance
   * *   **71**: PolarDB-X database
   * *   **72**: PolarDB-X table
   * *   **81**: PolarDB database
   * *   **82**: PolarDB table
   * *   **91**: AnalyticDB for PostgreSQL database
   * *   **92**: AnalyticDB for PostgreSQL table
   * 
   * @example
   * 1
   */
  rangeId?: number;
  /**
   * @remarks
   * The sensitivity level of the data asset. Separate multiple sensitivity levels with commas (,). Valid values:
   * 
   * *   **2**: S1, indicating the low sensitivity level
   * *   **3**: S2, indicating the medium sensitivity level
   * *   **4**: S3, indicating the high sensitivity level
   * *   **5**: S4, indicating the highest sensitivity level
   * 
   * @example
   * 2
   */
  riskLevels?: string;
  /**
   * @remarks
   * The unique ID of the sensitive data detection rule that the data assets to be queried hit.
   * 
   * > If you query sensitive data detection results based on the sensitive data detection rule that the data assets hit, you can call the [DescribeRules](~~DescribeRules~~) operation to query the ID of the sensitive data detection rule.
   * 
   * @example
   * 11122200
   */
  ruleId?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      lang: 'Lang',
      name: 'Name',
      pageSize: 'PageSize',
      rangeId: 'RangeId',
      riskLevels: 'RiskLevels',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      lang: 'string',
      name: 'string',
      pageSize: 'number',
      rangeId: 'number',
      riskLevels: 'string',
      ruleId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

