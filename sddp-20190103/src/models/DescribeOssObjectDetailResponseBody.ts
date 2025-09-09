// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOssObjectDetailResponseBodyOssObjectDetailRuleListModelTags extends $dara.Model {
  /**
   * @remarks
   * The tag ID.
   * 
   * *   **101**: sensitive personal information
   * *   **102**: personal information
   * *   **103**: important information
   * 
   * @example
   * 101
   */
  id?: number;
  /**
   * @remarks
   * The tag name.
   * 
   * *   Sensitive personal information
   * *   Personal information
   * *   Important information
   * 
   * @example
   * personal sensitive data
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeOssObjectDetailResponseBodyOssObjectDetail extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket to which the OSS object belongs.
   * 
   * @example
   * bucke***
   */
  bucketName?: string;
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
   * The name of the OSS object.
   * 
   * @example
   * obj_id
   */
  name?: string;
  /**
   * @remarks
   * The region ID of the OSS object.
   * 
   * @example
   * cn-***
   */
  regionId?: string;
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
   * A list of the sensitive data detection rules that the OSS object hits.
   */
  ruleList?: DescribeOssObjectDetailResponseBodyOssObjectDetailRuleList[];
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      categoryName: 'CategoryName',
      name: 'Name',
      regionId: 'RegionId',
      riskLevelName: 'RiskLevelName',
      ruleList: 'RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      categoryName: 'string',
      name: 'string',
      regionId: 'string',
      riskLevelName: 'string',
      ruleList: { 'type': 'array', 'itemType': DescribeOssObjectDetailResponseBodyOssObjectDetailRuleList },
    };
  }

  validate() {
    if(Array.isArray(this.ruleList)) {
      $dara.Model.validateArray(this.ruleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssObjectDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the OSS object.
   */
  ossObjectDetail?: DescribeOssObjectDetailResponseBodyOssObjectDetail;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 769FB3C1-F4C9-42DF-9B72-7077A8989C13
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ossObjectDetail: 'OssObjectDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossObjectDetail: DescribeOssObjectDetailResponseBodyOssObjectDetail,
      requestId: 'string',
    };
  }

  validate() {
    if(this.ossObjectDetail && typeof (this.ossObjectDetail as any).validate === 'function') {
      (this.ossObjectDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

