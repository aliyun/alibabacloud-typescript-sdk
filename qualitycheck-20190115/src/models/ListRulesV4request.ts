// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRulesV4Request extends $dara.Model {
  /**
   * @remarks
   * Workspace ID.
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * Name of the business that owns the rule.
   * 
   * @example
   * 所有业务
   */
  businessName?: string;
  /**
   * @remarks
   * Top-level business category.
   * 
   * @example
   * 无
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
   * Whether to count the total number of items.
   * 
   * @example
   * false
   */
  countTotal?: boolean;
  /**
   * @remarks
   * ID of the rule creator. Same as CreateUserId. Specify one only.
   * 
   * @example
   * 1
   */
  createEmpid?: string;
  /**
   * @remarks
   * ID of the rule creator. Same as CreateEmpId. Specify one only.
   * 
   * @example
   * 1
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
   * Filter by creation time (right boundary).
   * 
   * @example
   * 2021-11-29 19:11:09
   */
  endTime?: string;
  /**
   * @remarks
   * ID of the rule updater. Same as UpdateUserId. Specify one only.
   * 
   * @example
   * 1
   */
  lastUpdateEmpid?: string;
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of items per page.
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
   * 895EAD5312634F5AA708E3B3FA79662E
   */
  rid?: number;
  /**
   * @remarks
   * Search by rule ID or rule name.
   * 
   * @example
   * xx
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
   * 1000000090
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
   * Filter by creation time (left boundary).
   * 
   * @example
   * 2021-11-29 18:11:09
   */
  startTime?: string;
  /**
   * @remarks
   * Rule status.
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * Type value of the rule category that the rule belongs to.
   * 
   * @example
   * 1
   */
  type?: number;
  /**
   * @remarks
   * Name of the rule category that the rule belongs to.
   * 
   * @example
   * 所有类型
   */
  typeName?: string;
  /**
   * @remarks
   * Filter by update time (right boundary).
   * 
   * @example
   * 2021-11-29 18:11:09
   */
  updateEndTime?: string;
  /**
   * @remarks
   * Filter by update time (left boundary).
   * 
   * @example
   * 2021-11-29 16:11:09
   */
  updateStartTime?: string;
  /**
   * @remarks
   * ID of the rule updater. Same as LastUpdateEmpId. Specify one only.
   * 
   * @example
   * 1
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

