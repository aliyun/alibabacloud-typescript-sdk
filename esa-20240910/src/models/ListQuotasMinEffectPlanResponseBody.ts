// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotasMinEffectPlanResponseBodyQuotasQuotaValueDetail extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the quota value is available in the plan version corresponding to the current site. Valid values:
   * - ture: Available.
   * - false: Unavailable.
   * 
   * @example
   * true
   */
  isEffect?: string;
  /**
   * @remarks
   * The minimum required plan version for the quota value. Valid values:
   * - basic: Basic Edition.
   * - medium: Standard Edition.
   * - high: Advanced Edition.
   * - enterprise_standard_cn: Enterprise Edition.
   * The return value of this parameter follows these rules:
   * - If the quota value is already available in the current plan version, this parameter is left empty, meaning the minimum required plan version is not displayed.
   * - If the quota value is unavailable in the current plan version, the minimum required plan version is displayed.
   * - If the current plan is already the Enterprise Edition, this parameter is always empty.
   * 
   * @example
   * basic
   */
  minEffectPlan?: string;
  /**
   * @remarks
   * The quota value.
   * 
   * @example
   * quotaValue1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      isEffect: 'IsEffect',
      minEffectPlan: 'MinEffectPlan',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isEffect: 'string',
      minEffectPlan: 'string',
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

export class ListQuotasMinEffectPlanResponseBodyQuotas extends $dara.Model {
  /**
   * @remarks
   * The name of the quota. Valid values:
   * - **waf:phase:http_anti_scan:actions**: WAF scan protection - action enumeration
   * - **waf:phase:http_bot:actions**: WAF bot management - all action enumerations
   * - **waf:phase:http_bot:http_custom_cc_dev:characteristic:fields**: WAF bot management - statistical object enumeration for custom device rate limiting
   * - **waf:phase:http_bot:http_custom_cc_ip:characteristic:fields**: WAF bot management - statistical object enumeration for custom IP rate limiting
   * - ****waf:phase:http_bot:match:symbols****: WAF bot management - match symbol enumeration
   * - **waf:phase:http_bot:http_custom_cc:characteristic:fields**: WAF bot management - statistical object enumeration for custom session rate limiting
   * - **waf:phase:http_bot:match:fields**: WAF bot management phase - match field enumeration
   * - **waf:phase:http_whitelist:match:symbols**: WAF whitelist - match symbol enumeration
   * - **waf:phase:http_whitelist:match:fields**: WAF whitelist - match field enumeration
   * - **waf:phase:http_anti_scan:http_directory_traversal:characteristic:fields**: WAF scan protection - statistical object enumeration for folder traverse blocking
   * - **waf:phase:http_anti_scan:http_high_frequency:characteristic:fields**: WAF scan protection - statistical object enumeration for high-frequency scan blocking
   * - **waf:phase:http_anti_scan:match:symbols**: WAF scan protection - match symbol enumeration
   * - **waf:phase:http_anti_scan:match:fields**: WAF scan protection - match field enumeration
   * - **waf:phase:http_managed:actions**: WAF managed rules - action enumeration
   * - **waf:phase:http_managed:group:reference:ids**: WAF managed rules - referenced rule group enumeration
   * - **waf:phase:http_ratelimit:actions**: WAF rate limiting - action enumeration
   * - **waf:phase:http_ratelimit:ttls**: WAF rate limiting - duration enumeration
   * - **waf:phase:http_ratelimit:intervals**: WAF rate limiting - statistical duration
   * - **waf:phase:http_ratelimit:http_ratelimit:characteristic:fields**: WAF rate limiting - match characteristic enumeration for control type rules
   * - **waf:phase:http_ratelimit:match:symbols**: WAF rate limiting rule phase - match symbol enumeration
   * - **waf:phase:http_ratelimit:match:fields**: WAF rate limiting rule phase - match field enumeration
   * - **waf:phase:http_custom:actions**: WAF custom rule phase - action enumeration
   * - **waf:phase:http_custom:match:symbols**: WAF custom rule phase - match symbol enumeration
   * - **waf:phase:http_custom:match:fields**: WAF custom rule phase - match fields
   * - **waitingroom|wr_queueing_method**: Waiting room - queuing method
   * - **origin_rules|origin_scheme**: Back-to-origin rules - back-to-origin protocol
   * - **origin_rules|origin_sni**: Back-to-origin rules - back-to-origin SNI
   * - **origin_rules|origin_host**: Back-to-origin rules - back-to-origin host
   * - **fourlayeracceleration**: Layer 4 acceleration
   * - **rtlog_service**: Real-time log feature switch
   * - **dashboard_traffic**: Value-added capability for network traffic analysis
   * - **custom_name_server**: Custom NS name
   * - **waf:phase:http_bot:enable**: WAF bot management switch
   * - **waf:phase:http_whitelist:enable**: WAF whitelist switch
   * - **instantlog**: Whether instant logs are active
   * - **waf:phase:http_anti_scan:enable**: WAF scan protection switch
   * - **waf:phase:http_managed:group:reference:enable**: WAF managed rules - configure referenced rule group switch
   * - **waf:phase:http_managed:enable**: WAF managed rules switch
   * - **waf:phase:http_ratelimit:on_hit:enable**: WAF rate limiting - apply to cached requests switch
   * - **ddos**: DDoS instance
   * - **waf:phase:http_ratelimit:enable**: WAF rate limiting rule phase switch
   * - **waf:phase:http_custom:enable**: WAF custom rule phase switch
   * - **waf:phase:all:page:reference:enable**: WAF custom response page switch
   * - **rules_support_regex**: Whether the rule DPI engine supports regular expression operations
   * - **waitingroom_event**: Waiting room - scheduled events
   * - **waitingroom_rule**: Waiting room - bypass waiting room
   * - **waitingroom|wr_json_response**: Waiting room - enable JSON response
   * - **waitingroom|wr_disable_session_renewal**: Waiting room - disable session renewal
   * - **origin_rules|dns_record**: Back-to-origin rules - DNS record
   * - **managed_transforms|add_client_geolocation_headers**: Whether the real client IP header is active in transformation rules
   * - **tiered_cache|regional_enable**: Area cache
   * - **real_client_ip_header**: Client IP header
   * 
   * @example
   * waf:phase:http_anti_scan:actions
   */
  quotaName?: string;
  /**
   * @remarks
   * The threshold details of the quota.
   */
  quotaValueDetail?: ListQuotasMinEffectPlanResponseBodyQuotasQuotaValueDetail[];
  /**
   * @remarks
   * The threshold type of the quota. Valid values:
   * - value: enumeration type. A quota of the enumeration type has multiple enumeration thresholds. For each enumeration threshold, the response indicates whether it is available in the current plan version. If it is unavailable, the response indicates the minimum required plan version.
   * - bool: Boolean type. A quota of the Boolean type is abstracted into two enumeration thresholds: true and false. To check whether the quota is available in the current plan version and identify the minimum required plan version, you only need to focus on the quota details where the enumeration value is true.
   * 
   * @example
   * value
   */
  quotaValueType?: string;
  static names(): { [key: string]: string } {
    return {
      quotaName: 'QuotaName',
      quotaValueDetail: 'QuotaValueDetail',
      quotaValueType: 'QuotaValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaName: 'string',
      quotaValueDetail: { 'type': 'array', 'itemType': ListQuotasMinEffectPlanResponseBodyQuotasQuotaValueDetail },
      quotaValueType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.quotaValueDetail)) {
      $dara.Model.validateArray(this.quotaValueDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasMinEffectPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the minimum required plan versions for the quotas.
   */
  quotas?: ListQuotasMinEffectPlanResponseBodyQuotas[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3C6CCEC4-6B88-4D4A-93E4-D47B3D92CF8F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      quotas: 'Quotas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotas: { 'type': 'array', 'itemType': ListQuotasMinEffectPlanResponseBodyQuotas },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.quotas)) {
      $dara.Model.validateArray(this.quotas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

