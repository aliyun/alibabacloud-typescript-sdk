// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMaskingRulesResponseBodyDataRulesRuleConfig extends $dara.Model {
  columns?: string[];
  databases?: string[];
  tables?: string[];
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      databases: 'Databases',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': 'string' },
      databases: { 'type': 'array', 'itemType': 'string' },
      tables: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(Array.isArray(this.databases)) {
      $dara.Model.validateArray(this.databases);
    }
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMaskingRulesResponseBodyDataRules extends $dara.Model {
  /**
   * @example
   * aes-128-gcm
   */
  defaultAlgo?: string;
  /**
   * @example
   * true
   */
  enabled?: string;
  /**
   * @example
   * [{"name": "aes-128-gcm"},
   *         {"name":"sm4-128-gcm"}]
   */
  maskingAlgo?: string;
  ruleConfig?: DescribeMaskingRulesResponseBodyDataRulesRuleConfig;
  /**
   * @example
   * test
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      defaultAlgo: 'DefaultAlgo',
      enabled: 'Enabled',
      maskingAlgo: 'MaskingAlgo',
      ruleConfig: 'RuleConfig',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultAlgo: 'string',
      enabled: 'string',
      maskingAlgo: 'string',
      ruleConfig: DescribeMaskingRulesResponseBodyDataRulesRuleConfig,
      ruleName: 'string',
    };
  }

  validate() {
    if(this.ruleConfig && typeof (this.ruleConfig as any).validate === 'function') {
      (this.ruleConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMaskingRulesResponseBodyData extends $dara.Model {
  rules?: DescribeMaskingRulesResponseBodyDataRules[];
  static names(): { [key: string]: string } {
    return {
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rules: { 'type': 'array', 'itemType': DescribeMaskingRulesResponseBodyDataRules },
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

export class DescribeMaskingRulesResponseBody extends $dara.Model {
  data?: DescribeMaskingRulesResponseBodyData;
  /**
   * @example
   * 69779000-57A4-38F6-BF85-**********A2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeMaskingRulesResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

