// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWebFilterRulesRequestRulesConditions extends $dara.Model {
  /**
   * @remarks
   * The type of the matching condition. Only **URL** is supported, which indicates matching by URL.
   * 
   * @example
   * URL
   */
  key?: string;
  /**
   * @remarks
   * The URL to match. It cannot be empty and must not exceed 240 bytes in length (each Chinese character counts as 3 bytes). It must contain at least one forward slash (/), and the first segment must contain letters, digits, or Chinese characters. It cannot contain a protocol header, query parameters, or fragment identifiers. A single asterisk (*) indicates matching all URLs. When a wildcard is used, a maximum of one wildcard is allowed and it must end with /*. URLs within the same template cannot be duplicated.
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

export class CreateWebFilterRulesRequestRules extends $dara.Model {
  /**
   * @remarks
   * The list of matching conditions for the rule. The list must contain exactly one condition.
   */
  conditions?: CreateWebFilterRulesRequestRulesConditions[];
  /**
   * @remarks
   * The action to perform when a rule is matched. Valid values:
   * - **Allow**: allows the request.
   * - **Alert**: monitors the request.
   * - **Deny**: blocks the request.
   * 
   * @example
   * Deny
   */
  ruleAction?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      ruleAction: 'RuleAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': CreateWebFilterRulesRequestRulesConditions },
      ruleAction: 'string',
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

export class CreateWebFilterRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The list of web filtering rules. You can specify a maximum of 100 rules at a time, and the total number of rules in the template after creation must not exceed 100.
   * 
   * This parameter is required.
   */
  rules?: CreateWebFilterRulesRequestRules[];
  /**
   * @remarks
   * The ID of the web filtering template to which the web filtering rules belong. The template must exist within the current Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * wft-3f2a9c1d4b5e6f70
   */
  webFilterTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      rules: 'Rules',
      webFilterTemplateId: 'WebFilterTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rules: { 'type': 'array', 'itemType': CreateWebFilterRulesRequestRules },
      webFilterTemplateId: 'string',
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

