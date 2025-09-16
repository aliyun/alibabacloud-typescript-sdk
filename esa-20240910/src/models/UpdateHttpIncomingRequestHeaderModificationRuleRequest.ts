// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHttpIncomingRequestHeaderModificationRuleRequestRequestHeaderModification extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * headerName
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * add
   */
  operation?: string;
  /**
   * @example
   * static
   */
  type?: string;
  /**
   * @example
   * headerValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      operation: 'Operation',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      operation: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHttpIncomingRequestHeaderModificationRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 419717024278528
   */
  configId?: number;
  requestHeaderModification?: UpdateHttpIncomingRequestHeaderModificationRuleRequestRequestHeaderModification[];
  /**
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 568181195163328
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
      requestHeaderModification: { 'type': 'array', 'itemType': UpdateHttpIncomingRequestHeaderModificationRuleRequestRequestHeaderModification },
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

