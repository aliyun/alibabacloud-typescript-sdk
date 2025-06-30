// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeOssObjectDetailV2ResponseBodyOssObjectDetailRuleListModelTags } from "./DescribeOssObjectDetailV2responseBodyOssObjectDetailRuleListModelTags";


export class DescribeOssObjectDetailV2ResponseBodyOssObjectDetailRuleList extends $dara.Model {
  /**
   * @remarks
   * The major category of the model.
   * 
   * @example
   * Excel
   */
  categoryName?: string;
  /**
   * @remarks
   * The number of times the sensitive data recognition rule was hit.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * List of data tags.
   */
  modelTags?: DescribeOssObjectDetailV2ResponseBodyOssObjectDetailRuleListModelTags[];
  /**
   * @remarks
   * The risk level ID of the OSS storage object.
   * - **1**: No sensitive data detected.
   * - **2**: Level 1 sensitive data.
   * - **3**: Level 2 sensitive data.
   * - **4**: Level 3 sensitive data.
   * - **5**: Level 4 sensitive data.
   * 
   * @example
   * 3
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The risk level name of the OSS storage object.
   * 
   * @example
   * S2
   */
  riskLevelName?: string;
  /**
   * @remarks
   * The name of the sensitive data recognition rule that was hit.
   * 
   * @example
   * name
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
      modelTags: { 'type': 'array', 'itemType': DescribeOssObjectDetailV2ResponseBodyOssObjectDetailRuleListModelTags },
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

