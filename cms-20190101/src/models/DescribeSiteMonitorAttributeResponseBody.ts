// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSiteMonitorAttributeResponseBodyMetricRulesMetricRule extends $dara.Model {
  actionEnable?: string;
  alarmActions?: string;
  comparisonOperator?: string;
  dimensions?: string;
  evaluationCount?: string;
  expression?: string;
  level?: string;
  metricName?: string;
  namespace?: string;
  okActions?: string;
  period?: string;
  ruleId?: string;
  ruleName?: string;
  stateValue?: string;
  statistics?: string;
  threshold?: string;
  static names(): { [key: string]: string } {
    return {
      actionEnable: 'ActionEnable',
      alarmActions: 'AlarmActions',
      comparisonOperator: 'ComparisonOperator',
      dimensions: 'Dimensions',
      evaluationCount: 'EvaluationCount',
      expression: 'Expression',
      level: 'Level',
      metricName: 'MetricName',
      namespace: 'Namespace',
      okActions: 'OkActions',
      period: 'Period',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      stateValue: 'StateValue',
      statistics: 'Statistics',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionEnable: 'string',
      alarmActions: 'string',
      comparisonOperator: 'string',
      dimensions: 'string',
      evaluationCount: 'string',
      expression: 'string',
      level: 'string',
      metricName: 'string',
      namespace: 'string',
      okActions: 'string',
      period: 'string',
      ruleId: 'string',
      ruleName: 'string',
      stateValue: 'string',
      statistics: 'string',
      threshold: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodyMetricRules extends $dara.Model {
  metricRule?: DescribeSiteMonitorAttributeResponseBodyMetricRulesMetricRule[];
  static names(): { [key: string]: string } {
    return {
      metricRule: 'MetricRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricRule: { 'type': 'array', 'itemType': DescribeSiteMonitorAttributeResponseBodyMetricRulesMetricRule },
    };
  }

  validate() {
    if(Array.isArray(this.metricRule)) {
      $dara.Model.validateArray(this.metricRule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsCustomScheduleDays extends $dara.Model {
  days?: number[];
  static names(): { [key: string]: string } {
    return {
      days: 'days',
    };
  }

  static types(): { [key: string]: any } {
    return {
      days: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.days)) {
      $dara.Model.validateArray(this.days);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsCustomSchedule extends $dara.Model {
  days?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsCustomScheduleDays;
  /**
   * @remarks
   * The custom monitoring end time.
   * 
   * Unit: hours.
   * 
   * @example
   * 18
   */
  endHour?: number;
  /**
   * @remarks
   * The custom monitoring start time.
   * 
   * Unit: hours.
   * 
   * @example
   * 8
   */
  startHour?: number;
  /**
   * @remarks
   * The time zone for custom monitoring.
   * 
   * @example
   * local
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      days: 'days',
      endHour: 'end_hour',
      startHour: 'start_hour',
      timeZone: 'time_zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      days: DescribeSiteMonitorAttributeResponseBodySiteMonitorsCustomScheduleDays,
      endHour: 'number',
      startHour: 'number',
      timeZone: 'string',
    };
  }

  validate() {
    if(this.days && typeof (this.days as any).validate === 'function') {
      (this.days as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsIspCitiesIspCity extends $dara.Model {
  city?: string;
  cityName?: string;
  isp?: string;
  ispName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      cityName: 'CityName',
      isp: 'Isp',
      ispName: 'IspName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      cityName: 'string',
      isp: 'string',
      ispName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsIspCities extends $dara.Model {
  ispCity?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsIspCitiesIspCity[];
  static names(): { [key: string]: string } {
    return {
      ispCity: 'IspCity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ispCity: { 'type': 'array', 'itemType': DescribeSiteMonitorAttributeResponseBodySiteMonitorsIspCitiesIspCity },
    };
  }

  validate() {
    if(Array.isArray(this.ispCity)) {
      $dara.Model.validateArray(this.ispCity);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonAssertionsAssertions extends $dara.Model {
  operator?: string;
  property?: string;
  target?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      operator: 'operator',
      property: 'property',
      target: 'target',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operator: 'string',
      property: 'string',
      target: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonAssertions extends $dara.Model {
  assertions?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonAssertionsAssertions[];
  static names(): { [key: string]: string } {
    return {
      assertions: 'assertions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assertions: { 'type': 'array', 'itemType': DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonAssertionsAssertions },
    };
  }

  validate() {
    if(Array.isArray(this.assertions)) {
      $dara.Model.validateArray(this.assertions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonAuthInfoScopes extends $dara.Model {
  scopes?: string[];
  static names(): { [key: string]: string } {
    return {
      scopes: 'scopes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scopes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.scopes)) {
      $dara.Model.validateArray(this.scopes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonAuthInfo extends $dara.Model {
  /**
   * @remarks
   * Supported only in multi-step monitoring. The AccessKey ID used for Alibaba Cloud authentication. We recommend that you use encrypted storage.
   * 
   * @example
   * testAk
   */
  accessKeyId?: string;
  /**
   * @remarks
   * Supported only in multi-step monitoring. The AccessKey secret used for Alibaba Cloud authentication. We recommend that you use encrypted storage.
   * 
   * @example
   * testSk
   */
  accessKeySecret?: string;
  /**
   * @remarks
   * Supported only in multi-step monitoring. The API action of the request when using Alibaba Cloud operations.
   * 
   * @example
   * example_api
   */
  apiAction?: string;
  /**
   * @remarks
   * Supported only in multi-step monitoring. The API version of the request when using Alibaba Cloud operations.
   * 
   * @example
   * 2019-01-01
   */
  apiVersion?: string;
  /**
   * @remarks
   * The OAuth 2.0 authentication style. Valid values: ROA and RPC.
   * 
   * @example
   * ROA
   */
  authStyle?: string;
  /**
   * @remarks
   * The client ID used for client authentication in OAuth 2.0.
   * 
   * @example
   * client_id
   */
  clientId?: string;
  /**
   * @remarks
   * The client secret used for client authentication in OAuth 2.0.
   * 
   * @example
   * client_secret
   */
  clientSecret?: string;
  /**
   * @remarks
   * The grant type used in OAuth 2.0 authentication. Valid values: client_credentials and password.
   * 
   * @example
   * password
   */
  grantType?: string;
  /**
   * @remarks
   * The password used for HTTP Basic Authentication.
   * 
   * @example
   * test_password
   */
  password?: string;
  /**
   * @remarks
   * Supported only in multi-step monitoring. The region ID of the request when using Alibaba Cloud authentication.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  scopes?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonAuthInfoScopes;
  /**
   * @remarks
   * The service name of the request when using AWS authentication.
   * 
   * @example
   * example_service_name
   */
  serviceName?: string;
  /**
   * @remarks
   * The session token used for AWS authentication.
   * 
   * @example
   * example_token
   */
  sessionToken?: string;
  /**
   * @remarks
   * The authorization server URL in OAuth 2.0.
   * 
   * @example
   * https://www.example.com
   */
  tokenUrl?: string;
  /**
   * @remarks
   * The authentication type. HTTP Basic Authentication is supported. Valid values: basic.
   * 
   * @example
   * basic
   */
  type?: string;
  /**
   * @remarks
   * Specifies whether the key is stored in the client cookie for digest authentication.
   * 
   * @example
   * false
   */
  useCookieSessionKey?: boolean;
  /**
   * @remarks
   * The username used for HTTP Basic Authentication.
   * 
   * @example
   * test_username
   */
  username?: string;
  /**
   * @remarks
   * Supported only in multi-step monitoring. Specifies whether additional resources exist when using Alibaba Cloud authentication for this step.
   * 
   * @example
   * false
   */
  withAddonResources?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'access_key_id',
      accessKeySecret: 'access_key_secret',
      apiAction: 'api_action',
      apiVersion: 'api_version',
      authStyle: 'auth_style',
      clientId: 'client_id',
      clientSecret: 'client_secret',
      grantType: 'grant_type',
      password: 'password',
      regionId: 'region_id',
      scopes: 'scopes',
      serviceName: 'service_name',
      sessionToken: 'session_token',
      tokenUrl: 'token_url',
      type: 'type',
      useCookieSessionKey: 'use_cookie_session_key',
      username: 'username',
      withAddonResources: 'with_addon_resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      apiAction: 'string',
      apiVersion: 'string',
      authStyle: 'string',
      clientId: 'string',
      clientSecret: 'string',
      grantType: 'string',
      password: 'string',
      regionId: 'string',
      scopes: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonAuthInfoScopes,
      serviceName: 'string',
      sessionToken: 'string',
      tokenUrl: 'string',
      type: 'string',
      useCookieSessionKey: 'boolean',
      username: 'string',
      withAddonResources: 'boolean',
    };
  }

  validate() {
    if(this.scopes && typeof (this.scopes as any).validate === 'function') {
      (this.scopes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonBlockedUrlList extends $dara.Model {
  blockedUrlList?: string[];
  static names(): { [key: string]: string } {
    return {
      blockedUrlList: 'blocked_url_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockedUrlList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.blockedUrlList)) {
      $dara.Model.validateArray(this.blockedUrlList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonBrowserHeaders extends $dara.Model {
  browserHeaders?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      browserHeaders: 'browser_headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      browserHeaders: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.browserHeaders)) {
      $dara.Model.validateArray(this.browserHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonBrowserHosts extends $dara.Model {
  browserHosts?: string[];
  static names(): { [key: string]: string } {
    return {
      browserHosts: 'browser_hosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      browserHosts: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.browserHosts)) {
      $dara.Model.validateArray(this.browserHosts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonBrowserInfoBrowserInfo extends $dara.Model {
  browser?: string;
  device?: string;
  static names(): { [key: string]: string } {
    return {
      browser: 'browser',
      device: 'device',
    };
  }

  static types(): { [key: string]: any } {
    return {
      browser: 'string',
      device: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonBrowserInfo extends $dara.Model {
  browserInfo?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonBrowserInfoBrowserInfo[];
  static names(): { [key: string]: string } {
    return {
      browserInfo: 'browser_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      browserInfo: { 'type': 'array', 'itemType': DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonBrowserInfoBrowserInfo },
    };
  }

  validate() {
    if(Array.isArray(this.browserInfo)) {
      $dara.Model.validateArray(this.browserInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonConfigVariablesConfigVariables extends $dara.Model {
  name?: string;
  secure?: boolean;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      secure: 'secure',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      secure: 'boolean',
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

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonConfigVariables extends $dara.Model {
  configVariables?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonConfigVariablesConfigVariables[];
  static names(): { [key: string]: string } {
    return {
      configVariables: 'config_variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configVariables: { 'type': 'array', 'itemType': DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonConfigVariablesConfigVariables },
    };
  }

  validate() {
    if(Array.isArray(this.configVariables)) {
      $dara.Model.validateArray(this.configVariables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonExpectExistString extends $dara.Model {
  expectExistString?: string[];
  static names(): { [key: string]: string } {
    return {
      expectExistString: 'expect_exist_string',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expectExistString: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.expectExistString)) {
      $dara.Model.validateArray(this.expectExistString);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonExpectNonExistString extends $dara.Model {
  expectNonExistString?: string[];
  static names(): { [key: string]: string } {
    return {
      expectNonExistString: 'expect_non_exist_string',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expectNonExistString: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.expectNonExistString)) {
      $dara.Model.validateArray(this.expectNonExistString);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonQuicTarget extends $dara.Model {
  quicTarget?: string[];
  static names(): { [key: string]: string } {
    return {
      quicTarget: 'quic_target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quicTarget: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.quicTarget)) {
      $dara.Model.validateArray(this.quicTarget);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonStepsStepsExtractedVariablesExtractedVariablesParser extends $dara.Model {
  parserType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      parserType: 'parser_type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parserType: 'string',
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

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonStepsStepsExtractedVariablesExtractedVariables extends $dara.Model {
  extractedType?: string;
  field?: string;
  name?: string;
  parser?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonStepsStepsExtractedVariablesExtractedVariablesParser;
  static names(): { [key: string]: string } {
    return {
      extractedType: 'extracted_type',
      field: 'field',
      name: 'name',
      parser: 'parser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extractedType: 'string',
      field: 'string',
      name: 'string',
      parser: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonStepsStepsExtractedVariablesExtractedVariablesParser,
    };
  }

  validate() {
    if(this.parser && typeof (this.parser as any).validate === 'function') {
      (this.parser as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonStepsStepsExtractedVariables extends $dara.Model {
  extractedVariables?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonStepsStepsExtractedVariablesExtractedVariables[];
  static names(): { [key: string]: string } {
    return {
      extractedVariables: 'extracted_variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extractedVariables: { 'type': 'array', 'itemType': DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonStepsStepsExtractedVariablesExtractedVariables },
    };
  }

  validate() {
    if(Array.isArray(this.extractedVariables)) {
      $dara.Model.validateArray(this.extractedVariables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonStepsSteps extends $dara.Model {
  allowFailure?: boolean;
  autoExtractCookie?: boolean;
  extractedVariables?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonStepsStepsExtractedVariables;
  isCritical?: boolean;
  /**
   * @deprecated
   */
  name?: string;
  option?: string;
  stepName?: string;
  stepType?: string;
  url?: string;
  useGeneratedCookie?: boolean;
  waitTimeInSecs?: number;
  static names(): { [key: string]: string } {
    return {
      allowFailure: 'allow_failure',
      autoExtractCookie: 'auto_extract_cookie',
      extractedVariables: 'extracted_variables',
      isCritical: 'is_critical',
      name: 'name',
      option: 'option',
      stepName: 'step_name',
      stepType: 'step_type',
      url: 'url',
      useGeneratedCookie: 'use_generated_cookie',
      waitTimeInSecs: 'wait_time_in_secs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowFailure: 'boolean',
      autoExtractCookie: 'boolean',
      extractedVariables: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonStepsStepsExtractedVariables,
      isCritical: 'boolean',
      name: 'string',
      option: 'string',
      stepName: 'string',
      stepType: 'string',
      url: 'string',
      useGeneratedCookie: 'boolean',
      waitTimeInSecs: 'number',
    };
  }

  validate() {
    if(this.extractedVariables && typeof (this.extractedVariables as any).validate === 'function') {
      (this.extractedVariables as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonSteps extends $dara.Model {
  steps?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonStepsSteps[];
  static names(): { [key: string]: string } {
    return {
      steps: 'steps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      steps: { 'type': 'array', 'itemType': DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonStepsSteps },
    };
  }

  validate() {
    if(Array.isArray(this.steps)) {
      $dara.Model.validateArray(this.steps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonTrafficHijackElementBlacklist extends $dara.Model {
  trafficHijackElementBlacklist?: string[];
  static names(): { [key: string]: string } {
    return {
      trafficHijackElementBlacklist: 'traffic_hijack_element_blacklist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trafficHijackElementBlacklist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.trafficHijackElementBlacklist)) {
      $dara.Model.validateArray(this.trafficHijackElementBlacklist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonTrafficHijackElementWhitelist extends $dara.Model {
  trafficHijackElementWhitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      trafficHijackElementWhitelist: 'traffic_hijack_element_whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trafficHijackElementWhitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.trafficHijackElementWhitelist)) {
      $dara.Model.validateArray(this.trafficHijackElementWhitelist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJson extends $dara.Model {
  assertions?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonAssertions;
  /**
   * @remarks
   * The number of retries after a DNS failure.
   * 
   * @example
   * 3
   */
  attempts?: number;
  /**
   * @remarks
   * The authentication information.
   */
  authInfo?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonAuthInfo;
  blockedUrlList?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonBlockedUrlList;
  browserHeaders?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonBrowserHeaders;
  browserHosts?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonBrowserHosts;
  browserInfo?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonBrowserInfo;
  /**
   * @remarks
   * Specifies whether to ignore certificate errors. Valid values:
   * 
   * - false: Does not ignore certificate errors.
   * - true: Ignores certificate errors.
   * 
   * @example
   * false
   */
  browserInsecure?: boolean;
  /**
   * @remarks
   * The browser monitoring version. Valid values:
   * 
   * - 1: Single-page monitoring.
   * - 2: Multi-page monitoring.
   * 
   * @example
   * 1
   */
  browserTaskVersion?: string;
  configVariables?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonConfigVariables;
  /**
   * @remarks
   * The cookie for the HTTP request.
   * 
   * @example
   * lang=en
   */
  cookie?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic MTR network diagnostics after a task failure. Valid values:
   * - false: Disabled.
   * - true: Enabled.
   * 
   * @example
   * false
   */
  diagnosisMtr?: boolean;
  /**
   * @remarks
   * Specifies whether to enable automatic PING network latency detection after a task failure. Valid values:
   * - false: Disabled.
   * - true: Enabled.
   * 
   * @example
   * false
   */
  diagnosisPing?: boolean;
  /**
   * @remarks
   * The DNS hijacking configuration list.
   * 
   * @example
   * www.taobao.com:www.taobao.com.danuoyi.tbcache.com
   */
  dnsHijackWhitelist?: string;
  /**
   * @remarks
   * The DNS matching rule. Valid values:
   * 
   * - IN_DNS: The expected aliases or IP addresses are all included in the DNS response.
   * - DNS_IN: All DNS responses are included in the expected aliases or IP addresses.
   * - EQUAL: The DNS response exactly matches the expected aliases or IP addresses.
   * - ANY: The DNS response and the expected aliases or IP addresses have an intersection.
   * 
   * @example
   * IN_DNS
   */
  dnsMatchRule?: string;
  /**
   * @remarks
   * The IP address of the DNS server.
   * 
   * > This parameter applies only to the DNS monitoring type.
   * 
   * @example
   * 192.168.XX.XX
   */
  dnsServer?: string;
  /**
   * @remarks
   * The DNS resolution type. This parameter applies only to the DNS monitoring type. Valid values:
   * - A: Specifies the IP address corresponding to a hostname or domain name.
   * - CNAME: Maps multiple domain names to another domain name.
   * - NS: Specifies the DNS server that resolves a domain name.
   * - MX: Points a domain name to a mail server address.
   * - TXT: A description of the hostname or domain name. The text length is limited to 512 bytes and is typically used for SPF (Sender Policy Framework) records for anti-spam purposes.
   * 
   * @example
   * A
   */
  dnsType?: string;
  /**
   * @remarks
   * Specifies whether the WebSocket task is allowed to return no message or an empty message. Valid values:
   * - false (default): Not allowed.
   * - true: Allowed.
   * 
   * @example
   * false
   */
  emptyMessage?: boolean;
  /**
   * @remarks
   * Specifies whether to enable packet capture for this task.
   * 
   * @example
   * true
   */
  enablePacketCapture?: boolean;
  expectExistString?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonExpectExistString;
  expectNonExistString?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonExpectNonExistString;
  /**
   * @remarks
   * The alias or address to be resolved.
   * 
   * > This parameter applies only to the DNS monitoring type.
   * 
   * @example
   * dns_server
   */
  expectValue?: string;
  /**
   * @remarks
   * The packet loss rate.
   * 
   * > This parameter applies only to the PING monitoring type.
   * 
   * @example
   * 0.4
   */
  failureRate?: number;
  /**
   * @remarks
   * The HTTP request header.
   * 
   * @example
   * testKey:testValue
   */
  header?: string;
  /**
   * @remarks
   * The number of hops for traceroute diagnostics when a PING task fails.
   * 
   * @example
   * 20
   */
  hops?: number;
  /**
   * @remarks
   * The custom host for HTTP tasks. The format is ip1,ip2:address. Multiple mappings can be configured. The left side of the colon contains A records or CNAMEs that the domain name can be resolved to, separated by commas. The right side of the colon is the domain name.
   * 
   * @example
   * 127.0.0.1:www.aliyun.com
   */
  hostBinding?: string;
  /**
   * @remarks
   * Specifies how the custom host takes effect. Valid values: 0 (random) and 1 (round-robin).
   * 
   * @example
   * 0
   */
  hostBindingType?: number;
  /**
   * @remarks
   * The HTTP request method. Valid values:
   * - get 
   * - post
   * - head.
   * 
   * @example
   * get
   */
  httpMethod?: string;
  /**
   * @remarks
   * The timeout period for a single PING request using the ICMP protocol. Unit: milliseconds.
   * 
   * @example
   * 3000
   */
  icmpTimeoutMillis?: number;
  /**
   * @remarks
   * The network type of the task. Valid values: v4, v6, and auto. Default value: v4.
   * 
   * @example
   * v4
   */
  ipNetwork?: string;
  /**
   * @remarks
   * Specifies whether to decode and store the password using Base64. Valid values:
   * - true: The password is decoded and stored using Base64.
   * - false: The password is not decoded and stored using Base64.
   * 
   * @example
   * false
   */
  isBase64Encode?: string;
  /**
   * @remarks
   * Specifies whether alert rules are included. Valid values:
   * - 0: Yes.
   * - 1: No.
   * 
   * @example
   * 1
   */
  matchRule?: number;
  /**
   * @remarks
   * The maximum TLS version.
   * 
   * @example
   * tlsv1.3
   */
  maxTlsVersion?: string;
  /**
   * @remarks
   * The minimum TLS version. TLS 1.2 and later are supported by default. TLS 1.0 and 1.1 are disabled. To support these versions, modify the configuration.
   * 
   * @example
   * tlsv1.2
   */
  minTlsVersion?: string;
  /**
   * @remarks
   * The password for SMTP, POP3, or FTP monitoring types.
   * 
   * @example
   * 123****
   */
  password?: string;
  /**
   * @remarks
   * The number of PING packets for the PING monitoring type.
   * 
   * @example
   * 29
   */
  pingNum?: number;
  /**
   * @remarks
   * The PING port. This parameter applies to TCP PING.
   * 
   * @example
   * 80
   */
  pingPort?: number;
  /**
   * @remarks
   * The PING protocol type. Valid values:
   * 
   * - icmp
   * 
   * - tcp
   * 
   * - udp.
   * 
   * @example
   * icmp
   */
  pingType?: string;
  /**
   * @remarks
   * The port for TCP, UDP, SMTP, or POP3 monitoring types.
   * 
   * @example
   * 110
   */
  port?: number;
  /**
   * @remarks
   * The certificate file name of the private certificate.
   * 
   * @example
   * cert.pem
   */
  privateCrtFileName?: string;
  /**
   * @remarks
   * The monitoring protocol.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * Specifies whether the browser monitoring task uses the QUIC protocol. Valid values:
   * - true: Uses the QUIC protocol.
   * - false: Does not use the QUIC protocol.
   * Default value: false.
   * 
   * @example
   * true
   */
  quicEnabled?: boolean;
  quicTarget?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonQuicTarget;
  /**
   * @remarks
   * The request content for the HTTP monitoring type.
   * 
   * @example
   * aa=bb
   */
  requestContent?: string;
  /**
   * @remarks
   * The format of the HTTP request content. Valid values:
   * - hex: hexadecimal.
   * - txt: text.
   * 
   * @example
   * txt
   */
  requestFormat?: string;
  /**
   * @remarks
   * The expected response content to match.
   * 
   * @example
   * txt
   */
  responseContent?: string;
  /**
   * @remarks
   * The format of the HTTP response content. Valid values:
   * - hex: hexadecimal.
   * - txt: text.
   * 
   * @example
   * txt
   */
  responseFormat?: string;
  /**
   * @remarks
   * The number of retries after a monitoring failure.
   * 
   * @example
   * 0
   */
  retryDelay?: number;
  /**
   * @remarks
   * This parameter takes effect for SMTP monitoring tasks. Set this parameter to 1 to use a secure connection. Default value: 0.
   * 
   * @example
   * 0
   */
  safeLink?: number;
  /**
   * @remarks
   * Specifies whether to enable page screenshots.
   * 
   * @example
   * false
   */
  screenShot?: boolean;
  /**
   * @remarks
   * For browser monitoring tasks, specifies whether to scroll to the bottom of the page after it is opened.
   * 
   * @example
   * false
   */
  scrollEnd?: boolean;
  /**
   * @remarks
   * The Server Name Indication (SNI).
   * 
   * @example
   * www.aliyun.com
   */
  serverName?: string;
  steps?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonSteps;
  strictMode?: boolean;
  /**
   * @remarks
   * The supported cipher suites.
   * 
   * @example
   * TLS_AES_256_GCM_SHA384
   */
  supportedCipherSuits?: string;
  /**
   * @remarks
   * The timeout period. Unit: milliseconds.
   * 
   * @example
   * 3
   */
  timeOut?: number;
  /**
   * @remarks
   * The deployment region of the target application when integrating with Managed Service for OpenTelemetry.
   * 
   * @example
   * cn-hangzhou
   */
  traceRegion?: string;
  /**
   * @remarks
   * Settings for the Tracing Analysis protocol used when integrating with Managed Service for OpenTelemetry.
   * Valid values:
   * - OpenTelemetry
   * - Zipkin
   * - Jaeger.
   * 
   * @example
   * OpenTelemetry
   */
  traceType?: string;
  trafficHijackElementBlacklist?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonTrafficHijackElementBlacklist;
  /**
   * @remarks
   * When a redirect occurs, if the number of resources loaded by the browser exceeds this value, traffic hijacking is considered to have occurred. When this value is 0, no verification is performed. Default value: 0.
   * 
   * @example
   * 0
   */
  trafficHijackElementCount?: number;
  trafficHijackElementWhitelist?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonTrafficHijackElementWhitelist;
  /**
   * @remarks
   * Specifies whether to use a private certificate.
   */
  usePrivateCrt?: boolean;
  /**
   * @remarks
   * Specifies whether to use an SSL connection when performing a TCP task.
   * 
   * @example
   * tlsv1.0
   */
  useSsl?: boolean;
  /**
   * @remarks
   * The username for FTP, SMTP, or POP3.
   * 
   * @example
   * testUser
   */
  username?: string;
  /**
   * @remarks
   * The additional wait time after the page is opened in a browser monitoring task.
   * 
   * @example
   * 3
   */
  waitTimeAfterCompletion?: number;
  static names(): { [key: string]: string } {
    return {
      assertions: 'assertions',
      attempts: 'attempts',
      authInfo: 'auth_info',
      blockedUrlList: 'blocked_url_list',
      browserHeaders: 'browser_headers',
      browserHosts: 'browser_hosts',
      browserInfo: 'browser_info',
      browserInsecure: 'browser_insecure',
      browserTaskVersion: 'browser_task_version',
      configVariables: 'config_variables',
      cookie: 'cookie',
      diagnosisMtr: 'diagnosis_mtr',
      diagnosisPing: 'diagnosis_ping',
      dnsHijackWhitelist: 'dns_hijack_whitelist',
      dnsMatchRule: 'dns_match_rule',
      dnsServer: 'dns_server',
      dnsType: 'dns_type',
      emptyMessage: 'empty_message',
      enablePacketCapture: 'enable_packet_capture',
      expectExistString: 'expect_exist_string',
      expectNonExistString: 'expect_non_exist_string',
      expectValue: 'expect_value',
      failureRate: 'failure_rate',
      header: 'header',
      hops: 'hops',
      hostBinding: 'host_binding',
      hostBindingType: 'host_binding_type',
      httpMethod: 'http_method',
      icmpTimeoutMillis: 'icmp_timeout_millis',
      ipNetwork: 'ip_network',
      isBase64Encode: 'isBase64Encode',
      matchRule: 'match_rule',
      maxTlsVersion: 'max_tls_version',
      minTlsVersion: 'min_tls_version',
      password: 'password',
      pingNum: 'ping_num',
      pingPort: 'ping_port',
      pingType: 'ping_type',
      port: 'port',
      privateCrtFileName: 'private_crt_file_name',
      protocol: 'protocol',
      quicEnabled: 'quic_enabled',
      quicTarget: 'quic_target',
      requestContent: 'request_content',
      requestFormat: 'request_format',
      responseContent: 'response_content',
      responseFormat: 'response_format',
      retryDelay: 'retry_delay',
      safeLink: 'safe_link',
      screenShot: 'screen_shot',
      scrollEnd: 'scroll_end',
      serverName: 'server_name',
      steps: 'steps',
      strictMode: 'strict_mode',
      supportedCipherSuits: 'supported_cipher_suits',
      timeOut: 'time_out',
      traceRegion: 'trace_region',
      traceType: 'trace_type',
      trafficHijackElementBlacklist: 'traffic_hijack_element_blacklist',
      trafficHijackElementCount: 'traffic_hijack_element_count',
      trafficHijackElementWhitelist: 'traffic_hijack_element_whitelist',
      usePrivateCrt: 'use_private_crt',
      useSsl: 'use_ssl',
      username: 'username',
      waitTimeAfterCompletion: 'waitTime_after_completion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assertions: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonAssertions,
      attempts: 'number',
      authInfo: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonAuthInfo,
      blockedUrlList: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonBlockedUrlList,
      browserHeaders: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonBrowserHeaders,
      browserHosts: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonBrowserHosts,
      browserInfo: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonBrowserInfo,
      browserInsecure: 'boolean',
      browserTaskVersion: 'string',
      configVariables: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonConfigVariables,
      cookie: 'string',
      diagnosisMtr: 'boolean',
      diagnosisPing: 'boolean',
      dnsHijackWhitelist: 'string',
      dnsMatchRule: 'string',
      dnsServer: 'string',
      dnsType: 'string',
      emptyMessage: 'boolean',
      enablePacketCapture: 'boolean',
      expectExistString: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonExpectExistString,
      expectNonExistString: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonExpectNonExistString,
      expectValue: 'string',
      failureRate: 'number',
      header: 'string',
      hops: 'number',
      hostBinding: 'string',
      hostBindingType: 'number',
      httpMethod: 'string',
      icmpTimeoutMillis: 'number',
      ipNetwork: 'string',
      isBase64Encode: 'string',
      matchRule: 'number',
      maxTlsVersion: 'string',
      minTlsVersion: 'string',
      password: 'string',
      pingNum: 'number',
      pingPort: 'number',
      pingType: 'string',
      port: 'number',
      privateCrtFileName: 'string',
      protocol: 'string',
      quicEnabled: 'boolean',
      quicTarget: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonQuicTarget,
      requestContent: 'string',
      requestFormat: 'string',
      responseContent: 'string',
      responseFormat: 'string',
      retryDelay: 'number',
      safeLink: 'number',
      screenShot: 'boolean',
      scrollEnd: 'boolean',
      serverName: 'string',
      steps: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonSteps,
      strictMode: 'boolean',
      supportedCipherSuits: 'string',
      timeOut: 'number',
      traceRegion: 'string',
      traceType: 'string',
      trafficHijackElementBlacklist: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonTrafficHijackElementBlacklist,
      trafficHijackElementCount: 'number',
      trafficHijackElementWhitelist: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonTrafficHijackElementWhitelist,
      usePrivateCrt: 'boolean',
      useSsl: 'boolean',
      username: 'string',
      waitTimeAfterCompletion: 'number',
    };
  }

  validate() {
    if(this.assertions && typeof (this.assertions as any).validate === 'function') {
      (this.assertions as any).validate();
    }
    if(this.authInfo && typeof (this.authInfo as any).validate === 'function') {
      (this.authInfo as any).validate();
    }
    if(this.blockedUrlList && typeof (this.blockedUrlList as any).validate === 'function') {
      (this.blockedUrlList as any).validate();
    }
    if(this.browserHeaders && typeof (this.browserHeaders as any).validate === 'function') {
      (this.browserHeaders as any).validate();
    }
    if(this.browserHosts && typeof (this.browserHosts as any).validate === 'function') {
      (this.browserHosts as any).validate();
    }
    if(this.browserInfo && typeof (this.browserInfo as any).validate === 'function') {
      (this.browserInfo as any).validate();
    }
    if(this.configVariables && typeof (this.configVariables as any).validate === 'function') {
      (this.configVariables as any).validate();
    }
    if(this.expectExistString && typeof (this.expectExistString as any).validate === 'function') {
      (this.expectExistString as any).validate();
    }
    if(this.expectNonExistString && typeof (this.expectNonExistString as any).validate === 'function') {
      (this.expectNonExistString as any).validate();
    }
    if(this.quicTarget && typeof (this.quicTarget as any).validate === 'function') {
      (this.quicTarget as any).validate();
    }
    if(this.steps && typeof (this.steps as any).validate === 'function') {
      (this.steps as any).validate();
    }
    if(this.trafficHijackElementBlacklist && typeof (this.trafficHijackElementBlacklist as any).validate === 'function') {
      (this.trafficHijackElementBlacklist as any).validate();
    }
    if(this.trafficHijackElementWhitelist && typeof (this.trafficHijackElementWhitelist as any).validate === 'function') {
      (this.trafficHijackElementWhitelist as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitorsVpcConfig extends $dara.Model {
  /**
   * @remarks
   * The region where the target site of the internal network monitoring task is located.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The ID of the security group associated with the internal network monitoring task.
   * 
   * @example
   * sg-xxxxxx
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The ID of the VPC associated with the internal network monitoring task.
   * 
   * @example
   * vpc-xxxxxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch associated with the internal network monitoring task.
   * 
   * @example
   * vsw-xxxxxx
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      securityGroupId: 'SecurityGroupId',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
      securityGroupId: 'string',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBodySiteMonitors extends $dara.Model {
  /**
   * @remarks
   * The monitored address of the monitoring task.
   * 
   * @example
   * https://aliyun.com
   */
  address?: string;
  /**
   * @remarks
   * The type of detection point. Default value: PC.
   * Valid values:
   * 
   * - PC: wired network.
   * 
   * - MOBILE: mobile network.
   * 
   * @example
   * PC
   */
  agentGroup?: string;
  /**
   * @remarks
   * The custom monitoring schedule. You can select a time range from Monday to Sunday for monitoring.
   */
  customSchedule?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsCustomSchedule;
  /**
   * @remarks
   * The monitoring interval. Unit: minutes. Valid values: 1, 5, 15, 30, and 60.
   * 
   * @example
   * 1
   */
  interval?: string;
  ispCities?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsIspCities;
  /**
   * @remarks
   * The extended options. Each monitoring type has different extended options. For more information, see [CreateSiteMonitor](https://help.aliyun.com/document_detail/115048.html).
   */
  optionJson?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJson;
  /**
   * @remarks
   * The ID of the monitoring task.
   * 
   * @example
   * cc641dff-c19d-45f3-ad0a-818a0c4f****
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the monitoring task.
   * 
   * @example
   * test123
   */
  taskName?: string;
  /**
   * @remarks
   * The status of the monitoring task. Valid values:
   * 
   * - 1: Enabled.
   * - 2: Disabled.
   * 
   * @example
   * 1
   */
  taskState?: string;
  /**
   * @remarks
   * The type of the monitoring task. Site monitoring task types include HTTP(S), PING, TCP, UDP, DNS, SMTP, POP3, and FTP.
   * 
   * @example
   * HTTP
   */
  taskType?: string;
  /**
   * @remarks
   * The VPC configuration for the internal network monitoring task.
   */
  vpcConfig?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsVpcConfig;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      agentGroup: 'AgentGroup',
      customSchedule: 'CustomSchedule',
      interval: 'Interval',
      ispCities: 'IspCities',
      optionJson: 'OptionJson',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskState: 'TaskState',
      taskType: 'TaskType',
      vpcConfig: 'VpcConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      agentGroup: 'string',
      customSchedule: DescribeSiteMonitorAttributeResponseBodySiteMonitorsCustomSchedule,
      interval: 'string',
      ispCities: DescribeSiteMonitorAttributeResponseBodySiteMonitorsIspCities,
      optionJson: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJson,
      taskId: 'string',
      taskName: 'string',
      taskState: 'string',
      taskType: 'string',
      vpcConfig: DescribeSiteMonitorAttributeResponseBodySiteMonitorsVpcConfig,
    };
  }

  validate() {
    if(this.customSchedule && typeof (this.customSchedule as any).validate === 'function') {
      (this.customSchedule as any).validate();
    }
    if(this.ispCities && typeof (this.ispCities as any).validate === 'function') {
      (this.ispCities as any).validate();
    }
    if(this.optionJson && typeof (this.optionJson as any).validate === 'function') {
      (this.optionJson as any).validate();
    }
    if(this.vpcConfig && typeof (this.vpcConfig as any).validate === 'function') {
      (this.vpcConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSiteMonitorAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * >The value 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * successful
   */
  message?: string;
  metricRules?: DescribeSiteMonitorAttributeResponseBodyMetricRules;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D17DF650-7EBD-54D0-903A-1D4E624D7402
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the monitoring task.
   */
  siteMonitors?: DescribeSiteMonitorAttributeResponseBodySiteMonitors;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * 
   * - true: Successful.
   * 
   * - false: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      metricRules: 'MetricRules',
      requestId: 'RequestId',
      siteMonitors: 'SiteMonitors',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      metricRules: DescribeSiteMonitorAttributeResponseBodyMetricRules,
      requestId: 'string',
      siteMonitors: DescribeSiteMonitorAttributeResponseBodySiteMonitors,
      success: 'boolean',
    };
  }

  validate() {
    if(this.metricRules && typeof (this.metricRules as any).validate === 'function') {
      (this.metricRules as any).validate();
    }
    if(this.siteMonitors && typeof (this.siteMonitors as any).validate === 'function') {
      (this.siteMonitors as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

