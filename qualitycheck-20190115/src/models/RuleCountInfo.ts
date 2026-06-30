// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BusinessCategoryBasicInfo } from "./BusinessCategoryBasicInfo";


export class RuleCountInfo extends $dara.Model {
  /**
   * @remarks
   * The review option.
   * 
   * - 1: Manual review
   * 
   * - 3: Automatic review
   * 
   * @example
   * 1
   */
  autoReview?: number;
  /**
   * @remarks
   * A list of basic information about business categories.
   */
  businessCategoryBasicInfoList?: BusinessCategoryBasicInfo[];
  /**
   * @remarks
   * A list of business category names.
   */
  businessCategoryNameList?: string[];
  /**
   * @remarks
   * The business scope.
   */
  businessRange?: number[];
  /**
   * @remarks
   * The number of checked sessions.
   * 
   * @example
   * 1
   */
  checkNumber?: number;
  /**
   * @remarks
   * The comments.
   * 
   * @example
   * 测试
   */
  comments?: string;
  /**
   * @remarks
   * The name of the creator.
   * 
   * @example
   * 张三
   */
  createEmpName?: string;
  /**
   * @remarks
   * The employee ID of the creator.
   * 
   * @example
   * 1
   */
  createEmpid?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1615133575000
   */
  createTime?: string;
  /**
   * @remarks
   * You can set this parameter to 1 to reject rule edits, or to 0 or null to allow rule edits.
   * 
   * @example
   * 1
   */
  deny?: number;
  /**
   * @remarks
   * Indicates if the rule is active. \\`0\\`: No. \\`1\\`: Yes.
   * 
   * @example
   * 1
   */
  effective?: number;
  /**
   * @remarks
   * The effective end time.
   * 
   * @example
   * 1662685868850
   */
  effectiveEndTime?: string;
  /**
   * @remarks
   * The effective start time.
   * 
   * @example
   * 1662685868850
   */
  effectiveStartTime?: string;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 1650092585176
   */
  endTime?: string;
  /**
   * @remarks
   * Indicates if the rule is active for the entire lifecycle. \\`0\\`: No. \\`1\\`: Yes.
   * 
   * @example
   * 1
   */
  fullCycle?: number;
  /**
   * @remarks
   * The flow canvas, in JSON format.
   * 
   * @example
   * 较复杂，忽略
   */
  graphFlow?: any;
  /**
   * @remarks
   * The number of hit sessions.
   * 
   * @example
   * 1
   */
  hitNumber?: number;
  /**
   * @remarks
   * The hit rate.
   * 
   * @example
   * 1
   */
  hitRate?: number;
  /**
   * @remarks
   * The hit rate of actual violations.
   * 
   * @example
   * 1
   */
  hitRealViolationRate?: number;
  /**
   * @remarks
   * Indicates if the rule is deleted.
   * 
   * @example
   * 1
   */
  isDelete?: number;
  /**
   * @remarks
   * Indicates if the rule is selected.
   * 
   * @example
   * true
   */
  isSelect?: boolean;
  /**
   * @remarks
   * The scheduled task name.
   * 
   * @example
   * job-1-20221012-105943
   */
  jobName?: string;
  /**
   * @remarks
   * The name of the user who last updated the rule.
   * 
   * @example
   * 张三
   */
  lastUpdateEmpName?: string;
  /**
   * @remarks
   * The employee ID of the user who last updated the rule.
   * 
   * @example
   * 1
   */
  lastUpdateEmpid?: string;
  /**
   * @remarks
   * The last update time.
   * 
   * @example
   * 1648200901000
   */
  lastUpdateTime?: string;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * 0801转封装测试
   */
  name?: string;
  /**
   * @remarks
   * The operation mode.
   * 
   * @example
   * 1
   */
  operationMode?: number;
  /**
   * @remarks
   * The number of items pending review.
   * 
   * @example
   * 1
   */
  preReviewNumber?: number;
  /**
   * @remarks
   * The number of problems found.
   * 
   * @example
   * 1
   */
  problemNumber?: number;
  /**
   * @remarks
   * The quality check type.
   * 
   * - 0: Offline
   * 
   * - 1: Real-time
   * 
   * @example
   * 1
   */
  qualityCheckType?: number;
  /**
   * @remarks
   * The number of actual violations after review.
   * 
   * @example
   * 1
   */
  realViolationNumber?: number;
  /**
   * @remarks
   * The review accuracy rate.
   * 
   * @example
   * 1
   */
  reviewAccuracyRate?: number;
  /**
   * @remarks
   * The number of reviewed items.
   * 
   * @example
   * 1
   */
  reviewNumber?: number;
  /**
   * @remarks
   * The review rate.
   * 
   * @example
   * 1
   */
  reviewRate?: number;
  /**
   * @remarks
   * The review status name.
   * 
   * @example
   * 通过
   */
  reviewStatusName?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 123
   */
  rid?: number;
  /**
   * @remarks
   * The scoring type. \\`8\\`: No score is set.
   * 
   * @example
   * 1
   */
  ruleScoreSingleType?: number;
  /**
   * @remarks
   * Specifies if a score is calculated.
   * 
   * - 1: No
   * 
   * - 3: Yes
   * 
   * @example
   * 1
   */
  ruleScoreType?: number;
  /**
   * @remarks
   * The rule origin. For example, a built-in rule or a user-created rule.
   * 
   * @example
   * 1
   */
  ruleType?: number;
  /**
   * @remarks
   * The sub-item ID.
   * 
   * @example
   * 1
   */
  scoreSubId?: number;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1662685868850
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the rule.
   * 
   * - 0: Pending
   * 
   * - 1: Active
   * 
   * - 2: Expired
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The rule category.
   * 
   * - 10: Standard
   * 
   * - 11: Flow-based
   * 
   * @example
   * 10
   */
  targetType?: number;
  /**
   * @remarks
   * The rule type.
   * 
   * @example
   * 1
   */
  type?: number;
  /**
   * @remarks
   * The type name.
   * 
   * @example
   * 全部类别
   */
  typeName?: string;
  /**
   * @remarks
   * The number of unreviewed items.
   * 
   * @example
   * 1
   */
  unReviewNumber?: number;
  /**
   * @remarks
   * The user group.
   * 
   * @example
   * xxxx
   */
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

