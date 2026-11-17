// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The instance IDs. Separate multiple IDs with commas (,). You can obtain the instance IDs by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * sp-xcdn-96wblslz****,sp-xcdn-81wblslz****
   */
  instanceIds?: string;
  /**
   * @remarks
   * The quota names. Separate multiple names with commas (,). Valid values:
   * 
   * - **waf:phase:http_anti_scan:actions**: Action enumeration for WAF scan protection.
   * - **waf:phase:http_bot:actions**: Action enumeration for WAF bot management.
   * - **waf:phase:http_bot:http_custom_cc_dev:characteristic:fields**: Statistical object enumeration for custom device rate limiting in WAF bot management.
   * - **waf:phase:http_bot:http_custom_cc_ip:characteristic:fields**: Statistical object enumeration for custom IP rate limiting in WAF bot management.
   * - ****waf:phase:http_bot:match:symbols****: Match operator enumeration for WAF bot management.
   * - **waf:phase:http_bot:http_custom_cc:characteristic:fields**: Statistical object enumeration for custom session rate limiting in WAF bot management.
   * - **waf:phase:http_bot:match:fields**: Match field enumeration for WAF bot management.
   * - **waf:phase:http_whitelist:match:symbols**: Match operator enumeration for the WAF whitelist.
   * - **waf:phase:http_whitelist:match:fields**: Match field enumeration for the WAF whitelist.
   * - **waf:phase:http_anti_scan:http_directory_traversal:characteristic:fields**: Statistical object enumeration for folder traverse blocking in WAF scan protection.
   * - **waf:phase:http_anti_scan:http_high_frequency:characteristic:fields**: Statistical object enumeration for high-frequency scan blocking in WAF scan protection.
   * - **waf:phase:http_anti_scan:match:symbols**: Match operator enumeration for WAF scan protection.
   * - **waf:phase:http_anti_scan:match:fields**: Match field enumeration for WAF scan protection.
   * - **waf:phase:http_managed:actions**: Action enumeration for WAF managed rules.
   * - **waf:phase:http_managed:group:reference:ids**: Referenced rule group enumeration for WAF managed rules.
   * - **waf:phase:http_ratelimit:actions**: Action enumeration for WAF rate limiting.
   * - **waf:phase:http_ratelimit:ttls**: Duration enumeration for WAF rate limiting.
   * - **waf:phase:http_ratelimit:intervals**: Statistical duration for WAF rate limiting.
   * - **waf:phase:http_ratelimit:http_ratelimit:characteristic:fields**: Match feature enumeration for WAF rate limiting rules.
   * - **waf:phase:http_ratelimit:match:symbols**: Match operator enumeration for WAF rate limiting rules.
   * - **waf:phase:http_ratelimit:match:fields**: Match field enumeration for WAF rate limiting rules.
   * - **waf:phase:http_custom:actions**: Action enumeration for WAF custom rules.
   * - **waf:phase:http_custom:match:symbols**: Match operator enumeration for WAF custom rules.
   * - **waf:phase:http_custom:match:fields**: Match fields for WAF custom rules.
   * - **waiting_roomqueuing_method**: Queuing method for the waiting room.
   * - **origin_rulesorigin_scheme**: Back-to-origin protocol for origin rules.
   * - **origin_rulesorigin_sni**: Back-to-origin SNI for origin rules.
   * - **origin_rulesorigin_host**: Back-to-origin host for origin rules.
   * - **fourlayeracceleration**: Layer 4 acceleration.
   * - **rtlog_service**: Real-time log feature switch.
   * - **dashboard_traffic**: Value-added capability for network traffic analysis.
   * - **custom_name_server**: Custom NS name.
   * - **waf:phase:http_bot:enable**: WAF bot management switch.
   * - **waf:phase:http_whitelist:enable**: WAF whitelist switch.
   * - **instantlog**: Whether instant logs are active.
   * - **waf:phase:http_anti_scan:enable**: WAF scan protection switch.
   * - **waf:phase:http_managed:group:reference:enable**: Switch for configuring referenced rule groups in WAF managed rules.
   * - **waf:phase:http_managed:enable**: WAF managed rules switch.
   * - **waf:phase:http_ratelimit:on_hit:enable**: Switch for applying WAF rate limiting to cached requests.
   * - **ddos**: DDoS instance.
   * - **waf:phase:http_ratelimit:enable**: WAF rate limiting rule switch.
   * - **waf:phase:http_custom:enable**: WAF custom rule switch.
   * - **waf:phase:all:page:reference:enable**: WAF custom response page switch.
   * - **rules_support_regex**: Whether the rule DPI engine supports regular expression operations.
   * - **waiting_room_event**: Scheduled events for the waiting room.
   * - **waiting_room_rule**: Bypass waiting room.
   * - **waiting_roomjson_response**: Enable JSON response for the waiting room.
   * - **waiting_roomdisable_session_renewal**: Disable session renewal for the waiting room.
   * - **origin_rulesdns_record**: DNS record for origin rules.
   * - **managed_transformsadd_client_geolocation_headers**: Whether the real client IP header is active in transformation rules.
   * - **tiered_cacheregional_enable**: Area cache.
   * - **real_client_ip_header**: Client IP header.
   * - **data_timerange**: Data query time in minutes.
   * - **cache_rulesedge_cache_ttl**: Edge node TTL for cache rules.
   * - **cache_rulesbrowser_cache_ttl**: Browser TTL for cache rules.
   * - **fourLayerRecordCount**: Record count limit for Layer 4 acceleration.
   * - **waitingroomRuleCount**: Number of rules that can be associated with a single waitingRoomId.
   * - **waitingroomEventCount**: Number of events that can be associated with a single waitingRoomId.
   * - **waitingroom_custom_pathhost**: Hostname and path for the waiting room.
   * - **er_routers**: Function routing.
   * - **cache_rulesrule_quota**: Cache rules.
   * - **configuration_rulesrule_quota**: Configuration rules.
   * - **redirect_rulesrule_quota**: Redirect rules.
   * - **compression_rulesrule_quota**: Compression rules.
   * - **origin_rulesrule_quota**: Origin rules.
   * - **waf:phase:http_bot:rulesets_per_instance:less_than_or_equal**: Maximum number of rule groups per instance in WAF bot management.
   * - **waf:phase:http_whitelist:rules_per_instance:less_than_or_equal**: Maximum number of rules per instance in the WAF whitelist.
   * - **rtlog_quota**: Quota for the number of real-time log push tasks.
   * - **waf:phase:http_anti_scan:rulesets_per_instance:less_than_or_equal**: Maximum number of rule groups per instance in WAF scan protection.
   * - **ddos_instance**: Number of DDoS instances.
   * - **waf:phase:http_ratelimit:rules_per_instance:less_than_or_equal**: Maximum number of WAF rate limiting rules.
   * - **waf:phase:http_custom:rules_per_instance:less_than_or_equal**: Maximum number of rules per instance for WAF custom rules.
   * - **ruleNestedConditionalCount**: Nesting level of rules.
   * - **waiting_room**: Waiting room.
   * - **transition_rule**: Transformation rules.
   * - **customHttpCert**: Number of custom certificates.
   * - **free_cert**: Number of free certificates.
   * - **preload**: Prefetch.
   * - **refresh_cache_tag**: Refresh by cache tag.
   * - **refresh_ignore_param**: Refresh without parameters.
   * - **refresh_directory**: Refresh by folder.
   * - **refresh_hostname**: Refresh by hostname.
   * - **refresh_all**: Purge all caches.
   * - **refresh_file**: URL refresh.
   * - **wildcard**: Number of wildcard domain names.
   * - **recordCount**: Number of Layer 7 records.
   * - **siteCount**: Number of sites.
   * - **httpsrule_quota**: Number of SSL/TLS rules.
   * 
   * This parameter is required.
   * 
   * @example
   * waf:phase:http_anti_scan:actions, waf:phase:http_bot:actions, siteCount
   */
  quotaName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      quotaName: 'QuotaName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
      quotaName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

