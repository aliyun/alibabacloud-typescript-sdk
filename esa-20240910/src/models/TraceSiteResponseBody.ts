// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TraceSiteResponseBodyTraceTrace extends $dara.Model {
  /**
   * @example
   * deny
   */
  action?: string;
  /**
   * @example
   * rule
   */
  configType?: string;
  /**
   * @example
   * cn300
   */
  ddosLevelDomestic?: string;
  /**
   * @example
   * unlimit
   */
  ddosLevelOversea?: string;
  /**
   * @example
   * Production
   */
  envName?: string;
  /**
   * @example
   * (ip.geoip.country eq \\"CN\\")
   */
  expression?: string;
  /**
   * @example
   * week
   */
  level?: string;
  /**
   * @example
   * Ib.test.example.com
   */
  loadBalancerName?: string;
  /**
   * @example
   * 21212.origin-pool.example.com
   */
  originPoolName?: string;
  /**
   * @example
   * test.1097011697834102
   */
  routineId?: string;
  /**
   * @example
   * 1297141
   */
  ruleId?: number;
  /**
   * @example
   * cache_test
   */
  ruleName?: string;
  /**
   * @example
   * 0
   */
  siteVersion?: number;
  /**
   * @example
   * l4_ddos
   */
  type?: string;
  /**
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
   * @example
   * true
   */
  matched?: boolean;
  /**
   * @example
   * SecRules
   */
  stepModuleName?: string;
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
   * @example
   * 9574AFDC-ABF1-5068-AAE3-6958CEBD8740
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  /**
   * @example
   * true
   */
  success?: boolean;
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

