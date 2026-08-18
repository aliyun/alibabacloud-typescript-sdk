// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TraceSiteResponseBodyTraceTrace extends $dara.Model {
  /**
   * @remarks
   * The action to perform.
   * 
   * @example
   * deny
   */
  action?: string;
  /**
   * @remarks
   * The configuration type.
   * 
   * @example
   * rule
   */
  configType?: string;
  /**
   * @remarks
   * The mitigation capability (China).
   * 
   * @example
   * cn300
   */
  ddosLevelDomestic?: string;
  /**
   * @remarks
   * The mitigation capability (global, excluding China).
   * 
   * @example
   * unlimit
   */
  ddosLevelOversea?: string;
  /**
   * @remarks
   * The environment.
   * 
   * @example
   * Production
   */
  envName?: string;
  /**
   * @remarks
   * The rule expression.
   * 
   * @example
   * (ip.geoip.country eq \\"CN\\")
   */
  expression?: string;
  /**
   * @remarks
   * The mitigation capability.
   * 
   * @example
   * week
   */
  level?: string;
  /**
   * @remarks
   * The load balancer domain name.
   * 
   * @example
   * Ib.test.example.com
   */
  loadBalancerName?: string;
  /**
   * @remarks
   * The name of the origin pool.
   * 
   * @example
   * 21212.origin-pool.example.com
   */
  originPoolName?: string;
  /**
   * @remarks
   * The routine ID.
   * 
   * @example
   * test.1097011697834102
   */
  routineId?: string;
  /**
   * @remarks
   * The security rule ID.
   * 
   * @example
   * 1297141
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the matched rule.
   * 
   * @example
   * cache_test
   */
  ruleName?: string;
  /**
   * @remarks
   * The version.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  /**
   * @remarks
   * The security-related rule type.
   * 
   * @example
   * l4_ddos
   */
  type?: string;
  /**
   * @remarks
   * The value specified in the IP access rule.
   * 
   * @example
   * 1.1.1.1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      configType: 'ConfigType',
      ddosLevelDomestic: 'DdosLevelDomestic',
      ddosLevelOversea: 'DdosLevelOversea',
      envName: 'EnvName',
      expression: 'Expression',
      level: 'Level',
      loadBalancerName: 'LoadBalancerName',
      originPoolName: 'OriginPoolName',
      routineId: 'RoutineId',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      siteVersion: 'SiteVersion',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      configType: 'string',
      ddosLevelDomestic: 'string',
      ddosLevelOversea: 'string',
      envName: 'string',
      expression: 'string',
      level: 'string',
      loadBalancerName: 'string',
      originPoolName: 'string',
      routineId: 'string',
      ruleId: 'number',
      ruleName: 'string',
      siteVersion: 'number',
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

export class TraceSiteResponseBodyTrace extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the module is matched. Valid values: true and false.
   * 
   * @example
   * true
   */
  matched?: boolean;
  /**
   * @remarks
   * The feature module.
   * 
   * @example
   * SecRules
   */
  stepModuleName?: string;
  /**
   * @remarks
   * The matching results of rules in the feature module.
   */
  trace?: TraceSiteResponseBodyTraceTrace[];
  static names(): { [key: string]: string } {
    return {
      matched: 'Matched',
      stepModuleName: 'StepModuleName',
      trace: 'Trace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matched: 'boolean',
      stepModuleName: 'string',
      trace: { 'type': 'array', 'itemType': TraceSiteResponseBodyTraceTrace },
    };
  }

  validate() {
    if(Array.isArray(this.trace)) {
      $dara.Model.validateArray(this.trace);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TraceSiteResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9574AFDC-ABF1-5068-AAE3-6958CEBD8740
   */
  requestId?: string;
  /**
   * @remarks
   * The HTTP status code of the request.
   * 
   * @example
   * 200
   */
  statusCode?: number;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace information of the call chain.
   */
  trace?: TraceSiteResponseBodyTrace[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statusCode: 'StatusCode',
      success: 'Success',
      trace: 'Trace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statusCode: 'number',
      success: 'boolean',
      trace: { 'type': 'array', 'itemType': TraceSiteResponseBodyTrace },
    };
  }

  validate() {
    if(Array.isArray(this.trace)) {
      $dara.Model.validateArray(this.trace);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

