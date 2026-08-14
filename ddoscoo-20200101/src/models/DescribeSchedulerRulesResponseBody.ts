// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSchedulerRulesResponseBodySchedulerRulesParamParamData extends $dara.Model {
  cloudInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      cloudInstanceId: 'CloudInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSchedulerRulesResponseBodySchedulerRulesParam extends $dara.Model {
  paramData?: DescribeSchedulerRulesResponseBodySchedulerRulesParamParamData;
  paramType?: string;
  static names(): { [key: string]: string } {
    return {
      paramData: 'ParamData',
      paramType: 'ParamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramData: DescribeSchedulerRulesResponseBodySchedulerRulesParamParamData,
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

export class DescribeSchedulerRulesResponseBodySchedulerRulesRules extends $dara.Model {
  line?: string;
  priority?: number;
  regionId?: string;
  restoreDelay?: number;
  status?: number;
  type?: string;
  value?: string;
  valueType?: number;
  static names(): { [key: string]: string } {
    return {
      line: 'Line',
      priority: 'Priority',
      regionId: 'RegionId',
      restoreDelay: 'RestoreDelay',
      status: 'Status',
      type: 'Type',
      value: 'Value',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      line: 'string',
      priority: 'number',
      regionId: 'string',
      restoreDelay: 'number',
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

export class DescribeSchedulerRulesResponseBodySchedulerRules extends $dara.Model {
  cname?: string;
  param?: DescribeSchedulerRulesResponseBodySchedulerRulesParam;
  ruleName?: string;
  ruleType?: string;
  rules?: DescribeSchedulerRulesResponseBodySchedulerRulesRules[];
  static names(): { [key: string]: string } {
    return {
      cname: 'Cname',
      param: 'Param',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      rules: 'Rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cname: 'string',
      param: DescribeSchedulerRulesResponseBodySchedulerRulesParam,
      ruleName: 'string',
      ruleType: 'string',
      rules: { 'type': 'array', 'itemType': DescribeSchedulerRulesResponseBodySchedulerRulesRules },
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

export class DescribeSchedulerRulesResponseBody extends $dara.Model {
  requestId?: string;
  schedulerRules?: DescribeSchedulerRulesResponseBodySchedulerRules[];
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
      schedulerRules: { 'type': 'array', 'itemType': DescribeSchedulerRulesResponseBodySchedulerRules },
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

