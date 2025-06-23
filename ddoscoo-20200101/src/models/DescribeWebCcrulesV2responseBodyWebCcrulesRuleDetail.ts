// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetailCondition } from "./DescribeWebCcrulesV2responseBodyWebCcrulesRuleDetailCondition";
import { DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetailRateLimit } from "./DescribeWebCcrulesV2responseBodyWebCcrulesRuleDetailRateLimit";
import { DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetailStatistics } from "./DescribeWebCcrulesV2responseBodyWebCcrulesRuleDetailStatistics";
import { DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetailStatusCode } from "./DescribeWebCcrulesV2responseBodyWebCcrulesRuleDetailStatusCode";


export class DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetail extends $dara.Model {
  /**
   * @remarks
   * The action triggered if the rule is matched. Valid values:
   * 
   * *   **accept**: The requests that match the rule are allowed.
   * *   **block**: The requests that match the rule are blocked.
   * *   **challenge**: Completely Automated Public Turing test to tell Computers and Humans Apart (CAPTCHA) verification for the requests that match the rule is implemented.
   * *   **watch**: The requests that match the rule are recorded in logs and allowed.
   * 
   * @example
   * block
   */
  action?: string;
  /**
   * @remarks
   * The match conditions.
   */
  condition?: DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetailCondition[];
  /**
   * @remarks
   * The parameter is deprecated.
   */
  count?: number;
  /**
   * @remarks
   * The parameter is deprecated.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The parameter is deprecated.
   */
  mode?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * ccauto14
   */
  name?: string;
  /**
   * @remarks
   * The frequency statistics.
   */
  rateLimit?: DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetailRateLimit;
  /**
   * @remarks
   * The statistics after deduplication. By default, the system collects statistics before deduplication.
   */
  statistics?: DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetailStatistics;
  /**
   * @remarks
   * The status codes.
   */
  statusCode?: DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetailStatusCode;
  /**
   * @remarks
   * The parameter is deprecated.
   * 
   * @example
   * 300
   */
  ttl?: number;
  /**
   * @remarks
   * The parameter is deprecated.
   * 
   * @example
   * /p3shijihao
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      condition: 'Condition',
      count: 'Count',
      interval: 'Interval',
      mode: 'Mode',
      name: 'Name',
      rateLimit: 'RateLimit',
      statistics: 'Statistics',
      statusCode: 'StatusCode',
      ttl: 'Ttl',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      condition: { 'type': 'array', 'itemType': DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetailCondition },
      count: 'number',
      interval: 'number',
      mode: 'string',
      name: 'string',
      rateLimit: DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetailRateLimit,
      statistics: DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetailStatistics,
      statusCode: DescribeWebCCRulesV2ResponseBodyWebCCRulesRuleDetailStatusCode,
      ttl: 'number',
      uri: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.condition)) {
      $dara.Model.validateArray(this.condition);
    }
    if(this.rateLimit && typeof (this.rateLimit as any).validate === 'function') {
      (this.rateLimit as any).validate();
    }
    if(this.statistics && typeof (this.statistics as any).validate === 'function') {
      (this.statistics as any).validate();
    }
    if(this.statusCode && typeof (this.statusCode as any).validate === 'function') {
      (this.statusCode as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

