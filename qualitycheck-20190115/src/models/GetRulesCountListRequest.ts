// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRulesCountListRequest extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  businessName?: string;
  /**
   * @example
   * 1
   */
  businessRange?: number;
  categoryName?: string;
  /**
   * @example
   * true
   */
  countTotal?: boolean;
  /**
   * @example
   * 63
   */
  createEmpid?: string;
  /**
   * @example
   * 63
   */
  createUserId?: number;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2022-10-08 23:59:59
   */
  endTime?: string;
  /**
   * @example
   * 63
   */
  lastUpdateEmpid?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  requireInfos?: string[];
  /**
   * @example
   * 123
   */
  rid?: number;
  /**
   * @example
   * 123
   */
  ruleIdOrRuleName?: string;
  /**
   * @example
   * 1
   */
  ruleScoreSingleType?: number;
  /**
   * @example
   * 1
   */
  ruleType?: number;
  /**
   * @example
   * 123
   */
  schemeId?: number;
  /**
   * @example
   * 0
   */
  sourceType?: number;
  /**
   * @example
   * 2022-10-07 00:00:00
   */
  startTime?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 1
   */
  type?: number;
  typeName?: string;
  /**
   * @example
   * 2022-10-08 23:59:59
   */
  updateEndTime?: string;
  /**
   * @example
   * 2022-10-07 00:00:00
   */
  updateStartTime?: string;
  /**
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

