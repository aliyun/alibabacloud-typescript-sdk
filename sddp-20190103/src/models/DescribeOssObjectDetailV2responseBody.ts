// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOssObjectDetailV2ResponseBodyOssObjectDetailRuleListModelTags extends $dara.Model {
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
   * Personal sensitive information
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

export class DescribeOssObjectDetailV2ResponseBodyOssObjectDetailRuleList extends $dara.Model {
  /**
   * @remarks
   * The parent category of the model.
   * 
   * @example
   * 敏感图片信息
   */
  categoryName?: string;
  /**
   * @remarks
   * The number of times the sensitive data detection rule was matched.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * A list of tags for the detection model.
   */
  modelTags?: DescribeOssObjectDetailV2ResponseBodyOssObjectDetailRuleListModelTags[];
  /**
   * @remarks
   * The ID of the risk level that is specified in the rule.
   * 
   * - **1**: N/A
   * 
   * - **2**: S1
   * 
   * - **3**: S2
   * 
   * - **4**: S3
   * 
   * - **5**: S4
   * 
   * @example
   * 3
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The name of the risk level that is specified in the rule.
   * 
   * @example
   * S2
   */
  riskLevelName?: string;
  /**
   * @remarks
   * The name of the matched sensitive data detection rule.
   * 
   * @example
   * ID card number
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

export class DescribeOssObjectDetailV2ResponseBodyOssObjectDetail extends $dara.Model {
  /**
   * @remarks
   * The name of the bucket that stores the OSS object.
   * 
   * @example
   * sddp-api-scan-demo
   */
  bucketName?: string;
  /**
   * @remarks
   * The parent category of the model.
   * 
   * @example
   * Sensitive image information
   */
  categoryName?: string;
  /**
   * @remarks
   * The file type.
   * 
   * @example
   * Image file
   */
  fileCategoryName?: string;
  /**
   * @remarks
   * The unique ID of the object.
   * 
   * @example
   * 1757262735738932224
   */
  id?: string;
  /**
   * @remarks
   * The data tags, separated by commas. Example: 101,102. Valid values:
   * 
   * - **101**: Personal sensitive information.
   * 
   * - **102**: Personal information.
   * 
   * - **107**: General information.
   * 
   * @example
   * 101,102
   */
  modelTagIds?: string;
  /**
   * @remarks
   * The name of the OSS object.
   * 
   * @example
   * dir1/test.png
   */
  name?: string;
  /**
   * @remarks
   * The access control list (ACL) of the object.
   * 
   * @example
   * private
   */
  objectAcl?: string;
  /**
   * @remarks
   * The ID of the region where the OSS object is stored.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the risk level of the data asset. Valid values:
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
   * > A return value of 1 or less indicates N/A.
   * 
   * @example
   * 4
   */
  riskLevelId?: number;
  /**
   * @remarks
   * The name of the risk level of the OSS object.
   * 
   * @example
   * S2
   */
  riskLevelName?: string;
  /**
   * @remarks
   * The list of sensitive data detection rules that the OSS object matches.
   */
  ruleList?: DescribeOssObjectDetailV2ResponseBodyOssObjectDetailRuleList[];
  /**
   * @remarks
   * The size of the file in bytes.
   * 
   * @example
   * 1024
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'BucketName',
      categoryName: 'CategoryName',
      fileCategoryName: 'FileCategoryName',
      id: 'Id',
      modelTagIds: 'ModelTagIds',
      name: 'Name',
      objectAcl: 'ObjectAcl',
      regionId: 'RegionId',
      riskLevelId: 'RiskLevelId',
      riskLevelName: 'RiskLevelName',
      ruleList: 'RuleList',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      categoryName: 'string',
      fileCategoryName: 'string',
      id: 'string',
      modelTagIds: 'string',
      name: 'string',
      objectAcl: 'string',
      regionId: 'string',
      riskLevelId: 'number',
      riskLevelName: 'string',
      ruleList: { 'type': 'array', 'itemType': DescribeOssObjectDetailV2ResponseBodyOssObjectDetailRuleList },
      size: 'number',
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

export class DescribeOssObjectDetailV2ResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the OSS object.
   */
  ossObjectDetail?: DescribeOssObjectDetailV2ResponseBodyOssObjectDetail;
  /**
   * @remarks
   * The ID of the request. Use this ID to troubleshoot issues.
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
      ossObjectDetail: DescribeOssObjectDetailV2ResponseBodyOssObjectDetail,
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

