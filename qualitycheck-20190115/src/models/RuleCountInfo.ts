// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BusinessCategoryBasicInfo } from "./BusinessCategoryBasicInfo";


export class RuleCountInfo extends $dara.Model {
  autoReview?: number;
  businessCategoryBasicInfoList?: BusinessCategoryBasicInfo[];
  businessCategoryNameList?: string[];
  businessRange?: number[];
  checkNumber?: number;
  comments?: string;
  createEmpName?: string;
  createEmpid?: string;
  createTime?: string;
  deny?: number;
  effective?: number;
  effectiveEndTime?: string;
  effectiveStartTime?: string;
  endTime?: string;
  fullCycle?: number;
  graphFlow?: any;
  hitNumber?: number;
  hitRate?: number;
  hitRealViolationRate?: number;
  isDelete?: number;
  isSelect?: boolean;
  jobName?: string;
  lastUpdateEmpName?: string;
  lastUpdateEmpid?: string;
  lastUpdateTime?: string;
  name?: string;
  operationMode?: number;
  preReviewNumber?: number;
  problemNumber?: number;
  qualityCheckType?: number;
  realViolationNumber?: number;
  reviewAccuracyRate?: number;
  reviewNumber?: number;
  reviewRate?: number;
  reviewStatusName?: string;
  rid?: number;
  ruleScoreSingleType?: number;
  ruleScoreType?: number;
  ruleType?: number;
  scoreSubId?: number;
  startTime?: string;
  status?: number;
  targetType?: number;
  type?: number;
  typeName?: string;
  unReviewNumber?: number;
  userGroup?: string;
  static names(): { [key: string]: string } {
    return {
      autoReview: 'AutoReview',
      businessCategoryBasicInfoList: 'BusinessCategoryBasicInfoList',
      businessCategoryNameList: 'BusinessCategoryNameList',
      businessRange: 'BusinessRange',
      checkNumber: 'CheckNumber',
      comments: 'Comments',
      createEmpName: 'CreateEmpName',
      createEmpid: 'CreateEmpid',
      createTime: 'CreateTime',
      deny: 'Deny',
      effective: 'Effective',
      effectiveEndTime: 'EffectiveEndTime',
      effectiveStartTime: 'EffectiveStartTime',
      endTime: 'EndTime',
      fullCycle: 'FullCycle',
      graphFlow: 'GraphFlow',
      hitNumber: 'HitNumber',
      hitRate: 'HitRate',
      hitRealViolationRate: 'HitRealViolationRate',
      isDelete: 'IsDelete',
      isSelect: 'IsSelect',
      jobName: 'JobName',
      lastUpdateEmpName: 'LastUpdateEmpName',
      lastUpdateEmpid: 'LastUpdateEmpid',
      lastUpdateTime: 'LastUpdateTime',
      name: 'Name',
      operationMode: 'OperationMode',
      preReviewNumber: 'PreReviewNumber',
      problemNumber: 'ProblemNumber',
      qualityCheckType: 'QualityCheckType',
      realViolationNumber: 'RealViolationNumber',
      reviewAccuracyRate: 'ReviewAccuracyRate',
      reviewNumber: 'ReviewNumber',
      reviewRate: 'ReviewRate',
      reviewStatusName: 'ReviewStatusName',
      rid: 'Rid',
      ruleScoreSingleType: 'RuleScoreSingleType',
      ruleScoreType: 'RuleScoreType',
      ruleType: 'RuleType',
      scoreSubId: 'ScoreSubId',
      startTime: 'StartTime',
      status: 'Status',
      targetType: 'TargetType',
      type: 'Type',
      typeName: 'TypeName',
      unReviewNumber: 'UnReviewNumber',
      userGroup: 'UserGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoReview: 'number',
      businessCategoryBasicInfoList: { 'type': 'array', 'itemType': BusinessCategoryBasicInfo },
      businessCategoryNameList: { 'type': 'array', 'itemType': 'string' },
      businessRange: { 'type': 'array', 'itemType': 'number' },
      checkNumber: 'number',
      comments: 'string',
      createEmpName: 'string',
      createEmpid: 'string',
      createTime: 'string',
      deny: 'number',
      effective: 'number',
      effectiveEndTime: 'string',
      effectiveStartTime: 'string',
      endTime: 'string',
      fullCycle: 'number',
      graphFlow: 'any',
      hitNumber: 'number',
      hitRate: 'number',
      hitRealViolationRate: 'number',
      isDelete: 'number',
      isSelect: 'boolean',
      jobName: 'string',
      lastUpdateEmpName: 'string',
      lastUpdateEmpid: 'string',
      lastUpdateTime: 'string',
      name: 'string',
      operationMode: 'number',
      preReviewNumber: 'number',
      problemNumber: 'number',
      qualityCheckType: 'number',
      realViolationNumber: 'number',
      reviewAccuracyRate: 'number',
      reviewNumber: 'number',
      reviewRate: 'number',
      reviewStatusName: 'string',
      rid: 'number',
      ruleScoreSingleType: 'number',
      ruleScoreType: 'number',
      ruleType: 'number',
      scoreSubId: 'number',
      startTime: 'string',
      status: 'number',
      targetType: 'number',
      type: 'number',
      typeName: 'string',
      unReviewNumber: 'number',
      userGroup: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.businessCategoryBasicInfoList)) {
      $dara.Model.validateArray(this.businessCategoryBasicInfoList);
    }
    if(Array.isArray(this.businessCategoryNameList)) {
      $dara.Model.validateArray(this.businessCategoryNameList);
    }
    if(Array.isArray(this.businessRange)) {
      $dara.Model.validateArray(this.businessRange);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

