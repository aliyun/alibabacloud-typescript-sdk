// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOssObjectDetailV2ResponseBodyOssObjectDetailRuleListModelTags extends $dara.Model {
  /**
   * @remarks
   * ID of the data label for the recognition model.
   * - **101**: Personal sensitive information.
   * - **102**: Personal information.
   * - **103**: Important data.
   * 
   * @example
   * 101
   */
  id?: number;
  /**
   * @remarks
   * Name of the data label for the recognition model.
   * - Personal sensitive information.
   * - Personal information.
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

export class DescribeOssObjectDetailV2ResponseBodyOssObjectDetail extends $dara.Model {
  /**
   * @remarks
   * The name of the Bucket to which the OSS storage object belongs.
   * 
   * @example
   * sddp-api-scan-demo
   */
  bucketName?: string;
  /**
   * @remarks
   * The major category of the model.
   * 
   * @example
   * Excel file
   */
  categoryName?: string;
  /**
   * @remarks
   * File type.
   * 
   * @example
   * Text file
   */
  fileCategoryName?: string;
  /**
   * @remarks
   * The unique ID of the OSS object.
   * 
   * @example
   * 1757262735738932224
   */
  id?: string;
  /**
   * @remarks
   * Data labels, separated by commas. Values:
   * - **101**: Personal Sensitive Information.
   * - **102**: Personal Information.
   * - **107**: General Information.
   * 
   * @example
   * 101,102
   */
  modelTagIds?: string;
  /**
   * @remarks
   * OSS storage object name.
   * 
   * @example
   * dir1/test.png
   */
  name?: string;
  /**
   * @remarks
   * OSS Object ACL
   * 
   * @example
   * private
   */
  objectAcl?: string;
  /**
   * @remarks
   * The region ID to which the OSS storage object belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The sensitivity level of the OSS object. Valid values:
   * 
   * *   **1**: N/A, which indicates that no sensitive data is detected.
   * *   **2**: S1, which indicates the low sensitivity level.
   * *   **3**: S2, which indicates the medium sensitivity level.
   * *   **4**: S3, which indicates the high sensitivity level.
   * *   **5**: S4, which indicates the highest sensitivity level.
   * 
   * @example
   * 4
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
   * A list of sensitive data recognition rules hit by the OSS storage object.
   */
  ruleList?: DescribeOssObjectDetailV2ResponseBodyOssObjectDetailRuleList[];
  /**
   * @remarks
   * File size. Unit: Byte.
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
   * Detailed information about the OSS storage object.
   */
  ossObjectDetail?: DescribeOssObjectDetailV2ResponseBodyOssObjectDetail;
  /**
   * @remarks
   * The ID of this call request, which is a unique identifier generated by Alibaba Cloud for the request and can be used to troubleshoot and locate issues.
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

