// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWebFilterRulesRequestRulesConditions extends $dara.Model {
  /**
   * @remarks
   * The type of the match condition. Only **URL** is supported, which indicates matching by URL.
   * 
   * @example
   * URL
   */
  key?: string;
  /**
   * @remarks
   * The URL to match. The value cannot be empty and must not exceed 240 bytes in length. Each Chinese character is counted as 3 bytes. The URL must contain at least one forward slash (/), and the first segment must contain letters, digits, or Chinese characters. The URL cannot contain a protocol header, query parameters, or fragment identifiers. A single asterisk (*) matches all URLs. If a wildcard is used, only one wildcard is allowed and it must end with /*. URLs within the same template must be unique.
   * 
   * @example
   * www.example.com/login
   */
  values?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWebFilterRulesRequestRules extends $dara.Model {
  /**
   * @remarks
   * The list of match conditions for the rule. The list must contain exactly one condition. After the update, URLs within the same template must be unique.
   */
  conditions?: UpdateWebFilterRulesRequestRulesConditions[];
  /**
   * @remarks
   * The action to perform when the rule is matched. Valid values:
   * - **Allow**: allows the request.
   * - **Alert**: monitors the request.
   * - **Deny**: blocks the request.
   * 
   * @example
   * Alert
   */
  ruleAction?: string;
  /**
   * @remarks
   * The ID of the web filtering rule to be updated. The rule must exist within the current Alibaba Cloud account.
   * 
   * @example
   * wfr-8c1d2e3f4a5b6c7d
   */
  webFilterRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      ruleAction: 'RuleAction',
      webFilterRuleId: 'WebFilterRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': UpdateWebFilterRulesRequestRulesConditions },
      ruleAction: 'string',
      webFilterRuleId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWebFilterRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The list of web filtering rules to be updated. You can specify up to 20 rules at a time. The rule IDs in the list must be unique.
   * 
   * This parameter is required.
   */
  rules?: UpdateWebFilterRulesRequestRules[];
  static names(): { [key: string]: string } {
    return {
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rules: { 'type': 'array', 'itemType': UpdateWebFilterRulesRequestRules },
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

