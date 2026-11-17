// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotasMinEffectPlanResponseBodyQuotasQuotaValueDetail extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the quota value is available in the plan version corresponding to the current site. Valid values:
   * - ture: Available.
   * - false: Not available.
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
   * 
   * The return value of this parameter follows these rules:
   * - If the quota value is already available in the current plan version, this parameter is left empty, which means the minimum required plan version is not displayed.
   * - If the quota value is not available in the current plan version, the minimum required plan version is displayed.
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
   * The quota name. Valid values:
   * - **waf:phase:http_anti_scan:actions**: The action enumeration for WAF scan protection.
   * - **waf:phase:http_bot:actions**: The action enumeration for WAF bot management.
   * - **waf:phase:http_bot:http_custom_cc_dev:characteristic:fields**: The statistical object enumeration for the custom device rate limiting type in WAF bot management.
   * - **waf:phase:http_bot:http_custom_cc_ip:characteristic:fields**: The statistical object enumeration for the custom IP rate limiting type in WAF bot management.
   * - ****waf:phase:http_bot:match:symbols****: The match operator enumeration for WAF bot management.
   * - **waf:phase:http_bot:http_custom_cc:characteristic:fields**: The statistical object enumeration for the custom session rate limiting type in WAF bot management.
   * - **waf:phase:http_bot:match:fields**: The match field enumeration for WAF bot management.
   * - **waf:phase:http_whitelist:match:symbols**: The match operator enumeration for the WAF whitelist.
   * - **waf:phase:http_whitelist:match:fields**: The match field enumeration for the WAF whitelist.
   * - **waf:phase:http_anti_scan:http_directory_traversal:characteristic:fields**: The statistical object enumeration for the folder traverse blocking type in WAF scan protection.
   * - **waf:phase:http_anti_scan:http_high_frequency:characteristic:fields**: The statistical object enumeration for the high-frequency scan blocking type in WAF scan protection.
   * - **waf:phase:http_anti_scan:match:symbols**: The match operator enumeration for WAF scan protection.
   * - **waf:phase:http_anti_scan:match:fields**: The match field enumeration for WAF scan protection.
   * - **waf:phase:http_managed:actions**: The action enumeration for WAF managed rules.
   * - **waf:phase:http_managed:group:reference:ids**: The referenced rule group enumeration for WAF managed rules.
   * - **waf:phase:http_ratelimit:actions**: The action enumeration for WAF rate limiting.
   * - **waf:phase:http_ratelimit:ttls**: The duration enumeration for WAF rate limiting.
   * - **waf:phase:http_ratelimit:intervals**: The statistical duration for WAF rate limiting.
   * - **waf:phase:http_ratelimit:http_ratelimit:characteristic:fields**: The match feature enumeration for the control type rule in WAF rate limiting.
   * - **waf:phase:http_ratelimit:match:symbols**: The match operator enumeration for the WAF rate limiting rule phase.
   * - **waf:phase:http_ratelimit:match:fields**: The match field enumeration for the WAF rate limiting rule phase.
   * - **waf:phase:http_custom:actions**: The action enumeration for the WAF custom rule phase.
   * - **waf:phase:http_custom:match:symbols**: The match operator enumeration for the WAF custom rule phase.
   * - **waf:phase:http_custom:match:fields**: The match fields for the WAF custom rule phase.
   * - **waitingroom|wr_queueing_method**: The queuing method for the waiting room.
   * - **origin_rules|origin_scheme**: The back-to-origin protocol for origin rules.
   * - **origin_rules|origin_sni**: The back-to-origin SNI for origin rules.
   * - **origin_rules|origin_host**: The back-to-origin host for origin rules.
   * - **fourlayeracceleration**: Layer 4 acceleration.
   * - **rtlog_service**: The real-time log feature switch.
   * - **dashboard_traffic**: The value-added capability for network traffic analysis.
   * - **custom_name_server**: The custom NS name.
   * - **waf:phase:http_bot:enable**: The WAF bot management switch.
   * - **waf:phase:http_whitelist:enable**: The WAF whitelist switch.
   * - **instantlog**: Specifies whether instant logs are active.
   * - **waf:phase:http_anti_scan:enable**: The WAF scan protection switch.
   * - **waf:phase:http_managed:group:reference:enable**: The switch for configuring referenced rule groups in WAF managed rules.
   * - **waf:phase:http_managed:enable**: The WAF managed rules switch.
   * - **waf:phase:http_ratelimit:on_hit:enable**: The switch for applying WAF rate limiting to cache-hit requests.
   * - **ddos**: The DDoS instance.
   * - **waf:phase:http_ratelimit:enable**: The switch for the WAF rate limiting rule phase.
   * - **waf:phase:http_custom:enable**: The switch for the WAF custom rule phase.
   * - **waf:phase:all:page:reference:enable**: The WAF custom response page switch.
   * - **rules_support_regex**: Specifies whether the rule DPI engine supports regular expression operations.
   * - **waitingroom_event**: The scheduled event for the waiting room.
   * - **waitingroom_rule**: The waiting room bypass rule.
   * - **waitingroom|wr_json_response**: The JSON response switch for the waiting room.
   * - **waitingroom|wr_disable_session_renewal**: The switch for disabling session renewal in the waiting room.
   * - **origin_rules|dns_record**: The DNS record for origin rules.
   * - **managed_transforms|add_client_geolocation_headers**: Specifies whether the real client IP header is active in transform rules.
   * - **tiered_cache|regional_enable**: area caching.
   * - **real_client_ip_header**: The client IP header.
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
   * - value: Enumeration type. An enumeration quota has multiple enumeration thresholds. For each enumeration threshold, the response indicates whether it is available in the current plan version. If it is not available, the response indicates the minimum required plan version.
   * - bool: Boolean type. A boolean quota is abstracted into two enumeration thresholds: true and false. To check whether the quota is available in the current plan version and to find the minimum required plan version, you only need to focus on the quota details where the enumeration value is true.
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

