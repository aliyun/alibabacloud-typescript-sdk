// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHttpIncomingResponseHeaderModificationRulesResponseBodyConfigsResponseHeaderModification extends $dara.Model {
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

export class ListHttpIncomingResponseHeaderModificationRulesResponseBodyConfigs extends $dara.Model {
  /**
   * @example
   * 430559776208896
   */
  configId?: number;
  /**
   * @example
   * rule
   */
  configType?: string;
  responseHeaderModification?: ListHttpIncomingResponseHeaderModificationRulesResponseBodyConfigsResponseHeaderModification[];
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
      responseHeaderModification: { 'type': 'array', 'itemType': ListHttpIncomingResponseHeaderModificationRulesResponseBodyConfigsResponseHeaderModification },
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

export class ListHttpIncomingResponseHeaderModificationRulesResponseBody extends $dara.Model {
  configs?: ListHttpIncomingResponseHeaderModificationRulesResponseBodyConfigs[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * CF02C6F6-DB59-5438-8C05-3CE42DFCB0AD
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  /**
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
      configs: { 'type': 'array', 'itemType': ListHttpIncomingResponseHeaderModificationRulesResponseBodyConfigs },
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

