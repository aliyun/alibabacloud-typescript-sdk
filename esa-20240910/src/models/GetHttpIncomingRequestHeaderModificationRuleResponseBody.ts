// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHttpIncomingRequestHeaderModificationRuleResponseBodyRequestHeaderModification extends $dara.Model {
  /**
   * @example
   * headerName
   */
  name?: string;
  /**
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
   * headValue
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

export class GetHttpIncomingRequestHeaderModificationRuleResponseBody extends $dara.Model {
  /**
   * @example
   * 402411533580288
   */
  configId?: number;
  /**
   * @example
   * global
   */
  configType?: string;
  requestHeaderModification?: GetHttpIncomingRequestHeaderModificationRuleResponseBodyRequestHeaderModification[];
  /**
   * @example
   * 5CC228B4-7A67-4016-9C9F-4A4133494A91
   */
  requestId?: string;
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
   * @example
   * 0
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      configType: 'ConfigType',
      requestHeaderModification: 'RequestHeaderModification',
      requestId: 'RequestId',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      configType: 'string',
      requestHeaderModification: { 'type': 'array', 'itemType': GetHttpIncomingRequestHeaderModificationRuleResponseBodyRequestHeaderModification },
      requestId: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
      siteVersion: 'number',
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

