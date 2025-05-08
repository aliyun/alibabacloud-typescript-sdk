// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateHttpRequestHeaderModificationRuleRequestRequestHeaderModification } from "./UpdateHttpRequestHeaderModificationRuleRequestRequestHeaderModification";


export class UpdateHttpRequestHeaderModificationRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Configuration ID. It can be obtained by calling the [ListHttpRequestHeaderModificationRules](https://help.aliyun.com/document_detail/2867483.html) API.
   * 
   * This parameter is required.
   * 
   * @example
   * 35281609698****
   */
  configId?: number;
  /**
   * @remarks
   * Modify request headers, supporting add, delete, and modify operations.
   */
  requestHeaderModification?: UpdateHttpRequestHeaderModificationRuleRequestRequestHeaderModification[];
  /**
   * @remarks
   * Rule content, using conditional expressions to match user requests. This parameter is not required when adding a global configuration. There are two usage scenarios:
   * - To match all incoming requests: Set the value to true
   * - To match specific requests: Set the value to a custom expression, for example: (http.host eq \\"video.example.com\\")
   * 
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * Rule switch. This parameter is not required when adding a global configuration. Possible values:
   * - on: Enable.
   * - off: Disable.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * Rule name. This parameter is not required when adding a global configuration.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  sequence?: number;
  /**
   * @remarks
   * Site ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) API.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      requestHeaderModification: 'RequestHeaderModification',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      requestHeaderModification: { 'type': 'array', 'itemType': UpdateHttpRequestHeaderModificationRuleRequestRequestHeaderModification },
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
      siteId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.requestHeaderModification)) {
      $dara.Model.validateArray(this.requestHeaderModification);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

