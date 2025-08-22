// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnWafDefaultRulesResponseBodyContentRules extends $dara.Model {
  /**
   * @remarks
   * The default action of the rule. Valid values:
   * 
   * *   **monitor**
   * *   **deny**
   * *   **block**
   * 
   * @example
   * block
   */
  action?: string;
  /**
   * @remarks
   * The default configuration of the rule.
   * 
   * @example
   * {\\"wafGroupIds\\":\\"1012\\"}
   */
  config?: string;
  /**
   * @remarks
   * The default name of the rule.
   * 
   * @example
   * Default_WafGroup_Rule
   */
  name?: string;
  /**
   * @remarks
   * The default status of the rule. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  status?: string;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * *   **waf_group**: basic web protection.
   * *   **high_frequency**: high-frequency scanning blocking.
   * *   **directory_traversal**: directory traversal blocking.
   * *   **scan_tools**: scanner blocking.
   * 
   * @example
   * waf_group
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      config: 'Config',
      name: 'Name',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      config: 'string',
      name: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnWafDefaultRulesResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The protection scenario. Valid values:
   * 
   * *   **waf_group**: basic web protection.
   * *   **anti_scan**: scan protection.
   * 
   * @example
   * anti_scan
   */
  defenseScene?: string;
  /**
   * @remarks
   * The rules.
   */
  rules?: DescribeDcdnWafDefaultRulesResponseBodyContentRules[];
  static names(): { [key: string]: string } {
    return {
      defenseScene: 'DefenseScene',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseScene: 'string',
      rules: { 'type': 'array', 'itemType': DescribeDcdnWafDefaultRulesResponseBodyContentRules },
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

export class DescribeDcdnWafDefaultRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The rule configurations.
   */
  content?: DescribeDcdnWafDefaultRulesResponseBodyContent[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A123425345
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': DescribeDcdnWafDefaultRulesResponseBodyContent },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

