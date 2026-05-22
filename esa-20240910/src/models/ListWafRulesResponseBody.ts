// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafRuleConfig } from "./WafRuleConfig";
import { WafTimer } from "./WafTimer";


export class ListWafRulesResponseBodyRules extends $dara.Model {
  /**
   * @example
   * deny
   */
  action?: string;
  characteristicsFields?: string[];
  config?: WafRuleConfig;
  fields?: string[];
  /**
   * @example
   * 20000001
   */
  id?: number;
  /**
   * @example
   * example
   */
  name?: string;
  /**
   * @example
   * http_custom
   */
  phase?: string;
  /**
   * @example
   * 1
   */
  position?: number;
  /**
   * @example
   * 10000001
   */
  rulesetId?: number;
  /**
   * @example
   * part
   */
  skip?: string;
  /**
   * @example
   * on
   */
  status?: string;
  tags?: string[];
  timer?: WafTimer;
  /**
   * @example
   * http_custom
   */
  type?: string;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      characteristicsFields: 'CharacteristicsFields',
      config: 'Config',
      fields: 'Fields',
      id: 'Id',
      name: 'Name',
      phase: 'Phase',
      position: 'Position',
      rulesetId: 'RulesetId',
      skip: 'Skip',
      status: 'Status',
      tags: 'Tags',
      timer: 'Timer',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      characteristicsFields: { 'type': 'array', 'itemType': 'string' },
      config: WafRuleConfig,
      fields: { 'type': 'array', 'itemType': 'string' },
      id: 'number',
      name: 'string',
      phase: 'string',
      position: 'number',
      rulesetId: 'number',
      skip: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      timer: WafTimer,
      type: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.characteristicsFields)) {
      $dara.Model.validateArray(this.characteristicsFields);
    }
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(this.timer && typeof (this.timer as any).validate === 'function') {
      (this.timer as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafRulesResponseBody extends $dara.Model {
  /**
   * @example
   * 10
   */
  instanceUsage?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  rules?: ListWafRulesResponseBodyRules[];
  /**
   * @example
   * 5
   */
  siteUsage?: number;
  /**
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceUsage: 'InstanceUsage',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      rules: 'Rules',
      siteUsage: 'SiteUsage',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceUsage: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': ListWafRulesResponseBodyRules },
      siteUsage: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

