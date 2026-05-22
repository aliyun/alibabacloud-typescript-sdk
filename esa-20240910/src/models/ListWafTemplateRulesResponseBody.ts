// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafRuleConfig } from "./WafRuleConfig";


export class ListWafTemplateRulesResponseBodyRules extends $dara.Model {
  /**
   * @remarks
   * Rule configuration.
   */
  config?: WafRuleConfig;
  /**
   * @remarks
   * Rule name.
   * 
   * @example
   * HTTP Directory Traversal Rule [Template]
   */
  name?: string;
  /**
   * @remarks
   * WAF operation phase.
   * 
   * @example
   * http_anti_scan
   */
  phase?: string;
  /**
   * @remarks
   * Rule status.
   * 
   * @example
   * on
   */
  status?: string;
  /**
   * @remarks
   * Rule type.
   * 
   * @example
   * http_directory_traversal
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      name: 'Name',
      phase: 'Phase',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: WafRuleConfig,
      name: 'string',
      phase: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWafTemplateRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  /**
   * @remarks
   * The list of returned template rules.
   */
  rules?: ListWafTemplateRulesResponseBodyRules[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rules: { 'type': 'array', 'itemType': ListWafTemplateRulesResponseBodyRules },
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

