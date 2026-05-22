// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImageTransformsResponseBodyConfigs extends $dara.Model {
  /**
   * @example
   * on
   */
  autoAvif?: string;
  /**
   * @example
   * on
   */
  autoWebp?: string;
  configId?: number;
  configType?: string;
  enable?: string;
  rule?: string;
  ruleEnable?: string;
  ruleName?: string;
  sequence?: number;
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      autoAvif: 'AutoAvif',
      autoWebp: 'AutoWebp',
      configId: 'ConfigId',
      configType: 'ConfigType',
      enable: 'Enable',
      rule: 'Rule',
      ruleEnable: 'RuleEnable',
      ruleName: 'RuleName',
      sequence: 'Sequence',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoAvif: 'string',
      autoWebp: 'string',
      configId: 'number',
      configType: 'string',
      enable: 'string',
      rule: 'string',
      ruleEnable: 'string',
      ruleName: 'string',
      sequence: 'number',
      siteVersion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageTransformsResponseBody extends $dara.Model {
  configs?: ListImageTransformsResponseBodyConfigs[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
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
      configs: { 'type': 'array', 'itemType': ListImageTransformsResponseBodyConfigs },
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

