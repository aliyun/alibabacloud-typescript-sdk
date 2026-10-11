// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEgressProxyRuleGroupRequestEgressProxyRulesPostResponseConditions extends $dara.Model {
  /**
   * @remarks
   * The key of the matching condition. The value must match the phase of the rule and be used with an operator (ConditionOperator) of the corresponding category. Valid values:
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
   * - **request:Http:Header**: the HTTP request header. Used with string operators. Supported in the PreRequest phase. When you use this key, append the header name to the key in the format of request:Http:Header/<HeaderName>.
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
   * The operator of the matching condition. It must be used with a condition key (ConditionKey). Valid values:
   * 
   * - **StringEquals**: exact string match.
   * 
   * - **StringNotEquals**: string inequality.
   * 
   * - **StringEqualsIgnoreCase**: case-insensitive exact string match.
   * 
   * - **StringNotEqualsIgnoreCase**: case-insensitive string inequality.
   * 
   * - **StringPrefixMatch**: string prefix match.
   * 
   * - **StringPrefixMatchIgnoreCase**: case-insensitive string prefix match.
   * 
   * - **StringPrefixNotMatch**: string prefix mismatch.
   * 
   * - **StringPrefixNotMatchIgnoreCase**: case-insensitive string prefix mismatch.
   * 
   * - **StringSuffixMatch**: string suffix match.
   * 
   * - **StringSuffixMatchIgnoreCase**: case-insensitive string suffix match.
   * 
   * - **StringSuffixNotMatch**: string suffix mismatch.
   * 
   * - **StringSuffixNotMatchIgnoreCase**: case-insensitive string suffix mismatch.
   * 
   * - **StringRegexMatch**: string regular expression match.
   * 
   * - **StringRegexNotMatch**: string regular expression mismatch.
   * 
   * - **StringWildcardMatch**: string wildcard match.
   * 
   * - **StringWildcardMatchIgnoreCase**: case-insensitive string wildcard match.
   * 
   * - **StringWildcardNotMatch**: string wildcard mismatch.
   * 
   * - **StringWildcardNotMatchIgnoreCase**: case-insensitive string wildcard mismatch.
   * 
   * - **IpAddress**: The source IP address belongs to the specified IP address or CIDR block.
   * 
   * - **NotIpAddress**: The source IP address does not belong to the specified IP address or CIDR block.
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

export class CreateEgressProxyRuleGroupRequestEgressProxyRulesPostResponse extends $dara.Model {
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
  conditions?: CreateEgressProxyRuleGroupRequestEgressProxyRulesPostResponseConditions[];
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
   * The name of the egress rule. The name must be 2 to 128 characters in length and must start with a letter or a Chinese character. It can contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * testEpg
   */
  egressProxyRuleName?: string;
  /**
   * @remarks
   * The priority of the egress rule within its phase. Valid values: 1 to 1000. A smaller value indicates a higher priority. The priority must be unique within the same phase of a rule group.
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
      conditions: { 'type': 'array', 'itemType': CreateEgressProxyRuleGroupRequestEgressProxyRulesPostResponseConditions },
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

export class CreateEgressProxyRuleGroupRequestEgressProxyRulesPreDnsConditions extends $dara.Model {
  /**
   * @remarks
   * The key of the matching condition. The value must match the phase of the rule and be used with an operator (ConditionOperator) of the corresponding category. Valid values:
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
   * - **request:Http:Header**: the HTTP request header. Used with string operators. Supported in the PreRequest phase. When you use this key, append the header name to the key in the format of request:Http:Header/<HeaderName>.
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
   * The operator of the matching condition. It must be used with a condition key (ConditionKey). Valid values:
   * 
   * - **StringEquals**: exact string match.
   * 
   * - **StringNotEquals**: string inequality.
   * 
   * - **StringEqualsIgnoreCase**: case-insensitive exact string match.
   * 
   * - **StringNotEqualsIgnoreCase**: case-insensitive string inequality.
   * 
   * - **StringPrefixMatch**: string prefix match.
   * 
   * - **StringPrefixMatchIgnoreCase**: case-insensitive string prefix match.
   * 
   * - **StringPrefixNotMatch**: string prefix mismatch.
   * 
   * - **StringPrefixNotMatchIgnoreCase**: case-insensitive string prefix mismatch.
   * 
   * - **StringSuffixMatch**: string suffix match.
   * 
   * - **StringSuffixMatchIgnoreCase**: case-insensitive string suffix match.
   * 
   * - **StringSuffixNotMatch**: string suffix mismatch.
   * 
   * - **StringSuffixNotMatchIgnoreCase**: case-insensitive string suffix mismatch.
   * 
   * - **StringRegexMatch**: string regular expression match.
   * 
   * - **StringRegexNotMatch**: string regular expression mismatch.
   * 
   * - **StringWildcardMatch**: string wildcard match.
   * 
   * - **StringWildcardMatchIgnoreCase**: case-insensitive string wildcard match.
   * 
   * - **StringWildcardNotMatch**: string wildcard mismatch.
   * 
   * - **StringWildcardNotMatchIgnoreCase**: case-insensitive string wildcard mismatch.
   * 
   * - **IpAddress**: The source IP address belongs to the specified IP address or CIDR block.
   * 
   * - **NotIpAddress**: The source IP address does not belong to the specified IP address or CIDR block.
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

export class CreateEgressProxyRuleGroupRequestEgressProxyRulesPreDns extends $dara.Model {
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
  conditions?: CreateEgressProxyRuleGroupRequestEgressProxyRulesPreDnsConditions[];
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
   * The name of the egress rule. The name must be 2 to 128 characters in length and must start with a letter or a Chinese character. It can contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * testEpg
   */
  egressProxyRuleName?: string;
  /**
   * @remarks
   * The priority of the egress rule within its phase. Valid values: 1 to 1000. A smaller value indicates a higher priority. The priority must be unique within the same phase of a rule group.
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
      conditions: { 'type': 'array', 'itemType': CreateEgressProxyRuleGroupRequestEgressProxyRulesPreDnsConditions },
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

export class CreateEgressProxyRuleGroupRequestEgressProxyRulesPreRequestConditions extends $dara.Model {
  /**
   * @remarks
   * The key of the matching condition. The value must match the phase of the rule and be used with an operator (ConditionOperator) of the corresponding category. Valid values:
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
   * - **request:Http:Header**: the HTTP request header. Used with string operators. Supported in the PreRequest phase. When you use this key, append the header name to the key in the format of request:Http:Header/<HeaderName>.
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
   * The operator of the matching condition. It must be used with a condition key (ConditionKey). Valid values:
   * 
   * - **StringEquals**: exact string match.
   * 
   * - **StringNotEquals**: string inequality.
   * 
   * - **StringEqualsIgnoreCase**: case-insensitive exact string match.
   * 
   * - **StringNotEqualsIgnoreCase**: case-insensitive string inequality.
   * 
   * - **StringPrefixMatch**: string prefix match.
   * 
   * - **StringPrefixMatchIgnoreCase**: case-insensitive string prefix match.
   * 
   * - **StringPrefixNotMatch**: string prefix mismatch.
   * 
   * - **StringPrefixNotMatchIgnoreCase**: case-insensitive string prefix mismatch.
   * 
   * - **StringSuffixMatch**: string suffix match.
   * 
   * - **StringSuffixMatchIgnoreCase**: case-insensitive string suffix match.
   * 
   * - **StringSuffixNotMatch**: string suffix mismatch.
   * 
   * - **StringSuffixNotMatchIgnoreCase**: case-insensitive string suffix mismatch.
   * 
   * - **StringRegexMatch**: string regular expression match.
   * 
   * - **StringRegexNotMatch**: string regular expression mismatch.
   * 
   * - **StringWildcardMatch**: string wildcard match.
   * 
   * - **StringWildcardMatchIgnoreCase**: case-insensitive string wildcard match.
   * 
   * - **StringWildcardNotMatch**: string wildcard mismatch.
   * 
   * - **StringWildcardNotMatchIgnoreCase**: case-insensitive string wildcard mismatch.
   * 
   * - **IpAddress**: The source IP address belongs to the specified IP address or CIDR block.
   * 
   * - **NotIpAddress**: The source IP address does not belong to the specified IP address or CIDR block.
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

export class CreateEgressProxyRuleGroupRequestEgressProxyRulesPreRequest extends $dara.Model {
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
  conditions?: CreateEgressProxyRuleGroupRequestEgressProxyRulesPreRequestConditions[];
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
   * The name of the egress rule. The name must be 2 to 128 characters in length and must start with a letter or a Chinese character. It can contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * testEpg
   */
  egressProxyRuleName?: string;
  /**
   * @remarks
   * The priority of the egress rule within its phase. Valid values: 1 to 1000. A smaller value indicates a higher priority. The priority must be unique within the same phase of a rule group.
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
      conditions: { 'type': 'array', 'itemType': CreateEgressProxyRuleGroupRequestEgressProxyRulesPreRequestConditions },
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

export class CreateEgressProxyRuleGroupRequestEgressProxyRules extends $dara.Model {
  /**
   * @remarks
   * The list of rules in the PostResponse phase (after the response is returned).
   */
  postResponse?: CreateEgressProxyRuleGroupRequestEgressProxyRulesPostResponse[];
  /**
   * @remarks
   * The list of rules for the Pre-DNS stage (before DNS resolution).
   */
  preDns?: CreateEgressProxyRuleGroupRequestEgressProxyRulesPreDns[];
  /**
   * @remarks
   * The list of rules in the PreRequest stage, which is executed before the request is forwarded.
   */
  preRequest?: CreateEgressProxyRuleGroupRequestEgressProxyRulesPreRequest[];
  static names(): { [key: string]: string } {
    return {
      postResponse: 'PostResponse',
      preDns: 'PreDns',
      preRequest: 'PreRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      postResponse: { 'type': 'array', 'itemType': CreateEgressProxyRuleGroupRequestEgressProxyRulesPostResponse },
      preDns: { 'type': 'array', 'itemType': CreateEgressProxyRuleGroupRequestEgressProxyRulesPreDns },
      preRequest: { 'type': 'array', 'itemType': CreateEgressProxyRuleGroupRequestEgressProxyRulesPreRequest },
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

export class CreateEgressProxyRuleGroupRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. It can be up to 128 characters in length, cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * testKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. It can be up to 256 characters in length and cannot contain `http://` or `https://`.
   * 
   * @example
   * testValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class CreateEgressProxyRuleGroupRequest extends $dara.Model {
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
   * The description of the egress rule group. The description must be 2 to 256 characters in length and can contain Chinese characters, letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_).
   * 
   * @example
   * testEpg
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run. Valid values:
   * 
   * - **true**: sends a dry run request and does not create the rule group. The system checks whether required parameters are specified, the request format is valid, and service limits are met. If the request fails the dry run, an error message is returned. If the request passes the dry run, the DryRunOperation error code is returned.
   * 
   * - **false** (default): sends a normal request. If the request passes the dry run, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the egress IP address pool associated with the egress rule group.
   * 
   * @example
   * eppool-gw80d96a96ca0b00****
   */
  egressProxyIpPoolId?: string;
  /**
   * @remarks
   * The name of the egress rule group. The name must be 2 to 128 characters in length and must start with a letter or a Chinese character. It can contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * testEpg
   */
  egressProxyRuleGroupName?: string;
  /**
   * @remarks
   * The list of egress rules grouped by phase (PreDns, PreRequest, and PostResponse).
   */
  egressProxyRules?: CreateEgressProxyRuleGroupRequestEgressProxyRules;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-gw80bb6a94f835db****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: CreateEgressProxyRuleGroupRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      egressProxyIpPoolId: 'EgressProxyIpPoolId',
      egressProxyRuleGroupName: 'EgressProxyRuleGroupName',
      egressProxyRules: 'EgressProxyRules',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      egressProxyIpPoolId: 'string',
      egressProxyRuleGroupName: 'string',
      egressProxyRules: CreateEgressProxyRuleGroupRequestEgressProxyRules,
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateEgressProxyRuleGroupRequestTag },
    };
  }

  validate() {
    if(this.egressProxyRules && typeof (this.egressProxyRules as any).validate === 'function') {
      (this.egressProxyRules as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

