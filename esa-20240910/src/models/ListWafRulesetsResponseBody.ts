// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWafRulesetsResponseBodyRulesets extends $dara.Model {
  fields?: string[];
  /**
   * @example
   * 10000001
   */
  id?: number;
  /**
   * @example
   * example
   */
  name?: string;
  /**
   * @example
   * http_bot
   */
  phase?: string;
  /**
   * @example
   * on
   */
  status?: string;
  /**
   * @example
   * web
   */
  target?: string;
  types?: string[];
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'Fields',
      id: 'Id',
      name: 'Name',
      phase: 'Phase',
      status: 'Status',
      target: 'Target',
      types: 'Types',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': 'string' },
      id: 'number',
      name: 'string',
      phase: 'string',
      status: 'string',
      target: 'string',
      types: { 'type': 'array', 'itemType': 'string' },
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fields)) {
      $dara.Model.validateArray(this.fields);
    }
    if(Array.isArray(this.types)) {
      $dara.Model.validateArray(this.types);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafRulesetsResponseBody extends $dara.Model {
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
  rulesets?: ListWafRulesetsResponseBodyRulesets[];
  siteUsage?: number;
  /**
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceUsage: 'InstanceUsage',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      rulesets: 'Rulesets',
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
      rulesets: { 'type': 'array', 'itemType': ListWafRulesetsResponseBodyRulesets },
      siteUsage: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.rulesets)) {
      $dara.Model.validateArray(this.rulesets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

