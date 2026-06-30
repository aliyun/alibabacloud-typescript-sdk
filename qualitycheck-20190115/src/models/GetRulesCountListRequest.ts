// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRulesCountListRequest extends $dara.Model {
  /**
   * @remarks
   * Workspace ID.
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * Business name to which the rule belongs.
   * 
   * @example
   * 电话业务
   */
  businessName?: string;
  /**
   * @remarks
   * Broad business category.
   * 
   * @example
   * 1
   */
  businessRange?: number;
  /**
   * @remarks
   * Category name.
   * 
   * @example
   * 分类名称A
   */
  categoryName?: string;
  /**
   * @remarks
   * Whether to count the total number.
   * 
   * @example
   * true
   */
  countTotal?: boolean;
  /**
   * @remarks
   * Rule creator ID. Same as CreateUserId. Use either one.
   * 
   * @example
   * 63
   */
  createEmpid?: string;
  /**
   * @remarks
   * Rule creator ID. Same as CreateEmpid. Use either one.
   * 
   * @example
   * 63
   */
  createUserId?: number;
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Filter by creation time (start of range).
   * 
   * @example
   * 2022-10-08 23:59:59
   */
  endTime?: string;
  /**
   * @remarks
   * Rule updater ID. Same as UpdateUserId. Use either one.
   * 
   * @example
   * 63
   */
  lastUpdateEmpid?: string;
  /**
   * @remarks
   * Page number of the rule list.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Required fields.
   */
  requireInfos?: string[];
  /**
   * @remarks
   * Search by rule ID.
   * 
   * @example
   * 123
   */
  rid?: number;
  /**
   * @remarks
   * Search by rule ID or rule name.
   * 
   * @example
   * 123
   */
  ruleIdOrRuleName?: string;
  /**
   * @remarks
   * Scoring type.
   * 
   * @example
   * 1
   */
  ruleScoreSingleType?: number;
  /**
   * @remarks
   * Rule category.
   * 
   * @example
   * 1
   */
  ruleType?: number;
  /**
   * @remarks
   * Quality inspection scheme ID.
   * 
   * @example
   * 123
   */
  schemeId?: number;
  /**
   * @remarks
   * Source type.
   * 
   * @example
   * 0
   */
  sourceType?: number;
  /**
   * @remarks
   * Filter by creation time (end of range).
   * 
   * @example
   * 2022-10-07 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * Rule status:
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * Type value of the rule category to which the rule belongs.
   * 
   * @example
   * 1
   */
  type?: number;
  /**
   * @remarks
   * Name of the rule category to which the rule belongs.
   * 
   * @example
   * 全部类别
   */
  typeName?: string;
  /**
   * @remarks
   * Filter by update time (end of range).
   * 
   * @example
   * 2022-10-08 23:59:59
   */
  updateEndTime?: string;
  /**
   * @remarks
   * Filter by update time (start of range).
   * 
   * @example
   * 2022-10-07 00:00:00
   */
  updateStartTime?: string;
  /**
   * @remarks
   * Rule updater ID. Same as LastUpdateEmpid. Use either one.
   * 
   * @example
   * 63
   */
  updateUserId?: number;
  static names(): { [key: string]: string } {
    return {
      baseMeAgentId: 'BaseMeAgentId',
      businessName: 'BusinessName',
      businessRange: 'BusinessRange',
      categoryName: 'CategoryName',
      countTotal: 'CountTotal',
      createEmpid: 'CreateEmpid',
      createUserId: 'CreateUserId',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      lastUpdateEmpid: 'LastUpdateEmpid',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requireInfos: 'RequireInfos',
      rid: 'Rid',
      ruleIdOrRuleName: 'RuleIdOrRuleName',
      ruleScoreSingleType: 'RuleScoreSingleType',
      ruleType: 'RuleType',
      schemeId: 'SchemeId',
      sourceType: 'SourceType',
      startTime: 'StartTime',
      status: 'Status',
      type: 'Type',
      typeName: 'TypeName',
      updateEndTime: 'UpdateEndTime',
      updateStartTime: 'UpdateStartTime',
      updateUserId: 'UpdateUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseMeAgentId: 'number',
      businessName: 'string',
      businessRange: 'number',
      categoryName: 'string',
      countTotal: 'boolean',
      createEmpid: 'string',
      createUserId: 'number',
      currentPage: 'number',
      endTime: 'string',
      lastUpdateEmpid: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requireInfos: { 'type': 'array', 'itemType': 'string' },
      rid: 'number',
      ruleIdOrRuleName: 'string',
      ruleScoreSingleType: 'number',
      ruleType: 'number',
      schemeId: 'number',
      sourceType: 'number',
      startTime: 'string',
      status: 'number',
      type: 'number',
      typeName: 'string',
      updateEndTime: 'string',
      updateStartTime: 'string',
      updateUserId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.requireInfos)) {
      $dara.Model.validateArray(this.requireInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

