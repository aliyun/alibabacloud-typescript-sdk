// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLogListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2019-06-06 00:00:00
   */
  beginDate?: string;
  /**
   * @example
   * 111.164.XX.XX
   */
  clientIpList?: string[];
  /**
   * @example
   * navicat
   */
  clientProgramList?: string[];
  /**
   * @example
   * 192.168.XX.XX
   */
  dbHostList?: string[];
  /**
   * @example
   * 1
   */
  dbId?: number;
  /**
   * @example
   * root
   */
  dbUserList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2019-06-06 23:59:59
   */
  endDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dbaudit-cn-78v1gc****
   */
  instanceId?: string;
  /**
   * @example
   * true
   */
  isSuccess?: string;
  lang?: string;
  /**
   * @example
   * 1000
   */
  maxAffectRows?: number;
  /**
   * @example
   * 20000
   */
  maxExecCostUS?: number;
  /**
   * @example
   * 10
   */
  minAffectRows?: number;
  /**
   * @example
   * 100
   */
  minExecCostUS?: number;
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
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 1
   */
  riskLevelList?: string[];
  ruleName?: string;
  /**
   * @example
   * 5
   */
  ruleTypeList?: string[];
  /**
   * @example
   * 3011610850021000000
   */
  sessionId?: string;
  /**
   * @example
   * 1907181552270011186
   */
  sqlId?: string;
  /**
   * @example
   * select
   */
  sqlKey?: string;
  /**
   * @example
   * 8
   */
  sqlTypeList?: string[];
  /**
   * @example
   * 1000****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      beginDate: 'BeginDate',
      clientIpList: 'ClientIpList',
      clientProgramList: 'ClientProgramList',
      dbHostList: 'DbHostList',
      dbId: 'DbId',
      dbUserList: 'DbUserList',
      endDate: 'EndDate',
      instanceId: 'InstanceId',
      isSuccess: 'IsSuccess',
      lang: 'Lang',
      maxAffectRows: 'MaxAffectRows',
      maxExecCostUS: 'MaxExecCostUS',
      minAffectRows: 'MinAffectRows',
      minExecCostUS: 'MinExecCostUS',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      riskLevelList: 'RiskLevelList',
      ruleName: 'RuleName',
      ruleTypeList: 'RuleTypeList',
      sessionId: 'SessionId',
      sqlId: 'SqlId',
      sqlKey: 'SqlKey',
      sqlTypeList: 'SqlTypeList',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginDate: 'string',
      clientIpList: { 'type': 'array', 'itemType': 'string' },
      clientProgramList: { 'type': 'array', 'itemType': 'string' },
      dbHostList: { 'type': 'array', 'itemType': 'string' },
      dbId: 'number',
      dbUserList: { 'type': 'array', 'itemType': 'string' },
      endDate: 'string',
      instanceId: 'string',
      isSuccess: 'string',
      lang: 'string',
      maxAffectRows: 'number',
      maxExecCostUS: 'number',
      minAffectRows: 'number',
      minExecCostUS: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      riskLevelList: { 'type': 'array', 'itemType': 'string' },
      ruleName: 'string',
      ruleTypeList: { 'type': 'array', 'itemType': 'string' },
      sessionId: 'string',
      sqlId: 'string',
      sqlKey: 'string',
      sqlTypeList: { 'type': 'array', 'itemType': 'string' },
      templateId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.clientIpList)) {
      $dara.Model.validateArray(this.clientIpList);
    }
    if(Array.isArray(this.clientProgramList)) {
      $dara.Model.validateArray(this.clientProgramList);
    }
    if(Array.isArray(this.dbHostList)) {
      $dara.Model.validateArray(this.dbHostList);
    }
    if(Array.isArray(this.dbUserList)) {
      $dara.Model.validateArray(this.dbUserList);
    }
    if(Array.isArray(this.riskLevelList)) {
      $dara.Model.validateArray(this.riskLevelList);
    }
    if(Array.isArray(this.ruleTypeList)) {
      $dara.Model.validateArray(this.ruleTypeList);
    }
    if(Array.isArray(this.sqlTypeList)) {
      $dara.Model.validateArray(this.sqlTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

