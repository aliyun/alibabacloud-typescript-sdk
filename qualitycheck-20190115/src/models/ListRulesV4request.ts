// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRulesV4Request extends $dara.Model {
  /**
   * @remarks
   * The ID of the business workspace.
   * 
   * @example
   * 123456
   */
  baseMeAgentId?: number;
  /**
   * @remarks
   * The name of the business to which the rule belongs.
   * 
   * @example
   * All businesses
   */
  businessName?: string;
  /**
   * @remarks
   * The major business category.
   * 
   * @example
   * None
   */
  businessRange?: number;
  /**
   * @remarks
   * The category name.
   * 
   * @example
   * Category name A
   */
  categoryName?: string;
  /**
   * @remarks
   * Specifies whether to count the total number of entries.
   * 
   * @example
   * false
   */
  countTotal?: boolean;
  /**
   * @remarks
   * The ID of the rule creator. This parameter is equivalent to CreateUserId. Specify only one of them.
   * 
   * @example
   * 1
   */
  createEmpid?: string;
  /**
   * @remarks
   * The ID of the rule creator. This parameter is equivalent to CreateEmpid. Specify only one of them.
   * 
   * @example
   * 1
   */
  createUserId?: number;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end time for filtering by creation time.
   * 
   * @example
   * 2021-11-29 19:11:09
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the rule updater. This parameter is equivalent to UpdateUserId. Specify only one of them.
   * 
   * @example
   * 1
   */
  lastUpdateEmpid?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The required fields.
   */
  requireInfos?: string[];
  /**
   * @remarks
   * The rule ID to search for.
   * 
   * @example
   * 895EAD5312634F5AA708E3B3FA79662E
   */
  rid?: number;
  /**
   * @remarks
   * The rule ID or rule name to search for.
   * 
   * @example
   * xx
   */
  ruleIdOrRuleName?: string;
  /**
   * @remarks
   * The scoring type.
   * 
   * @example
   * 1
   */
  ruleScoreSingleType?: number;
  /**
   * @remarks
   * The rule category.
   * 
   * @example
   * 1
   */
  ruleType?: number;
  /**
   * @remarks
   * The ID of the quality inspection plan.
   * 
   * @example
   * 1000000090
   */
  schemeId?: number;
  /**
   * @remarks
   * The source type.
   * 
   * @example
   * 0
   */
  sourceType?: number;
  /**
   * @remarks
   * The start time for filtering by creation time.
   * 
   * @example
   * 2021-11-29 18:11:09
   */
  startTime?: string;
  /**
   * @remarks
   * The rule status.
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * The rule type.
   * 
   * @example
   * 21
   */
  targetType?: string;
  /**
   * @remarks
   * The type value of the rule type to which the rule belongs.
   * 
   * @example
   * 1
   */
  type?: number;
  /**
   * @remarks
   * The name of the rule type to which the rule belongs.
   * 
   * @example
   * All types
   */
  typeName?: string;
  /**
   * @remarks
   * The end time for filtering by update time.
   * 
   * @example
   * 2021-11-29 18:11:09
   */
  updateEndTime?: string;
  /**
   * @remarks
   * The start time for filtering by update time.
   * 
   * @example
   * 2021-11-29 16:11:09
   */
  updateStartTime?: string;
  /**
   * @remarks
   * The ID of the rule updater. This parameter is equivalent to LastUpdateEmpid. Specify only one of them.
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
      targetType: 'TargetType',
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
      targetType: 'string',
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

