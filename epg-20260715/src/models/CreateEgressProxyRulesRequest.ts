// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEgressProxyRulesRequestEgressProxyRulesPostResponseConditions extends $dara.Model {
  /**
   * @remarks
   * The key of the matching condition. The value must match the effective phase (Phase) of the rule and be used with an operator (ConditionOperator) of the corresponding category. Valid values:
   * 
   * - **request:SourceIp**: the source IP address of the request. Used with IP address operators. Supported in the PreDns and PreRequest phases.
   * 
   * - **request:DestinationDomain**: the destination domain name of the request. Used with string operators. Supported in the PreDns and PreRequest phases.
   * 
   * - **request:Http:Uri**: the URI of the HTTP request. Used with string operators. Supported in the PreRequest phase.
   * 
   * - **request:Http:Method**: the HTTP request method. Used with string operators. Supported in the PreRequest phase.
   * 
   * - **request:Http:UserAgent**: the User-Agent of the HTTP request. Used with string operators. Supported in the PreRequest phase.
   * 
   * - **request:Http:ContentType**: the Content-Type of the HTTP request. Used with string operators. Supported in the PreRequest phase.
   * 
   * - **request:Http:Header**: the HTTP request header. Used with string operators. Supported in the PreRequest phase. When you use this key, append the request header name to the key in the format of request:Http:Header/<HeaderName>.
   * 
   * - **request:Protocol**: the request protocol. Used with string operators. Supported in the PreRequest phase.
   * 
   * This parameter is required.
   * 
   * @example
   * request:SourceIp
   */
  conditionKey?: string;
  /**
   * @remarks
   * The operator of the matching condition. Must be used with a condition key (ConditionKey). Valid values:
   * 
   * - **StringEquals**: exact string match.
   * 
   * - **StringNotEquals**: string not equal.
   * 
   * - **StringEqualsIgnoreCase**: case-insensitive exact string match.
   * 
   * - **StringNotEqualsIgnoreCase**: case-insensitive string not equal.
   * 
   * - **StringPrefixMatch**: string prefix match.
   * 
   * - **StringPrefixMatchIgnoreCase**: case-insensitive string prefix match.
   * 
   * - **StringPrefixNotMatch**: string prefix not match.
   * 
   * - **StringPrefixNotMatchIgnoreCase**: case-insensitive string prefix not match.
   * 
   * - **StringSuffixMatch**: string suffix match.
   * 
   * - **StringSuffixMatchIgnoreCase**: case-insensitive string suffix match.
   * 
   * - **StringSuffixNotMatch**: string suffix not match.
   * 
   * - **StringSuffixNotMatchIgnoreCase**: case-insensitive string suffix not match.
   * 
   * - **StringRegexMatch**: string regular expression match.
   * 
   * - **StringRegexNotMatch**: string regular expression not match.
   * 
   * - **StringWildcardMatch**: string wildcard match.
   * 
   * - **StringWildcardMatchIgnoreCase**: case-insensitive string wildcard match.
   * 
   * - **StringWildcardNotMatch**: string wildcard not match.
   * 
   * - **StringWildcardNotMatchIgnoreCase**: case-insensitive string wildcard not match.
   * 
   * - **IpAddress**: the source IP address belongs to the specified IP address or CIDR block.
   * 
   * - **NotIpAddress**: the source IP address does not belong to the specified IP address or CIDR block.
   * 
   * This parameter is required.
   * 
   * @example
   * IpAddress
   */
  conditionOperator?: string;
  /**
   * @remarks
   * The list of condition values.
   * 
   * This parameter is required.
   */
  conditionValues?: string[];
  static names(): { [key: string]: string } {
    return {
      conditionKey: 'ConditionKey',
      conditionOperator: 'ConditionOperator',
      conditionValues: 'ConditionValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionKey: 'string',
      conditionOperator: 'string',
      conditionValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.conditionValues)) {
      $dara.Model.validateArray(this.conditionValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEgressProxyRulesRequestEgressProxyRulesPostResponse extends $dara.Model {
  /**
   * @remarks
   * The action to perform on the matched traffic after the rule is hit. Valid values:
   * 
   * - **Allow**: allows the traffic that matches the rule.
   * 
   * - **Deny**: denies the traffic that matches the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * Allow
   */
  action?: string;
  /**
   * @remarks
   * The list of matching conditions for the rule. Each condition consists of a condition key (ConditionKey), an operator (ConditionOperator), and condition values (ConditionValues). The combination of a condition key and an operator must be unique within the same rule.
   * 
   * This parameter is required.
   */
  conditions?: CreateEgressProxyRulesRequestEgressProxyRulesPostResponseConditions[];
  /**
   * @remarks
   * The description of the egress rule. The description must be 2 to 256 characters in length, and can contain Chinese characters, letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_).
   * 
   * @example
   * testEpg
   */
  description?: string;
  /**
   * @remarks
   * The name of the egress rule. The name must be 2 to 128 characters in length, and must start with a letter or a Chinese character. It can contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * testEpg
   */
  egressProxyRuleName?: string;
  /**
   * @remarks
   * The priority of the egress rule within the phase to which it belongs. Valid values: 1 to 1000. A smaller value indicates a higher priority. Within the same phase of a rule group, the priority of rules must be unique.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      conditions: 'Conditions',
      description: 'Description',
      egressProxyRuleName: 'EgressProxyRuleName',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      conditions: { 'type': 'array', 'itemType': CreateEgressProxyRulesRequestEgressProxyRulesPostResponseConditions },
      description: 'string',
      egressProxyRuleName: 'string',
      priority: 'number',
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

export class CreateEgressProxyRulesRequestEgressProxyRulesPreDnsConditions extends $dara.Model {
  /**
   * @remarks
   * The key of the matching condition. The value must match the effective phase (Phase) of the rule and be used with an operator (ConditionOperator) of the corresponding category. Valid values:
   * 
   * - **request:SourceIp**: the source IP address of the request. Used with IP address operators. Supported in the PreDns and PreRequest phases.
   * 
   * - **request:DestinationDomain**: the destination domain name of the request. Used with string operators. Supported in the PreDns and PreRequest phases.
   * 
   * - **request:Http:Uri**: the URI of the HTTP request. Used with string operators. Supported in the PreRequest phase.
   * 
   * - **request:Http:Method**: the HTTP request method. Used with string operators. Supported in the PreRequest phase.
   * 
   * - **request:Http:UserAgent**: the User-Agent of the HTTP request. Used with string operators. Supported in the PreRequest phase.
   * 
   * - **request:Http:ContentType**: the Content-Type of the HTTP request. Used with string operators. Supported in the PreRequest phase.
   * 
   * - **request:Http:Header**: the HTTP request header. Used with string operators. Supported in the PreRequest phase. When you use this key, append the request header name to the key in the format of request:Http:Header/<HeaderName>.
   * 
   * - **request:Protocol**: the request protocol. Used with string operators. Supported in the PreRequest phase.
   * 
   * This parameter is required.
   * 
   * @example
   * request:DestinationDomain
   */
  conditionKey?: string;
  /**
   * @remarks
   * The operator of the matching condition. Must be used with a condition key (ConditionKey). Valid values:
   * 
   * - **StringEquals**: exact string match.
   * 
   * - **StringNotEquals**: string not equal.
   * 
   * - **StringEqualsIgnoreCase**: case-insensitive exact string match.
   * 
   * - **StringNotEqualsIgnoreCase**: case-insensitive string not equal.
   * 
   * - **StringPrefixMatch**: string prefix match.
   * 
   * - **StringPrefixMatchIgnoreCase**: case-insensitive string prefix match.
   * 
   * - **StringPrefixNotMatch**: string prefix not match.
   * 
   * - **StringPrefixNotMatchIgnoreCase**: case-insensitive string prefix not match.
   * 
   * - **StringSuffixMatch**: string suffix match.
   * 
   * - **StringSuffixMatchIgnoreCase**: case-insensitive string suffix match.
   * 
   * - **StringSuffixNotMatch**: string suffix not match.
   * 
   * - **StringSuffixNotMatchIgnoreCase**: case-insensitive string suffix not match.
   * 
   * - **StringRegexMatch**: string regular expression match.
   * 
   * - **StringRegexNotMatch**: string regular expression not match.
   * 
   * - **StringWildcardMatch**: string wildcard match.
   * 
   * - **StringWildcardMatchIgnoreCase**: case-insensitive string wildcard match.
   * 
   * - **StringWildcardNotMatch**: string wildcard not match.
   * 
   * - **StringWildcardNotMatchIgnoreCase**: case-insensitive string wildcard not match.
   * 
   * - **IpAddress**: the source IP address belongs to the specified IP address or CIDR block.
   * 
   * - **NotIpAddress**: the source IP address does not belong to the specified IP address or CIDR block.
   * 
   * This parameter is required.
   * 
   * @example
   * StringEquals
   */
  conditionOperator?: string;
  /**
   * @remarks
   * The list of condition values.
   * 
   * This parameter is required.
   */
  conditionValues?: string[];
  static names(): { [key: string]: string } {
    return {
      conditionKey: 'ConditionKey',
      conditionOperator: 'ConditionOperator',
      conditionValues: 'ConditionValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionKey: 'string',
      conditionOperator: 'string',
      conditionValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.conditionValues)) {
      $dara.Model.validateArray(this.conditionValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEgressProxyRulesRequestEgressProxyRulesPreDns extends $dara.Model {
  /**
   * @remarks
   * The action to perform on the matched traffic after the rule is hit. Valid values:
   * 
   * - **Allow**: allows the traffic that matches the rule.
   * 
   * - **Deny**: denies the traffic that matches the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * Allow
   */
  action?: string;
  /**
   * @remarks
   * The list of matching conditions for the rule. Each condition consists of a condition key (ConditionKey), an operator (ConditionOperator), and condition values (ConditionValues). The combination of a condition key and an operator must be unique within the same rule.
   * 
   * This parameter is required.
   */
  conditions?: CreateEgressProxyRulesRequestEgressProxyRulesPreDnsConditions[];
  /**
   * @remarks
   * The description of the egress rule. The description must be 2 to 256 characters in length and can contain Chinese characters, letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_).
   * 
   * @example
   * testEpg
   */
  description?: string;
  /**
   * @remarks
   * The name of the egress rule. The name must be 2 to 128 characters in length, and must start with a letter or a Chinese character. It can contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * testEpg
   */
  egressProxyRuleName?: string;
  /**
   * @remarks
   * The priority of the egress rule within the phase to which it belongs. Valid values: 1 to 1000. A smaller value indicates a higher priority. Within the same phase of a rule group, the priority of rules must be unique.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      conditions: 'Conditions',
      description: 'Description',
      egressProxyRuleName: 'EgressProxyRuleName',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      conditions: { 'type': 'array', 'itemType': CreateEgressProxyRulesRequestEgressProxyRulesPreDnsConditions },
      description: 'string',
      egressProxyRuleName: 'string',
      priority: 'number',
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

export class CreateEgressProxyRulesRequestEgressProxyRulesPreRequestConditions extends $dara.Model {
  /**
   * @remarks
   * The key of the matching condition. The value must match the effective phase (Phase) of the rule and be used with an operator (ConditionOperator) of the corresponding category. Valid values:
   * 
   * - **request:SourceIp**: the source IP address of the request. Used with IP address operators. Supported in the PreDns and PreRequest phases.
   * 
   * - **request:DestinationDomain**: the destination domain name of the request. Used with string operators. Supported in the PreDns and PreRequest phases.
   * 
   * - **request:Http:Uri**: the URI of the HTTP request. Used with string operators. Supported in the PreRequest phase.
   * 
   * - **request:Http:Method**: the HTTP request method. Used with string operators. Supported in the PreRequest phase.
   * 
   * - **request:Http:UserAgent**: the User-Agent of the HTTP request. Used with string operators. Supported in the PreRequest phase.
   * 
   * - **request:Http:ContentType**: the Content-Type of the HTTP request. Used with string operators. Supported in the PreRequest phase.
   * 
   * - **request:Http:Header**: the HTTP request header. Used with string operators. Supported in the PreRequest phase. When you use this key, append the request header name to the key in the format of request:Http:Header/<HeaderName>.
   * 
   * - **request:Protocol**: the request protocol. Used with string operators. Supported in the PreRequest phase.
   * 
   * This parameter is required.
   * 
   * @example
   * request:DestinationDomain
   */
  conditionKey?: string;
  /**
   * @remarks
   * The operator of the matching condition. Must be used with a condition key (ConditionKey). Valid values:
   * 
   * - **StringEquals**: exact string match.
   * 
   * - **StringNotEquals**: string not equal.
   * 
   * - **StringEqualsIgnoreCase**: case-insensitive exact string match.
   * 
   * - **StringNotEqualsIgnoreCase**: case-insensitive string not equal.
   * 
   * - **StringPrefixMatch**: string prefix match.
   * 
   * - **StringPrefixMatchIgnoreCase**: case-insensitive string prefix match.
   * 
   * - **StringPrefixNotMatch**: string prefix not match.
   * 
   * - **StringPrefixNotMatchIgnoreCase**: case-insensitive string prefix not match.
   * 
   * - **StringSuffixMatch**: string suffix match.
   * 
   * - **StringSuffixMatchIgnoreCase**: case-insensitive string suffix match.
   * 
   * - **StringSuffixNotMatch**: string suffix not match.
   * 
   * - **StringSuffixNotMatchIgnoreCase**: case-insensitive string suffix not match.
   * 
   * - **StringRegexMatch**: string regular expression match.
   * 
   * - **StringRegexNotMatch**: string regular expression not match.
   * 
   * - **StringWildcardMatch**: string wildcard match.
   * 
   * - **StringWildcardMatchIgnoreCase**: case-insensitive string wildcard match.
   * 
   * - **StringWildcardNotMatch**: string wildcard not match.
   * 
   * - **StringWildcardNotMatchIgnoreCase**: case-insensitive string wildcard not match.
   * 
   * - **IpAddress**: the source IP address belongs to the specified IP address or CIDR block.
   * 
   * - **NotIpAddress**: the source IP address does not belong to the specified IP address or CIDR block.
   * 
   * This parameter is required.
   * 
   * @example
   * StringEquals
   */
  conditionOperator?: string;
  /**
   * @remarks
   * The list of condition values.
   * 
   * This parameter is required.
   */
  conditionValues?: string[];
  static names(): { [key: string]: string } {
    return {
      conditionKey: 'ConditionKey',
      conditionOperator: 'ConditionOperator',
      conditionValues: 'ConditionValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionKey: 'string',
      conditionOperator: 'string',
      conditionValues: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.conditionValues)) {
      $dara.Model.validateArray(this.conditionValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEgressProxyRulesRequestEgressProxyRulesPreRequest extends $dara.Model {
  /**
   * @remarks
   * The action to perform on the matched traffic after the rule is hit. Valid values:
   * 
   * - **Allow**: allows the traffic that matches the rule.
   * 
   * - **Deny**: denies the traffic that matches the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * Allow
   */
  action?: string;
  /**
   * @remarks
   * The list of matching conditions for the rule. Each condition consists of a condition key (ConditionKey), an operator (ConditionOperator), and condition values (ConditionValues). The combination of a condition key and an operator must be unique within the same rule.
   * 
   * This parameter is required.
   */
  conditions?: CreateEgressProxyRulesRequestEgressProxyRulesPreRequestConditions[];
  /**
   * @remarks
   * The description of the egress rule. The description must be 2 to 256 characters in length, and can contain Chinese characters, letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_).
   * 
   * @example
   * testEpg
   */
  description?: string;
  /**
   * @remarks
   * The name of the egress rule. The name must be 2 to 128 characters in length, and must start with a letter or a Chinese character. It can contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * testEpg
   */
  egressProxyRuleName?: string;
  /**
   * @remarks
   * The priority of the egress rule within the phase to which it belongs. Valid values: 1 to 1000. A smaller value indicates a higher priority. Within the same phase of a rule group, the priority of rules must be unique.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      conditions: 'Conditions',
      description: 'Description',
      egressProxyRuleName: 'EgressProxyRuleName',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      conditions: { 'type': 'array', 'itemType': CreateEgressProxyRulesRequestEgressProxyRulesPreRequestConditions },
      description: 'string',
      egressProxyRuleName: 'string',
      priority: 'number',
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

export class CreateEgressProxyRulesRequestEgressProxyRules extends $dara.Model {
  /**
   * @remarks
   * The list of rules in the PostResponse phase (after the response is returned).
   */
  postResponse?: CreateEgressProxyRulesRequestEgressProxyRulesPostResponse[];
  /**
   * @remarks
   * The list of rules for the pre-DNS stage (before DNS resolution).
   */
  preDns?: CreateEgressProxyRulesRequestEgressProxyRulesPreDns[];
  /**
   * @remarks
   * The list of rules in the PreRequest stage (before request forwarding).
   */
  preRequest?: CreateEgressProxyRulesRequestEgressProxyRulesPreRequest[];
  static names(): { [key: string]: string } {
    return {
      postResponse: 'PostResponse',
      preDns: 'PreDns',
      preRequest: 'PreRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      postResponse: { 'type': 'array', 'itemType': CreateEgressProxyRulesRequestEgressProxyRulesPostResponse },
      preDns: { 'type': 'array', 'itemType': CreateEgressProxyRulesRequestEgressProxyRulesPreDns },
      preRequest: { 'type': 'array', 'itemType': CreateEgressProxyRulesRequestEgressProxyRulesPreRequest },
    };
  }

  validate() {
    if(Array.isArray(this.postResponse)) {
      $dara.Model.validateArray(this.postResponse);
    }
    if(Array.isArray(this.preDns)) {
      $dara.Model.validateArray(this.preDns);
    }
    if(Array.isArray(this.preRequest)) {
      $dara.Model.validateArray(this.preRequest);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEgressProxyRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > Note If you do not specify this parameter, the system automatically uses the RequestId of the API request as the client token. The RequestId of each API request is different.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B******
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run on the request. Valid values:
   * 
   * - **true**: performs a dry run. The system checks the request for potential issues, including missing required parameters, invalid request formats, and service limits, but does not create the rules. If the request fails the dry run, an error message is returned. If the request passes the dry run, the DryRunOperation error code is returned.
   * 
   * - **false** (default): performs a dry run and sends the request. If the request passes the dry run, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the egress proxy rule group.
   * 
   * This parameter is required.
   * 
   * @example
   * eprg-uf60966a9633667c****
   */
  egressProxyRuleGroupId?: string;
  /**
   * @remarks
   * The list of egress rules grouped by effective phase (PreDns, PreRequest, or PostResponse).
   * 
   * This parameter is required.
   */
  egressProxyRules?: CreateEgressProxyRulesRequestEgressProxyRules;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      egressProxyRuleGroupId: 'EgressProxyRuleGroupId',
      egressProxyRules: 'EgressProxyRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      egressProxyRuleGroupId: 'string',
      egressProxyRules: CreateEgressProxyRulesRequestEgressProxyRules,
    };
  }

  validate() {
    if(this.egressProxyRules && typeof (this.egressProxyRules as any).validate === 'function') {
      (this.egressProxyRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

