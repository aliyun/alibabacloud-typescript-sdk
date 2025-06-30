// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeOssObjectDetailResponseBodyOssObjectDetailRuleListModelTags } from "./DescribeOssObjectDetailResponseBodyOssObjectDetailRuleListModelTags";


export class DescribeOssObjectDetailResponseBodyOssObjectDetailRuleList extends $dara.Model {
  /**
   * @remarks
   * The type of the OSS object.
   * 
   * @example
   * Excel file
   */
  categoryName?: string;
  /**
   * @remarks
   * The number of times that the OSS object hits the sensitive data detection rule.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * A list of tags for data that hits the recognition model.
   */
  modelTags?: DescribeOssObjectDetailResponseBodyOssObjectDetailRuleListModelTags[];
  /**
   * @remarks
   * The ID of the sensitivity level of the OSS object.
   * 
   * *   **1**: No sensitive data is detected.
   * *   **2**: indicates the low sensitivity level.
   * *   **3**: indicates the medium sensitivity level.
   * *   **4**: indicates the high sensitivity level.
   * *   **5**: indicates the highest sensitivity level.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The name of the sensitivity level for the OSS object.
   * 
   * @example
   * Medium sensitivity level
   */
  riskLevelName?: string;
  /**
   * @remarks
   * The name of the sensitive data detection rule.
   * 
   * @example
   * \\*\\*\\* rule
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      categoryName: 'CategoryName',
      count: 'Count',
      modelTags: 'ModelTags',
      riskLevelId: 'RiskLevelId',
      riskLevelName: 'RiskLevelName',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryName: 'string',
      count: 'number',
      modelTags: { 'type': 'array', 'itemType': DescribeOssObjectDetailResponseBodyOssObjectDetailRuleListModelTags },
      riskLevelId: 'number',
      riskLevelName: 'string',
      ruleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.modelTags)) {
      $dara.Model.validateArray(this.modelTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

