// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeOssObjectDetailResponseBodyOssObjectDetailRuleList } from "./DescribeOssObjectDetailResponseBodyOssObjectDetailRuleList";


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

