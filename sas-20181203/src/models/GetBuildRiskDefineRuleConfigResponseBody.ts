// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBuildRiskDefineRuleConfigResponseBodyDataRuleTreeRuleList extends $dara.Model {
  /**
   * @remarks
   * The check item.
   * 
   * @example
   * add
   */
  ruleKey?: string;
  /**
   * @remarks
   * The name of the check item.
   * 
   * @example
   * used ADD
   */
  ruleName?: string;
  /**
   * @remarks
   * Indicates whether the check item is selected. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  selected?: boolean;
  static names(): { [key: string]: string } {
    return {
      ruleKey: 'RuleKey',
      ruleName: 'RuleName',
      selected: 'Selected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleKey: 'string',
      ruleName: 'string',
      selected: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBuildRiskDefineRuleConfigResponseBodyDataRuleTree extends $dara.Model {
  /**
   * @remarks
   * The check item type.
   * 
   * @example
   * other
   */
  classKey?: string;
  /**
   * @remarks
   * The name of the check item type.
   * 
   * @example
   * other
   */
  className?: string;
  /**
   * @remarks
   * The check items of the type.
   */
  ruleList?: GetBuildRiskDefineRuleConfigResponseBodyDataRuleTreeRuleList[];
  static names(): { [key: string]: string } {
    return {
      classKey: 'ClassKey',
      className: 'ClassName',
      ruleList: 'RuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classKey: 'string',
      className: 'string',
      ruleList: { 'type': 'array', 'itemType': GetBuildRiskDefineRuleConfigResponseBodyDataRuleTreeRuleList },
    };
  }

  validate() {
    if(Array.isArray(this.ruleList)) {
      $dara.Model.validateArray(this.ruleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBuildRiskDefineRuleConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The configuration ID for scanning image build command risks.
   * 
   * @example
   * 273698***
   */
  id?: number;
  /**
   * @remarks
   * The total number of check items.
   * 
   * @example
   * 100
   */
  ruleCount?: number;
  /**
   * @remarks
   * The details of all check items.
   */
  ruleTree?: GetBuildRiskDefineRuleConfigResponseBodyDataRuleTree[];
  /**
   * @remarks
   * The number of selected check items.
   * 
   * @example
   * 99
   */
  selectedCount?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ruleCount: 'RuleCount',
      ruleTree: 'RuleTree',
      selectedCount: 'SelectedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      ruleCount: 'number',
      ruleTree: { 'type': 'array', 'itemType': GetBuildRiskDefineRuleConfigResponseBodyDataRuleTree },
      selectedCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ruleTree)) {
      $dara.Model.validateArray(this.ruleTree);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBuildRiskDefineRuleConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code **200** indicates that the request was successful. Other status codes indicate that the request failed. You can identify the cause of the failure based on the status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: GetBuildRiskDefineRuleConfigResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 69BFFCDE-37D6-5A49-A8BC-BB03AC83****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetBuildRiskDefineRuleConfigResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

