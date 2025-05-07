// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRulesV4Request extends $dara.Model {
  /**
   * @remarks
   * baseMeAgentId
   */
  baseMeAgentId?: number;
  businessName?: string;
  businessRange?: number;
  categoryName?: string;
  /**
   * @example
   * false
   */
  countTotal?: boolean;
  /**
   * @example
   * 1
   */
  createEmpid?: string;
  /**
   * @example
   * 1
   */
  createUserId?: number;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2021-11-29 19:11:09
   */
  endTime?: string;
  /**
   * @example
   * 1
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
   * 895EAD5312634F5AA708E3B3FA79662E
   */
  rid?: number;
  /**
   * @example
   * xx
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
   * 1000000090
   */
  schemeId?: number;
  /**
   * @example
   * 0
   */
  sourceType?: number;
  /**
   * @example
   * 2021-11-29 18:11:09
   */
  startTime?: string;
  /**
   * @example
   * 2
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
   * 2021-11-29 18:11:09
   */
  updateEndTime?: string;
  /**
   * @example
   * 2021-11-29 16:11:09
   */
  updateStartTime?: string;
  /**
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

