// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeOssObjectDetailV2ResponseBodyOssObjectDetailRuleList } from "./DescribeOssObjectDetailV2responseBodyOssObjectDetailRuleList";


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

