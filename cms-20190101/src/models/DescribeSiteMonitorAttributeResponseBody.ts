// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSiteMonitorAttributeResponseBodyMetricRulesMetricRule extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the alert rule is enabled. Valid values:
   * 
   * *   true: The alert rule is enabled.
   * *   false: The alert rule is disabled.
   * 
   * @example
   * true
   */
  actionEnable?: string;
  /**
   * @remarks
   * The alert contact group to which alert notifications are sent.
   * 
   * @example
   * CloudMonitor
   */
  alarmActions?: string;
  /**
   * @remarks
   * The operator that is used to compare the metric value with the threshold in the alert rule. Valid values:
   * 
   * *   `>=`
   * *   `>`
   * *   `<=`
   * *   `<`
   * *   `=`
   * *   `!=`
   * *   GreaterThanYesterday: greater than the metric value at the same time yesterday
   * *   LessThanYesterday: less than the metric value at the same time yesterday
   * *   GreaterThanLastWeek: greater than the metric value at the same time last week
   * *   LessThanLastWeek: less than the metric value at the same time last week
   * *   GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
   * *   LessThanLastPeriod: less than the metric value in the last monitoring cycle
   * 
   * @example
   * GreaterThanYesterday
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The dimension of the alert rule.
   * 
   * @example
   * [{"taskId": "cc641dff-c19d-45f3-ad0a-818a0c4f****" }]
   */
  dimensions?: string;
  /**
   * @remarks
   * The consecutive number of times for which the metric value meets the alert condition before an alert is triggered.
   * 
   * @example
   * 3
   */
  evaluationCount?: string;
  /**
   * @remarks
   * The expression that is used to trigger alerts.
   * 
   * @example
   * $Availability=30
   */
  expression?: string;
  /**
   * @remarks
   * The alert severity. Valid values:
   * 
   * *   1: critical
   * *   2: warning
   * *   3: information
   * 
   * @example
   * 2
   */
  level?: string;
  /**
   * @remarks
   * The metric name.
   * 
   * @example
   * Availability
   */
  metricName?: string;
  /**
   * @remarks
   * The namespace of the cloud service.
   * 
   * The value is in the following format: acs_service name.
   * 
   * @example
   * acs_networkmonitor
   */
  namespace?: string;
  /**
   * @remarks
   * The alert contact group that receives alert notifications.
   * 
   * @example
   * [ "CloudMonitor"]
   */
  okActions?: string;
  /**
   * @remarks
   * The time interval. The value is the same as the interval at which metric data is reported. Unit: seconds.
   * 
   * >  If you specify a statistical period for the alert rule, data is queried based on the statistical period.
   * 
   * @example
   * 15s
   */
  period?: string;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * @example
   * bf071ae_7b7aec3817b0fdf****
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the alert rule.
   * 
   * @example
   * rule1
   */
  ruleName?: string;
  /**
   * @remarks
   * The alert status. Valid values:
   * 
   * *   OK: The alert rule has no active alerts.
   * *   ALARM: The alert rule has active alerts.
   * 
   * @example
   * OK
   */
  stateValue?: string;
  /**
   * @remarks
   * The statistical method of the alert rule. Valid values:
   * 
   * *   Availability: the percentage of available detection points
   * *   AvailableNumber: the number of available detection points
   * *   ErrorCodeMaximum: a status code for an alert
   * *   ErrorCodeMinimum: all status codes for a set of alerts
   * *   Average: response time
   * 
   * @example
   * Availability
   */
  statistics?: string;
  /**
   * @remarks
   * The alert threshold.
   * 
   * @example
   * 30
   */
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
  /**
   * @remarks
   * The days in a week.
   */
  days?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsCustomScheduleDays;
  /**
   * @remarks
   * The end time of the detection. Unit: hours.
   * 
   * @example
   * 18
   */
  endHour?: number;
  /**
   * @remarks
   * The start time of the detection. Unit: hours.
   * 
   * @example
   * 8
   */
  startHour?: number;
  /**
   * @remarks
   * The time zone of the detection.
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
  /**
   * @remarks
   * The city ID.
   * 
   * @example
   * 738
   */
  city?: string;
  /**
   * @remarks
   * The city name.
   */
  cityName?: string;
  /**
   * @remarks
   * The carrier ID.
   * 
   * @example
   * 465
   */
  isp?: string;
  /**
   * @remarks
   * The carrier name.
   */
  ispName?: string;
  /**
   * @remarks
   * The network type of the detection point. Valid values: IDC, LASTMILE, and MOBILE.
   * 
   * @example
   * IDC
   */
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
  /**
   * @remarks
   * The operator. Valid values:
   * - contains: contains
   * - doesNotContain: does not contain
   * - matches: matches a regular expression
   * - doesNotMatch: does not match a regular expression
   * - is: equal to
   * - isNot: not equal to
   * - lessThan: less than
   * - moreThan: greater than
   * 
   * @example
   * lessThan
   */
  operator?: string;
  /**
   * @remarks
   * The path to the assertion.
   * - If the assertion type is body_json, the path is json path.
   * - If the assertion type is body_xml, the path is xml path.
   * 
   * @example
   * json path
   */
  property?: string;
  /**
   * @remarks
   * The value or character to which the condition of the assertion is compared.
   * 
   * @example
   * 0
   */
  target?: string;
  /**
   * @remarks
   * The assertion type. Valid values:
   * - response_time: checks whether the response time meets expectations.
   * - status_code: checks whether the HTTP status code meets expectations.
   * - header: checks whether the fields in the response header meet expectations.
   * - body_text: check whether the content in the response body meets expectations by using text matching.
   * - body_json: check whether the content in the response body meets expectations by using JSON parsing (JSONPath).
   * - body_xml: check whether the content in the response body meets expectations by using XML parsing (XPath).
   * 
   * @example
   * response_time
   */
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
  accessKeyId?: string;
  accessKeySecret?: string;
  apiAction?: string;
  apiVersion?: string;
  authStyle?: string;
  clientId?: string;
  clientSecret?: string;
  grantType?: string;
  password?: string;
  regionId?: string;
  scopes?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonAuthInfoScopes;
  serviceName?: string;
  sessionToken?: string;
  tokenUrl?: string;
  type?: string;
  useCookieSessionKey?: boolean;
  username?: string;
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
  /**
   * @remarks
   * The browser type.
   * 
   * @example
   * Chrome
   */
  browser?: string;
  /**
   * @remarks
   * The device type.
   * 
   * @example
   * laptop
   */
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
  /**
   * @remarks
   * The assertions.
   */
  assertions?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonAssertions;
  /**
   * @remarks
   * The number of retries after a DNS failure occurred.
   * 
   * @example
   * 3
   */
  attempts?: number;
  authInfo?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonAuthInfo;
  /**
   * @remarks
   * The blocked URLs. Wildcards are supported in paths.
   */
  blockedUrlList?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonBlockedUrlList;
  /**
   * @remarks
   * The custom headers. Format: {"key": "somekey", "value":"somevalue"}.
   */
  browserHeaders?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonBrowserHeaders;
  /**
   * @remarks
   * The custom hosts. Format: {"key": "somekey", "value":"somevalue"}.
   */
  browserHosts?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonBrowserHosts;
  /**
   * @remarks
   * The browser information.
   */
  browserInfo?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonBrowserInfo;
  /**
   * @remarks
   * Indicates whether certificate errors are ignored. Valid values:
   * - false: Certificate errors are not ignored.
   * - true: Certificate errors are ignored.
   * 
   * @example
   * false
   */
  browserInsecure?: boolean;
  /**
   * @remarks
   * The version of the browser test task. Valid values:
   * - 1: browser test for a single page
   * - 2: browser test for multiple pages
   * 
   * @example
   * 1
   */
  browserTaskVersion?: string;
  configVariables?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonConfigVariables;
  /**
   * @remarks
   * The cookie of the HTTP request.
   * 
   * @example
   * lang=en
   */
  cookie?: string;
  /**
   * @remarks
   * Indicates whether the automatic MTR diagnostics feature is enabled for a failed task. Valid values:
   * - false: The automatic MTR diagnostics feature is disabled for a failed task.
   * - true: The automatic MTR diagnostics feature is enabled for a failed task.
   * 
   * @example
   * false
   */
  diagnosisMtr?: boolean;
  /**
   * @remarks
   * Indicates whether the automatic ping latency detection feature is enabled for a failed task. Valid values:
   * - false: The automatic ping latency detection feature is disabled for a failed task.
   * - true: The automatic ping latency detection feature is enabled for a failed task.
   * 
   * @example
   * false
   */
  diagnosisPing?: boolean;
  /**
   * @remarks
   * The DNS hijack whitelist.
   * 
   * @example
   * www.taobao.com:www.taobao.com.danuoyi.tbcache.com
   */
  dnsHijackWhitelist?: string;
  /**
   * @remarks
   * The relationship between the list of expected aliases or IP addresses and the list of DNS results. Valid values:
   * 
   * *   IN_DNS: The list of expected values is a subset of the list of DNS results.
   * *   DNS_IN: The list of DNS results is a subset of the list of expected values.
   * *   EQUAL: The list of DNS results is the same as the list of expected values.
   * *   ANY: The list of DNS results intersects with the list of expected values.
   * 
   * @example
   * IN_DNS
   */
  dnsMatchRule?: string;
  /**
   * @remarks
   * The IP address of the DNS server.
   * 
   * >  This parameter is returned only if the TaskType parameter is set to DNS.
   * 
   * @example
   * 192.168.XX.XX
   */
  dnsServer?: string;
  /**
   * @remarks
   * The type of the DNS record. This parameter is returned only if the TaskType parameter is set to DNS. Valid values:
   * 
   * *   A (default): a record that specifies an IP address related to the specified host name or domain name.
   * *   CNAME: a record that maps multiple domain names to a domain name.
   * *   NS: a record that specifies a DNS server used to parse domain names.
   * *   MX: a record that links domain names to the address of a mail server.
   * *   TXT: a record that stores the text information of host name or domain names. The text must be 1 to 512 bytes in length. The TXT record serves as a Sender Policy Framework (SPF) record to fight against spam.
   * 
   * @example
   * A
   */
  dnsType?: string;
  /**
   * @remarks
   * Indicates whether the WebSocket task is allowed to return no response or return an empty response. Default value: false. Valid values: false and true.
   * 
   * @example
   * false
   */
  emptyMessage?: boolean;
  enablePacketCapture?: boolean;
  /**
   * @remarks
   * The string that is expected to exist on the page.
   */
  expectExistString?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonExpectExistString;
  /**
   * @remarks
   * The string that is not expected to exist on the page.
   */
  expectNonExistString?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonExpectNonExistString;
  /**
   * @remarks
   * The domain name or alias to be parsed.
   * 
   * >  This parameter is returned only if the TaskType parameter is set to DNS.
   * 
   * @example
   * dns_server
   */
  expectValue?: string;
  /**
   * @remarks
   * The packet loss rate.
   * 
   * >  This parameter is returned only if the TaskType parameter is set to PING.
   * 
   * @example
   * 0.4
   */
  failureRate?: number;
  /**
   * @remarks
   * The header of the HTTP request.
   * 
   * @example
   * testKey:testValue
   */
  header?: string;
  /**
   * @remarks
   * The number of hops to perform traceroute diagnostics if the PING task fails.
   * 
   * @example
   * 20
   */
  hops?: number;
  /**
   * @remarks
   * The custom hosts for the HTTP test task. Format: ip1,ip2:address. You can specify values in multiple lines. Specify the A record or CNAME record that can be resolved by the domain name at the left of the colon. Separate multiple records with commas (,). Specify the domain name at the right of the colon.
   * 
   * @example
   * 127.0.0.1:www.aliyun.com
   */
  hostBinding?: string;
  /**
   * @remarks
   * The host binding type. Valid values: 0 and 1. 0 indicates random. 1 indicates polling.
   * 
   * @example
   * 0
   */
  hostBindingType?: number;
  /**
   * @remarks
   * The HTTP request method. Valid values:
   * 
   * *   get
   * *   post
   * *   head
   * 
   * @example
   * get
   */
  httpMethod?: string;
  /**
   * @remarks
   * The timeout period of a PING task that uses ICMP. Unit: milliseconds.
   * 
   * @example
   * 3000
   */
  icmpTimeoutMillis?: number;
  /**
   * @remarks
   * ip_network indicates the network type of the task. Valid values: v4, v6, and auto. Default value: v4.
   * 
   * @example
   * v4
   */
  ipNetwork?: string;
  /**
   * @remarks
   * Indicates whether to perform Base64 decoding and then store the password. Valid values: true and false.
   * 
   * @example
   * true
   */
  isBase64Encode?: string;
  /**
   * @remarks
   * Indicates whether the alert rule is included. Valid values:
   * 
   * *   0: The alert rule is included.
   * *   1: The alert rule is excluded.
   * 
   * @example
   * 1
   */
  matchRule?: number;
  /**
   * @remarks
   * The minimum TLS version. By default, TLS 1.2 and later versions are supported. TLS 1.0 and 1.1 are disabled. If you still require TLS 1.0 or 1.1, you can change the configuration.
   * 
   * @example
   * tlsv1.2
   */
  minTlsVersion?: string;
  /**
   * @remarks
   * The password of the SMTP, POP3, or FTP protocol.
   * 
   * @example
   * 123****
   */
  password?: string;
  /**
   * @remarks
   * The heartbeat of the PING protocol.
   * 
   * @example
   * 29
   */
  pingNum?: number;
  /**
   * @remarks
   * The port number for TCP pings.
   * 
   * @example
   * 80
   */
  pingPort?: number;
  /**
   * @remarks
   * The PING protocol type. Valid values:
   * 
   * *   icmp
   * *   tcp
   * *   udp
   * 
   * @example
   * icmp,tcp,udp
   */
  pingType?: string;
  /**
   * @remarks
   * The port number of the TCP, UDP, SMTP, or POP3 protocol.
   * 
   * @example
   * 110
   */
  port?: number;
  /**
   * @example
   * cert.pem
   */
  privateCrtFileName?: string;
  /**
   * @remarks
   * The protocol that is used to send the request.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * Indicates whether the Quick UDP Internet Connections (QUIC) protocol is used for browser detection. Valid values: true false Default value: false.
   * 
   * @example
   * true
   */
  quicEnabled?: boolean;
  /**
   * @remarks
   * The sites for which the QUIC protocol is forcibly used.
   */
  quicTarget?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonQuicTarget;
  /**
   * @remarks
   * The content of the HTTP request.
   * 
   * @example
   * aa=bb
   */
  requestContent?: string;
  /**
   * @remarks
   * The format of the HTTP request. Valid values:
   * 
   * *   hex: hexadecimal
   * *   txt: text
   * 
   * @example
   * txt
   */
  requestFormat?: string;
  /**
   * @remarks
   * The response to the HTTP request.
   * 
   * @example
   * txt
   */
  responseContent?: string;
  /**
   * @remarks
   * The format of the HTTP response. Valid values:
   * 
   * *   hex: hexadecimal
   * *   txt: text
   * 
   * @example
   * txt
   */
  responseFormat?: string;
  /**
   * @remarks
   * The number of retries for failed detections.
   * 
   * @example
   * 0
   */
  retryDelay?: number;
  safeLink?: number;
  /**
   * @remarks
   * Indicates whether page screenshot is enabled.
   * 
   * @example
   * false
   */
  screenShot?: boolean;
  /**
   * @remarks
   * Indicates whether to scroll to the bottom of the page after opening the page. This parameter is valid for a browser test task.
   * 
   * @example
   * false
   */
  scrollEnd?: boolean;
  steps?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonSteps;
  /**
   * @remarks
   * Indicates whether to allow the loading failures of some page elements. Valid values: false and true.
   * 
   * @example
   * false
   */
  strictMode?: boolean;
  /**
   * @remarks
   * The timeout period. Unit: milliseconds.
   * 
   * @example
   * 3
   */
  timeOut?: number;
  traceRegion?: string;
  traceType?: string;
  /**
   * @remarks
   * The traffic hijacking blacklist. When redirection occurs, if the URL of the resource loaded by the browser matches the expression in the blacklist, traffic hijacking is considered to have occurred.
   */
  trafficHijackElementBlacklist?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonTrafficHijackElementBlacklist;
  /**
   * @remarks
   * When redirection occurs, if the browser loads more than the specified number of resources, traffic hijacking is considered to have occurred. If you set the value to 0, no validation is performed. Default value: 0.
   * 
   * @example
   * 0
   */
  trafficHijackElementCount?: number;
  /**
   * @remarks
   * The traffic hijacking whitelist. When redirection occurs, if the URL of the resource loaded by the browser does not match any expression in the whitelist, traffic hijacking is considered to have occurred.
   */
  trafficHijackElementWhitelist?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonTrafficHijackElementWhitelist;
  usePrivateCrt?: boolean;
  /**
   * @remarks
   * The username of the FTP, SMTP, or POP3 protocol.
   * 
   * @example
   * testUser
   */
  username?: string;
  /**
   * @remarks
   * The additional waiting time after a page is opened in a browser test task.
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
      steps: 'steps',
      strictMode: 'strict_mode',
      timeOut: 'time_out',
      traceRegion: 'trace_region',
      traceType: 'trace_type',
      trafficHijackElementBlacklist: 'traffic_hijack_element_blacklist',
      trafficHijackElementCount: 'traffic_hijack_element_count',
      trafficHijackElementWhitelist: 'traffic_hijack_element_whitelist',
      usePrivateCrt: 'use_private_crt',
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
      steps: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonSteps,
      strictMode: 'boolean',
      timeOut: 'number',
      traceRegion: 'string',
      traceType: 'string',
      trafficHijackElementBlacklist: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonTrafficHijackElementBlacklist,
      trafficHijackElementCount: 'number',
      trafficHijackElementWhitelist: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJsonTrafficHijackElementWhitelist,
      usePrivateCrt: 'boolean',
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
   * The region of the website for synthetic monitoring.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-xxxxxx
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The ID of the VPC used by the synthetic test task.
   * 
   * @example
   * vpc-xxxxxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the vSwitch used by the synthetic test task.
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
   * The URL that is monitored by the site monitoring task.
   * 
   * @example
   * https://aliyun.com
   */
  address?: string;
  /**
   * @remarks
   * The type of the detection point. Default value: PC. Valid values:
   * - PC
   * - MOBILE
   * 
   * @example
   * PC
   */
  agentGroup?: string;
  /**
   * @remarks
   * The custom detection cycle. You can specify only a time range within a week (from Monday to Sunday).
   */
  customSchedule?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsCustomSchedule;
  /**
   * @remarks
   * The interval at which the site monitoring task is executed. Unit: minutes. Valid values: 1, 5, 15, 30, and 60.
   * 
   * @example
   * 1
   */
  interval?: string;
  /**
   * @remarks
   * The information of detection points. The information includes the carriers that provide the detection points and the cities where the detection points reside.
   */
  ispCities?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsIspCities;
  /**
   * @remarks
   * The extended options of the site monitoring task. The options vary based on the specified protocol. For more information, see [CreateSiteMonitor](https://help.aliyun.com/document_detail/115048.html).
   */
  optionJson?: DescribeSiteMonitorAttributeResponseBodySiteMonitorsOptionJson;
  /**
   * @remarks
   * The ID of the site monitoring task.
   * 
   * @example
   * cc641dff-c19d-45f3-ad0a-818a0c4f****
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the site monitoring task.
   * 
   * @example
   * test123
   */
  taskName?: string;
  /**
   * @remarks
   * The status of the site monitoring task. Valid values:
   * 
   * *   1: The task is enabled.
   * *   2: The task is disabled.
   * 
   * @example
   * 1
   */
  taskState?: string;
  /**
   * @remarks
   * The protocol that is used by the site monitoring task. Valid values: HTTP, HTTPS, PING, TCP, UDP, DNS, SMTP, POP3, and FTP.
   * 
   * @example
   * HTTP
   */
  taskType?: string;
  /**
   * @remarks
   * The VPC configurations of the synthetic test task.
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
   * The response code.
   * 
   * >  The status code 200 indicates that the request was successful.
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
  /**
   * @remarks
   * The alert rules that are configured for the site monitoring task.
   */
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
   * The details of the site monitoring task.
   */
  siteMonitors?: DescribeSiteMonitorAttributeResponseBodySiteMonitors;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
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

