// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHttpResponseHeaderModificationRulesResponseBodyConfigsResponseHeaderModification extends $dara.Model {
  /**
   * @remarks
   * The response header name.
   * 
   * @example
   * headerName
   */
  name?: string;
  /**
   * @remarks
   * The modification operation. Valid values:
   * 
   * - `add`: Adds a header.
   * 
   * - `del`: Removes a header.
   * 
   * - `modify`: Modifies a header.
   * 
   * @example
   * add
   */
  operation?: string;
  /**
   * @remarks
   * The value type. Valid values:
   * 
   * - `static`: Static mode.
   * 
   * - `dynamic`: Dynamic mode.
   * 
   * @example
   * static
   */
  type?: string;
  /**
   * @remarks
   * The response header value.
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

export class ListHttpResponseHeaderModificationRulesResponseBodyConfigs extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 35281609698****
   */
  configId?: number;
  /**
   * @remarks
   * The type of configuration. Valid values:
   * 
   * - `global`: A global configuration.
   * 
   * - `rule`: A rule configuration.
   * 
   * @example
   * rule
   */
  configType?: string;
  /**
   * @remarks
   * The response header modifications. You can add, remove, or modify headers.
   */
  responseHeaderModification?: ListHttpResponseHeaderModificationRulesResponseBodyConfigsResponseHeaderModification[];
  /**
   * @remarks
   * The conditional expression that matches user requests. This parameter is not required for a global configuration.
   * 
   * - To match all incoming requests, set the value to `true`.
   * 
   * - To match specific requests, set a custom expression. Example: `(http.host eq "video.example.com")`
   * 
   * @example
   * (http.host eq "video.example.com")
   */
  rule?: string;
  /**
   * @remarks
   * Whether the rule is enabled. This parameter is not required for a global configuration. Valid values:
   * 
   * - `on`: Enabled.
   * 
   * - `off`: Disabled.
   * 
   * @example
   * on
   */
  ruleEnable?: string;
  /**
   * @remarks
   * The name of the rule. This parameter is not required for a global configuration.
   * 
   * @example
   * rule_example
   */
  ruleName?: string;
  /**
   * @remarks
   * The execution priority of the rule. Rules with smaller values have higher priority.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * The version number of the site configuration. For sites with version management enabled, this specifies the version to which the configuration applies. The default is 0.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      configType: 'ConfigType',
      responseHeaderModification: 'ResponseHeaderModification',
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
      responseHeaderModification: { 'type': 'array', 'itemType': ListHttpResponseHeaderModificationRulesResponseBodyConfigsResponseHeaderModification },
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
      siteVersion: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.responseHeaderModification)) {
      $dara.Model.validateArray(this.responseHeaderModification);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListHttpResponseHeaderModificationRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of HTTP response header modification rules.
   */
  configs?: ListHttpResponseHeaderModificationRulesResponseBodyConfigs[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
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
   * CB1A380B-09F0-41BB-280B-72F8FD6DA2FE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 14
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages.
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
      configs: { 'type': 'array', 'itemType': ListHttpResponseHeaderModificationRulesResponseBodyConfigs },
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

