// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOssObjectDetailResponseBodyOssObjectDetailRuleListModelTags extends $dara.Model {
  /**
   * @remarks
   * The ID of the data tag for the detection model.
   * 
   * - **101**: Personal sensitive information.
   * 
   * - **102**: Personal information.
   * 
   * - **103**: Important data.
   * 
   * @example
   * 101
   */
  id?: number;
  /**
   * @remarks
   * The name of the data tag for the detection model.
   * 
   * - Personal sensitive information.
   * 
   * - Personal information.
   * 
   * - Important data.
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
   * The name of the OSS object type.
   * 
   * @example
   * Excel
   */
  categoryName?: string;
  /**
   * @remarks
   * The number of times the sensitive data detection rule was hit.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * A list of data tags that are hit by the detection model.
   */
  modelTags?: DescribeOssObjectDetailResponseBodyOssObjectDetailRuleListModelTags[];
  /**
   * @remarks
   * The ID of the risk level for the OSS object.
   * 
   * - **1**: No sensitive data is detected.
   * 
   * - **2**: Level 1 sensitive data.
   * 
   * - **3**: Level 2 sensitive data.
   * 
   * - **4**: Level 3 sensitive data.
   * 
   * - **5**: Level 4 sensitive data.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The name of the risk level for the OSS object.
   * 
   * @example
   * S2
   */
  riskLevelName?: string;
  /**
   * @remarks
   * The name of the sensitive data detection rule that was hit.
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
   * The name of the bucket to which the OSS object belongs.
   * 
   * @example
   * bucke***
   */
  bucketName?: string;
  /**
   * @remarks
   * The name of the OSS object type.
   * 
   * @example
   * Excel
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
   * The ID of the region where the OSS object is stored.
   * 
   * @example
   * cn-***
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the risk level for the OSS object.
   * 
   * @example
   * S2
   */
  riskLevelName?: string;
  /**
   * @remarks
   * A list of sensitive data detection rules that the OSS object hits.
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

