// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataAssetsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The language of the request and response. The default value is **zh_cn**. Valid values:
   * 
   * - **zh_cn**: Chinese (Simplified)
   * 
   * - **en_us**: English (US)
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  /**
   * @remarks
   * The keyword for a fuzzy search of data assets.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The number of entries to return on each page. The default value is **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of data asset to query. Valid values:
   * 
   * - **1**: MaxCompute project
   * 
   * - **2**: MaxCompute table
   * 
   * - **3**: MaxCompute package
   * 
   * - **11**: AnalyticDB for MySQL database
   * 
   * - **12**: AnalyticDB for MySQL table
   * 
   * - **21**: OSS bucket
   * 
   * - **22**: OSS object
   * 
   * - **31**: Tablestore instance
   * 
   * - **32**: Tablestore table
   * 
   * - **51**: RDS database
   * 
   * - **52**: RDS table
   * 
   * - **61**: Self-managed database on an ECS instance
   * 
   * - **62**: Self-managed table on an ECS instance
   * 
   * - **71**: DRDS database
   * 
   * - **72**: DRDS table
   * 
   * - **81**: PolarDB database
   * 
   * - **82**: PolarDB table
   * 
   * - **91**: GPDB database
   * 
   * - **92**: GPDB table
   * 
   * @example
   * 1
   */
  rangeId?: number;
  /**
   * @remarks
   * The risk levels of the data assets to query. Separate multiple risk levels with commas (,).
   * 
   * - **2**: S1, low risk level
   * 
   * - **3**: S2, medium risk level
   * 
   * - **4**: S3, high risk level
   * 
   * - **5**: S4, highest risk level
   * 
   * @example
   * 2
   */
  riskLevels?: string;
  /**
   * @remarks
   * The ID of the sensitive data detection rule that the data asset matches.
   * 
   * > To find data assets based on the sensitive data detection rules they match, call the [DescribeRules](~~DescribeRules~~) operation to get the rule IDs.
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

