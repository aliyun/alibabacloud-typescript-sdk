// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotasMinEffectPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The plan instance ID. You can obtain the plan instance ID by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation. You must specify at least one of the InstanceId and SiteId parameters.
   * 
   * @example
   * esa-site-aug976vv2u4g
   */
  instanceId?: string;
  /**
   * @remarks
   * The plan quota names. Separate multiple names with commas (,). Valid values:
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
   * - **waiting_room|queuing_method**: The queuing method for the waiting room.
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
   * - **waiting_room_event**: The scheduled event for the waiting room.
   * - **waiting_room_rule**: The waiting room bypass rule.
   * - **waiting_room|json_response**: The JSON response switch for the waiting room.
   * - **waiting_room|disable_session_renewal**: The switch for disabling session renewal in the waiting room.
   * - **origin_rules|dns_record**: The DNS record for origin rules.
   * - **managed_transforms|add_client_geolocation_headers**: Specifies whether the real client IP header is active in transform rules.
   * - **tiered_cache|regional_enable**: area caching.
   * - **real_client_ip_header**: The client IP header.
   * 
   * This parameter is required.
   * 
   * @example
   * waf:phase:http_anti_scan:actions
   */
  quotaNames?: string;
  /**
   * @remarks
   * The site ID. You can obtain the site ID by calling the [ListSites](~~ListSites~~) operation.
   * 
   * @example
   * 123456****
   * 
   * **if can be null:**
   * false
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      quotaNames: 'QuotaNames',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      quotaNames: 'string',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

