// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnLinkageRulesResponseBodySchedulerRulesCdnLinkageRuleParamParamData extends $dara.Model {
  /**
   * @example
   * 100
   */
  accessQps?: number;
  /**
   * @example
   * 0
   */
  upstreamQps?: number;
  static names(): { [key: string]: string } {
    return {
      accessQps: 'AccessQps',
      upstreamQps: 'UpstreamQps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessQps: 'number',
      upstreamQps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnLinkageRulesResponseBodySchedulerRulesCdnLinkageRuleParam extends $dara.Model {
  paramData?: DescribeCdnLinkageRulesResponseBodySchedulerRulesCdnLinkageRuleParamParamData;
  /**
   * @example
   * cdn
   */
  paramType?: string;
  static names(): { [key: string]: string } {
    return {
      paramData: 'ParamData',
      paramType: 'ParamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramData: DescribeCdnLinkageRulesResponseBodySchedulerRulesCdnLinkageRuleParamParamData,
      paramType: 'string',
    };
  }

  validate() {
    if(this.paramData && typeof (this.paramData as any).validate === 'function') {
      (this.paramData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnLinkageRulesResponseBodySchedulerRulesCdnLinkageRuleRules extends $dara.Model {
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * ""
   */
  regionId?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * A
   */
  type?: string;
  /**
   * @example
   * 203.107.XX.XX
   */
  value?: string;
  /**
   * @example
   * 1
   */
  valueType?: number;
  static names(): { [key: string]: string } {
    return {
      priority: 'Priority',
      regionId: 'RegionId',
      status: 'Status',
      type: 'Type',
      value: 'Value',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priority: 'number',
      regionId: 'string',
      status: 'number',
      type: 'string',
      value: 'string',
      valueType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnLinkageRulesResponseBodySchedulerRulesCdnLinkageRule extends $dara.Model {
  /**
   * @example
   * example.aliyundoc.com
   */
  cname?: string;
  param?: DescribeCdnLinkageRulesResponseBodySchedulerRulesCdnLinkageRuleParam;
  /**
   * @example
   * testDDos
   */
  ruleName?: string;
  rules?: DescribeCdnLinkageRulesResponseBodySchedulerRulesCdnLinkageRuleRules[];
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      param: 'Param',
      ruleName: 'RuleName',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      param: DescribeCdnLinkageRulesResponseBodySchedulerRulesCdnLinkageRuleParam,
      ruleName: 'string',
      rules: { 'type': 'array', 'itemType': DescribeCdnLinkageRulesResponseBodySchedulerRulesCdnLinkageRuleRules },
    };
  }

  validate() {
    if(this.param && typeof (this.param as any).validate === 'function') {
      (this.param as any).validate();
    }
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnLinkageRulesResponseBodySchedulerRules extends $dara.Model {
  /**
   * @example
   * 0
   */
  cdnLinkageEnable?: number;
  cdnLinkageRule?: DescribeCdnLinkageRulesResponseBodySchedulerRulesCdnLinkageRule;
  /**
   * @example
   * example.aliyundoc.com
   */
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      cdnLinkageEnable: 'CdnLinkageEnable',
      cdnLinkageRule: 'CdnLinkageRule',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdnLinkageEnable: 'number',
      cdnLinkageRule: DescribeCdnLinkageRulesResponseBodySchedulerRulesCdnLinkageRule,
      domain: 'string',
    };
  }

  validate() {
    if(this.cdnLinkageRule && typeof (this.cdnLinkageRule as any).validate === 'function') {
      (this.cdnLinkageRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnLinkageRulesResponseBody extends $dara.Model {
  /**
   * @example
   * 02FE96D9-C77B-5735-B36D-329E052C8047
   */
  requestId?: string;
  schedulerRules?: DescribeCdnLinkageRulesResponseBodySchedulerRules[];
  /**
   * @example
   * 12
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      schedulerRules: 'SchedulerRules',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      schedulerRules: { 'type': 'array', 'itemType': DescribeCdnLinkageRulesResponseBodySchedulerRules },
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.schedulerRules)) {
      $dara.Model.validateArray(this.schedulerRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

