// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHttpIncomingRequestHeaderModificationRulesResponseBodyConfigsRequestHeaderModification extends $dara.Model {
  /**
   * @remarks
   * The name of the request header.
   * 
   * @example
   * headerName
   */
  name?: string;
  /**
   * @remarks
   * The action. Valid values:
   * 
   * *   add: adds a response header.
   * *   del: deletes a response header.
   * *   modify: modifies a response header.
   * 
   * @example
   * add
   */
  operation?: string;
  /**
   * @remarks
   * The type of the value. Valid values:
   * 
   * *   static
   * *   dynamic
   * 
   * @example
   * static
   */
  type?: string;
  /**
   * @remarks
   * The value of the request header.
   * 
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

export class ListHttpIncomingRequestHeaderModificationRulesResponseBodyConfigs extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 429422870243328
   */
  configId?: number;
  /**
   * @remarks
   * The type of the configuration. Valid values:
   * 
   * *   global: global configurations.
   * *   rule: rule configurations.
   * 
   * @example
   * rule
   */
  configType?: string;
  /**
   * @remarks
   * The configurations of modifying request headers. You can add, delete, or modify a request header.
   */
  requestHeaderModification?: ListHttpIncomingRequestHeaderModificationRulesResponseBodyConfigsRequestHeaderModification[];
  /**
   * @remarks
   * The content of the rule. A conditional expression is used to match a user request. You do not need to set this parameter when you add global configuration. Use cases:
   * 
   * *   true: Match all incoming requests.
   * *   Set the value to a custom expression, for example, (http.host eq "video.example.com"): Match the specified request.
   * 
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * Specifies whether to enable the rule. Valid values: You do not need to set this parameter when you add global configuration. Valid values:
   * 
   * *   on
   * *   off
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The rule name. You do not need to set this parameter when you add global configuration.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The order in which the rule is executed. A smaller value gives priority to the rule.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * The version number of the website configurations. You can use this parameter to specify a version of your website to apply the feature settings. By default, version 0 is used.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      configType: 'ConfigType',
      requestHeaderModification: 'RequestHeaderModification',
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
      requestHeaderModification: { 'type': 'array', 'itemType': ListHttpIncomingRequestHeaderModificationRulesResponseBodyConfigsRequestHeaderModification },
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

export class ListHttpIncomingRequestHeaderModificationRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration list of the incoming HTTP request header modification.
   */
  configs?: ListHttpIncomingRequestHeaderModificationRulesResponseBodyConfigs[];
  /**
   * @remarks
   * The number of the returned page. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 500. Valid values: 1 to 500.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7FB6EBC8-8849-5FC6-890E-3A761A5CD42D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': ListHttpIncomingRequestHeaderModificationRulesResponseBodyConfigs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

