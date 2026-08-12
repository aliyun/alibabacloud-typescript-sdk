// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceResponseBodyDetails extends $dara.Model {
  /**
   * @remarks
   * The maximum number of IP addresses that can be added to the match content. For more information about match content, refer to [Match condition description](https://help.aliyun.com/document_detail/374354.html).
   * 
   * @example
   * 100
   */
  aclRuleMaxIpCount?: number;
  /**
   * @remarks
   * Indicates whether Agentic API security is enabled.
   * 
   * @example
   * true
   */
  agenticApisec?: boolean;
  /**
   * @remarks
   * Specifies whether scan protection is supported. Valid values:
   * 
   * @example
   * true
   */
  antiScan?: boolean;
  /**
   * @remarks
   * The maximum number of scan protection templates that can be configured.
   * 
   * @example
   * 20
   */
  antiScanTemplateMaxCount?: number;
  /**
   * @remarks
   * Indicates whether API security is enabled.
   * 
   * @example
   * false
   */
  apisec?: boolean;
  /**
   * @remarks
   * The maximum number of back-to-origin IP addresses that can be configured.
   * 
   * @example
   * 20
   */
  backendMaxCount?: number;
  /**
   * @remarks
   * Specifies whether basic protection rules are supported. Valid values:
   * 
   * - **true**: Supported.
   * 
   * - **false**: Not supported.
   * 
   * @example
   * true
   */
  baseWafGroup?: boolean;
  /**
   * @remarks
   * The maximum number of protection rules that can be included in a single basic protection rule template.
   * 
   * @example
   * 100
   */
  baseWafGroupRuleInTemplateMaxCount?: number;
  /**
   * @remarks
   * The maximum number of basic protection rule templates that can be configured.
   * 
   * @example
   * 20
   */
  baseWafGroupRuleTemplateMaxCount?: number;
  /**
   * @remarks
   * Specifies whether bot management is supported. Valid values:
   * 
   * @example
   * true
   */
  bot?: boolean;
  /**
   * @remarks
   * Indicates whether scenario-specific protection against app crawlers is supported. Valid values:
   * - **true**: Supported.
   * - **false**: Not supported.
   * 
   * @example
   * true
   */
  botApp?: string;
  /**
   * @remarks
   * The maximum number of bot management protection templates that can be configured.
   * 
   * @example
   * 50
   */
  botTemplateMaxCount?: number;
  /**
   * @remarks
   * Specifies whether scenario-specific protection against web crawlers is supported. Valid values:
   * - **true**: Supported.
   * - **false**: Not supported.
   * 
   * @example
   * true
   */
  botWeb?: string;
  /**
   * @remarks
   * The maximum number of CNAMEs that can be added.
   * 
   * @example
   * 1000
   */
  cnameResourceMaxCount?: number;
  /**
   * @remarks
   * Indicates whether custom responses are supported. Valid values:
   * - **true**: Supported.
   * 
   * - **false**: Not supported.
   * 
   * @example
   * true
   */
  customResponse?: boolean;
  /**
   * @remarks
   * The maximum number of protection rules that a single custom response template can contain.
   * 
   * @example
   * 100
   */
  customResponseRuleInTemplateMaxCount?: number;
  /**
   * @remarks
   * The maximum number of custom response templates that can be configured.
   * 
   * @example
   * 20
   */
  customResponseTemplateMaxCount?: number;
  /**
   * @remarks
   * Specifies whether custom rules are supported. Valid values:
   * - **true**: Supported.
   * 
   * - **false**: Not supported.
   * 
   * @example
   * true
   */
  customRule?: boolean;
  /**
   * @remarks
   * The strings included in custom rules.
   * 
   * @example
   * block
   */
  customRuleAction?: string;
  /**
   * @remarks
   * The match conditions for custom rules. For more information, refer to the parameter description of **custom rule (custom_acl) conditions** in [CreateDefenseRule](https://help.aliyun.com/document_detail/461421.html).
   * 
   * @example
   * URL
   */
  customRuleCondition?: string;
  /**
   * @remarks
   * The maximum number of protection rules that a single custom rule template can contain.
   * 
   * @example
   * 100
   */
  customRuleInTemplateMaxCount?: number;
  /**
   * @remarks
   * The rate limiting object for custom rules.
   * 
   * @example
   * header
   */
  customRuleRatelimitor?: string;
  /**
   * @remarks
   * The maximum number of custom rule templates that can be configured.
   * 
   * @example
   * 20
   */
  customRuleTemplateMaxCount?: number;
  /**
   * @remarks
   * The maximum number of protection groups that can be configured.
   * 
   * @example
   * 100
   */
  defenseGroupMaxCount?: number;
  /**
   * @remarks
   * The maximum number of protection objects that a protection group can contain.
   * 
   * @example
   * 100
   */
  defenseObjectInGroupMaxCount?: number;
  /**
   * @remarks
   * The maximum number of protection objects that can be associated with a single template.
   * 
   * @example
   * 100
   */
  defenseObjectInTemplateMaxCount?: number;
  /**
   * @remarks
   * The maximum number of protection objects that can be configured.
   * 
   * @example
   * 20000
   */
  defenseObjectMaxCount?: number;
  /**
   * @remarks
   * Specifies whether data leak prevention is supported. Valid values:
   * - **true**: Supported.
   * - **false**: Not supported.
   * 
   * @example
   * true
   */
  dlp?: boolean;
  /**
   * @remarks
   * The maximum number of protection rules that a single information leak prevention template can contain.
   * 
   * @example
   * 50
   */
  dlpRuleInTemplateMaxCount?: number;
  /**
   * @remarks
   * The maximum number of information leak prevention templates that can be configured.
   * 
   * @example
   * 50
   */
  dlpTemplateMaxCount?: number;
  /**
   * @remarks
   * The burstable QPS value for the subscription instance with pay-as-you-go billing for burstable capacity. For more information, see [WAF 3.0 editions](https://help.aliyun.com/document_detail/441231.html).
   * > This parameter has no practical meaning for **pay-as-you-go** instances.
   * 
   * @example
   * 2000
   */
  elasticQps?: number;
  /**
   * @remarks
   * Specifies whether exclusive IP addresses are supported. Valid values:
   * 
   * @example
   * true
   */
  exclusiveIp?: boolean;
  /**
   * @remarks
   * The extended QPS value of the subscription instance. For more information, see [WAF 3.0 editions](https://help.aliyun.com/document_detail/441231.html).
   * > This parameter is not applicable to **pay-as-you-go** instances.
   * 
   * @example
   * 10000
   */
  extendQps?: number;
  /**
   * @remarks
   * The free QPS value included in the subscription plan. For more information, see [WAF 3.0 editions](https://help.aliyun.com/document_detail/441231.html).
   * 
   * > This parameter has no practical meaning for **pay-as-you-go** instances.
   * 
   * @example
   * 1000
   */
  freeQps?: number;
  /**
   * @remarks
   * Specifies whether Global Server Load Balancing (GSLB) is supported. Valid values:
   * 
   * @example
   * true
   */
  gslb?: boolean;
  /**
   * @remarks
   * The available HTTP port range. For more information, refer to [Ports supported by WAF](https://help.aliyun.com/document_detail/385578.html).
   * 
   * @example
   * 80
   */
  httpPorts?: string;
  /**
   * @remarks
   * The available HTTPS port range. For more information, refer to [Ports supported by WAF](https://help.aliyun.com/document_detail/385578.html).
   * 
   * @example
   * 443
   */
  httpsPorts?: string;
  /**
   * @remarks
   * Indicates whether hybrid cloud is enabled.
   * 
   * @example
   * true
   */
  hybridCloud?: boolean;
  /**
   * @remarks
   * The number of hybrid cloud extended nodes.
   * 
   * @example
   * 3
   */
  hybridCloudNodeExtend?: number;
  /**
   * @remarks
   * Indicates whether the IP blacklist is supported. Valid values:
   * - **true**: Supported.
   * 
   * - **false**: Not supported.
   * 
   * @example
   * true
   */
  ipBlacklist?: boolean;
  /**
   * @remarks
   * The maximum number of IP addresses that can be added to a blacklist rule.
   * 
   * @example
   * 200
   */
  ipBlacklistIpInRuleMaxCount?: number;
  /**
   * @remarks
   * The maximum number of protection rules that a single blacklist template can contain.
   * 
   * @example
   * 100
   */
  ipBlacklistRuleInTemplateMaxCount?: number;
  /**
   * @remarks
   * The maximum number of blacklist templates that can be configured.
   * 
   * @example
   * 20
   */
  ipBlacklistTemplateMaxCount?: number;
  /**
   * @remarks
   * Specifies whether IPv6 is supported. Valid values:
   * 
   * @example
   * true
   */
  ipv6?: boolean;
  /**
   * @remarks
   * Specifies whether the log service is supported. Valid values:
   * 
   * @example
   * true
   */
  logService?: boolean;
  /**
   * @remarks
   * Specifies whether critical event protection is supported. Valid values:
   * - **true**: Supported.
   * 
   * - **false**: Not supported.
   * 
   * @example
   * true
   */
  majorProtection?: boolean;
  /**
   * @remarks
   * The maximum number of critical event protection templates that can be configured.
   * 
   * @example
   * 20
   */
  majorProtectionTemplateMaxCount?: number;
  /**
   * @remarks
   * The QPS billing protection threshold for the pay-as-you-go edition. For more information, see [Traffic billing protection](https://help.aliyun.com/document_detail/2249021.html) for pay-as-you-go.
   * > This parameter has no practical meaning for **subscription** instances.
   * 
   * @example
   * 2000
   */
  qpsBillingCap?: number;
  /**
   * @remarks
   * Indicates whether the multi-account management feature is supported.
   * 
   * @example
   * true
   */
  resourceDirectory?: boolean;
  /**
   * @remarks
   * Specifies whether web tamper proofing is supported. Valid values:
   * 
   * @example
   * true
   */
  tamperproof?: boolean;
  /**
   * @remarks
   * The maximum number of protection rules that a single web tamper proofing template can contain.
   * 
   * @example
   * 50
   */
  tamperproofRuleInTemplateMaxCount?: number;
  /**
   * @remarks
   * The maximum number of web tamper proofing protection templates that can be configured.
   * 
   * @example
   * 50
   */
  tamperproofTemplateMaxCount?: number;
  /**
   * @remarks
   * The maximum number of IP addresses that can be imported to the IP blacklist in a single bulk import.
   * 
   * @example
   * 2000
   */
  vastIpBlacklistInFileMaxCount?: number;
  /**
   * @remarks
   * The maximum number of IP addresses that can be added to the IP blacklist in a single page operation.
   * 
   * @example
   * 500
   */
  vastIpBlacklistInOperationMaxCount?: number;
  /**
   * @remarks
   * The maximum number of IP blacklist entries that a single user can configure.
   * 
   * @example
   * 50000
   */
  vastIpBlacklistMaxCount?: number;
  /**
   * @remarks
   * Specifies whether the IP whitelist is supported. Valid values:
   * 
   * - **true**: Supported.
   * 
   * - **false**: Not supported.
   * 
   * @example
   * true
   */
  whitelist?: boolean;
  /**
   * @remarks
   * The logical operators for whitelist rules. For more information, refer to the parameter description of **whitelist rule (whitelist) conditions** in [CreateDefenseRule](https://help.aliyun.com/document_detail/461421.html).
   * 
   * @example
   * contain
   */
  whitelistLogical?: string;
  /**
   * @remarks
   * The match fields for whitelist rules. For more information, refer to the parameter description of **whitelist rule (whitelist) conditions** in [CreateDefenseRule](https://help.aliyun.com/document_detail/461421.html).
   * 
   * @example
   * URL
   */
  whitelistRuleCondition?: string;
  /**
   * @remarks
   * The maximum number of protection rules that a single whitelist template can contain.
   * 
   * @example
   * 100
   */
  whitelistRuleInTemplateMaxCount?: number;
  /**
   * @remarks
   * The maximum number of whitelist templates that can be configured.
   * 
   * @example
   * 20
   */
  whitelistTemplateMaxCount?: number;
  static names(): { [key: string]: string } {
    return {
      aclRuleMaxIpCount: 'AclRuleMaxIpCount',
      agenticApisec: 'AgenticApisec',
      antiScan: 'AntiScan',
      antiScanTemplateMaxCount: 'AntiScanTemplateMaxCount',
      apisec: 'Apisec',
      backendMaxCount: 'BackendMaxCount',
      baseWafGroup: 'BaseWafGroup',
      baseWafGroupRuleInTemplateMaxCount: 'BaseWafGroupRuleInTemplateMaxCount',
      baseWafGroupRuleTemplateMaxCount: 'BaseWafGroupRuleTemplateMaxCount',
      bot: 'Bot',
      botApp: 'BotApp',
      botTemplateMaxCount: 'BotTemplateMaxCount',
      botWeb: 'BotWeb',
      cnameResourceMaxCount: 'CnameResourceMaxCount',
      customResponse: 'CustomResponse',
      customResponseRuleInTemplateMaxCount: 'CustomResponseRuleInTemplateMaxCount',
      customResponseTemplateMaxCount: 'CustomResponseTemplateMaxCount',
      customRule: 'CustomRule',
      customRuleAction: 'CustomRuleAction',
      customRuleCondition: 'CustomRuleCondition',
      customRuleInTemplateMaxCount: 'CustomRuleInTemplateMaxCount',
      customRuleRatelimitor: 'CustomRuleRatelimitor',
      customRuleTemplateMaxCount: 'CustomRuleTemplateMaxCount',
      defenseGroupMaxCount: 'DefenseGroupMaxCount',
      defenseObjectInGroupMaxCount: 'DefenseObjectInGroupMaxCount',
      defenseObjectInTemplateMaxCount: 'DefenseObjectInTemplateMaxCount',
      defenseObjectMaxCount: 'DefenseObjectMaxCount',
      dlp: 'Dlp',
      dlpRuleInTemplateMaxCount: 'DlpRuleInTemplateMaxCount',
      dlpTemplateMaxCount: 'DlpTemplateMaxCount',
      elasticQps: 'ElasticQps',
      exclusiveIp: 'ExclusiveIp',
      extendQps: 'ExtendQps',
      freeQps: 'FreeQps',
      gslb: 'Gslb',
      httpPorts: 'HttpPorts',
      httpsPorts: 'HttpsPorts',
      hybridCloud: 'HybridCloud',
      hybridCloudNodeExtend: 'HybridCloudNodeExtend',
      ipBlacklist: 'IpBlacklist',
      ipBlacklistIpInRuleMaxCount: 'IpBlacklistIpInRuleMaxCount',
      ipBlacklistRuleInTemplateMaxCount: 'IpBlacklistRuleInTemplateMaxCount',
      ipBlacklistTemplateMaxCount: 'IpBlacklistTemplateMaxCount',
      ipv6: 'Ipv6',
      logService: 'LogService',
      majorProtection: 'MajorProtection',
      majorProtectionTemplateMaxCount: 'MajorProtectionTemplateMaxCount',
      qpsBillingCap: 'QpsBillingCap',
      resourceDirectory: 'ResourceDirectory',
      tamperproof: 'Tamperproof',
      tamperproofRuleInTemplateMaxCount: 'TamperproofRuleInTemplateMaxCount',
      tamperproofTemplateMaxCount: 'TamperproofTemplateMaxCount',
      vastIpBlacklistInFileMaxCount: 'VastIpBlacklistInFileMaxCount',
      vastIpBlacklistInOperationMaxCount: 'VastIpBlacklistInOperationMaxCount',
      vastIpBlacklistMaxCount: 'VastIpBlacklistMaxCount',
      whitelist: 'Whitelist',
      whitelistLogical: 'WhitelistLogical',
      whitelistRuleCondition: 'WhitelistRuleCondition',
      whitelistRuleInTemplateMaxCount: 'WhitelistRuleInTemplateMaxCount',
      whitelistTemplateMaxCount: 'WhitelistTemplateMaxCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclRuleMaxIpCount: 'number',
      agenticApisec: 'boolean',
      antiScan: 'boolean',
      antiScanTemplateMaxCount: 'number',
      apisec: 'boolean',
      backendMaxCount: 'number',
      baseWafGroup: 'boolean',
      baseWafGroupRuleInTemplateMaxCount: 'number',
      baseWafGroupRuleTemplateMaxCount: 'number',
      bot: 'boolean',
      botApp: 'string',
      botTemplateMaxCount: 'number',
      botWeb: 'string',
      cnameResourceMaxCount: 'number',
      customResponse: 'boolean',
      customResponseRuleInTemplateMaxCount: 'number',
      customResponseTemplateMaxCount: 'number',
      customRule: 'boolean',
      customRuleAction: 'string',
      customRuleCondition: 'string',
      customRuleInTemplateMaxCount: 'number',
      customRuleRatelimitor: 'string',
      customRuleTemplateMaxCount: 'number',
      defenseGroupMaxCount: 'number',
      defenseObjectInGroupMaxCount: 'number',
      defenseObjectInTemplateMaxCount: 'number',
      defenseObjectMaxCount: 'number',
      dlp: 'boolean',
      dlpRuleInTemplateMaxCount: 'number',
      dlpTemplateMaxCount: 'number',
      elasticQps: 'number',
      exclusiveIp: 'boolean',
      extendQps: 'number',
      freeQps: 'number',
      gslb: 'boolean',
      httpPorts: 'string',
      httpsPorts: 'string',
      hybridCloud: 'boolean',
      hybridCloudNodeExtend: 'number',
      ipBlacklist: 'boolean',
      ipBlacklistIpInRuleMaxCount: 'number',
      ipBlacklistRuleInTemplateMaxCount: 'number',
      ipBlacklistTemplateMaxCount: 'number',
      ipv6: 'boolean',
      logService: 'boolean',
      majorProtection: 'boolean',
      majorProtectionTemplateMaxCount: 'number',
      qpsBillingCap: 'number',
      resourceDirectory: 'boolean',
      tamperproof: 'boolean',
      tamperproofRuleInTemplateMaxCount: 'number',
      tamperproofTemplateMaxCount: 'number',
      vastIpBlacklistInFileMaxCount: 'number',
      vastIpBlacklistInOperationMaxCount: 'number',
      vastIpBlacklistMaxCount: 'number',
      whitelist: 'boolean',
      whitelistLogical: 'string',
      whitelistRuleCondition: 'string',
      whitelistRuleInTemplateMaxCount: 'number',
      whitelistTemplateMaxCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance details.
   */
  details?: DescribeInstanceResponseBodyDetails;
  /**
   * @remarks
   * The WAF edition.
   * 
   * @example
   * default_version
   */
  edition?: string;
  /**
   * @remarks
   * The time when the instance expires. The value is a UNIX timestamp. Unit: milliseconds. Format: ms.
   * 
   * @example
   * 4809859200000
   */
  endTime?: number;
  /**
   * @remarks
   * Indicates whether the current instance has an overdue payment. Valid values:
   * 
   * @example
   * 1
   */
  inDebt?: string;
  /**
   * @remarks
   * The WAF instance ID.
   * 
   * @example
   * waf-cn-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * @example
   * POSTPAY
   */
  payType?: string;
  /**
   * @remarks
   * The instance execution status. Valid values:
   * - **commodity_converting**: The commodity is being converted.
   * 
   * - **commodity_convert_check_failed**: The commodity conversion check failed.
   * 
   * - **commodity_convert_process_failed**: The commodity conversion failed.
   * - **order_create_failed**: The order failed to be created.
   * - **order_pending_payment**: The order is pending payment.
   * 
   * @example
   * order_pending_payment
   */
  processStatus?: string;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 66A98669-CC6E-4F3E-80A6-3014697B11AE
   */
  requestId?: string;
  /**
   * @remarks
   * The purchase time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1668496310000
   */
  startTime?: number;
  /**
   * @remarks
   * The current status of the instance. Valid values:
   * - **1**: Normal.
   * - **2**: Expired.
   * - **3**: Released.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      details: 'Details',
      edition: 'Edition',
      endTime: 'EndTime',
      inDebt: 'InDebt',
      instanceId: 'InstanceId',
      payType: 'PayType',
      processStatus: 'ProcessStatus',
      regionId: 'RegionId',
      requestId: 'RequestId',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: DescribeInstanceResponseBodyDetails,
      edition: 'string',
      endTime: 'number',
      inDebt: 'string',
      instanceId: 'string',
      payType: 'string',
      processStatus: 'string',
      regionId: 'string',
      requestId: 'string',
      startTime: 'number',
      status: 'number',
    };
  }

  validate() {
    if(this.details && typeof (this.details as any).validate === 'function') {
      (this.details as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

