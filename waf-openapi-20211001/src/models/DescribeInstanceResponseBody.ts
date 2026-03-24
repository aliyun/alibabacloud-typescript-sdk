// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceResponseBodyDetails extends $dara.Model {
  /**
   * @remarks
   * The maximum number of IP addresses that can be added to the match content. For more information about match content, see [Match conditions](https://help.aliyun.com/document_detail/374354.html).
   * 
   * @example
   * 100
   */
  aclRuleMaxIpCount?: number;
  /**
   * @remarks
   * Indicates whether scan protection is supported. Valid values:
   * 
   * - **true**: Supported.
   * 
   * - **false**: Not supported.
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
   * The maximum number of back-to-origin IP addresses that can be configured.
   * 
   * @example
   * 20
   */
  backendMaxCount?: number;
  /**
   * @remarks
   * Indicates whether basic protection rules are supported. Valid values:
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
   * Indicates whether bot management is supported. Valid values:
   * 
   * - **true**: Supported.
   * 
   * - **false**: Not supported.
   * 
   * @example
   * true
   */
  bot?: boolean;
  /**
   * @remarks
   * Indicates whether scenario-specific bot protection for apps is supported. Valid values:
   * 
   * - **true**: Supported.
   * 
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
   * Indicates whether scenario-specific bot protection for websites is supported. Valid values:
   * 
   * - **true**: Supported.
   * 
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
   * 
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
   * The maximum number of protection rules that can be included in a single custom response template.
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
   * Indicates whether custom rules are supported. Valid values:
   * 
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
   * The action string for the custom rule.
   * 
   * @example
   * block
   */
  customRuleAction?: string;
  /**
   * @remarks
   * The match condition for the custom rule. For more information, see the description of the **conditions** parameter for **custom_acl** rules in CreateDefenseRule.
   * 
   * @example
   * URL
   */
  customRuleCondition?: string;
  /**
   * @remarks
   * The maximum number of protection rules that can be included in a single custom rule template.
   * 
   * @example
   * 100
   */
  customRuleInTemplateMaxCount?: number;
  /**
   * @remarks
   * The rate limiting object for the custom rule.
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
   * The maximum number of protected objects that can be included in a protection group.
   * 
   * @example
   * 100
   */
  defenseObjectInGroupMaxCount?: number;
  /**
   * @remarks
   * The maximum number of protected objects that can be associated with a template.
   * 
   * @example
   * 100
   */
  defenseObjectInTemplateMaxCount?: number;
  /**
   * @remarks
   * The maximum number of protected objects that can be configured.
   * 
   * @example
   * 20,000
   */
  defenseObjectMaxCount?: number;
  /**
   * @remarks
   * Indicates whether data leak prevention is supported. Valid values:
   * 
   * - **true**: Supported.
   * 
   * - **false**: Not supported.
   * 
   * @example
   * true
   */
  dlp?: boolean;
  /**
   * @remarks
   * The maximum number of protection rules that can be included in a single data leak prevention template.
   * 
   * @example
   * 50
   */
  dlpRuleInTemplateMaxCount?: number;
  /**
   * @remarks
   * The maximum number of data leak prevention templates that can be configured.
   * 
   * @example
   * 50
   */
  dlpTemplateMaxCount?: number;
  /**
   * @remarks
   * The pay-as-you-go QPS of the subscription instance. For more information, see [WAF 3.0 subscription plans](https://help.aliyun.com/document_detail/441231.html).
   * 
   * > This parameter has no meaning for pay-as-you-go instances.
   * 
   * @example
   * 2000
   */
  elasticQps?: number;
  /**
   * @remarks
   * Indicates whether exclusive IP addresses are supported. Valid values:
   * 
   * - **true**: Supported.
   * 
   * - **false**: Not supported.
   * 
   * @example
   * true
   */
  exclusiveIp?: boolean;
  /**
   * @remarks
   * The extra QPS of the subscription instance. For more information, see [WAF 3.0 subscription plans](https://help.aliyun.com/document_detail/441231.html).
   * 
   * > This parameter has no meaning for pay-as-you-go instances.
   * 
   * @example
   * 10000
   */
  extendQps?: number;
  /**
   * @remarks
   * The free queries per second (QPS) of the subscription instance. For more information, see [WAF 3.0 subscription plans](https://help.aliyun.com/document_detail/441231.html).
   * 
   * > This parameter has no meaning for pay-as-you-go instances.
   * 
   * @example
   * 1000
   */
  freeQps?: number;
  /**
   * @remarks
   * Indicates whether Global Server Load Balancing (GSLB) is supported. Valid values:
   * 
   * - **true**: Supported.
   * 
   * - **false**: Not supported.
   * 
   * @example
   * true
   */
  gslb?: boolean;
  /**
   * @remarks
   * The available HTTP ports. For more information, see [Port numbers supported by WAF]().
   * 
   * @example
   * 80
   */
  httpPorts?: string;
  /**
   * @remarks
   * The available HTTPS ports. For more information, see [Port numbers supported by WAF]().
   * 
   * @example
   * 443
   */
  httpsPorts?: string;
  /**
   * @remarks
   * Indicates whether the IP address blacklist is supported. Valid values:
   * 
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
   * The maximum number of protection rules that can be included in a single blacklist template.
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
   * Indicates whether IPv6 is supported. Valid values:
   * 
   * - **true**: Supported.
   * 
   * - **false**: Not supported.
   * 
   * @example
   * true
   */
  ipv6?: boolean;
  /**
   * @remarks
   * Indicates whether Simple Log Service is supported. Valid values:
   * 
   * - **true**: Supported.
   * 
   * - **false**: Not supported.
   * 
   * @example
   * true
   */
  logService?: boolean;
  /**
   * @remarks
   * Indicates whether critical event protection is supported. Valid values:
   * 
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
   * The traffic billing protection threshold for the pay-as-you-go instance. For more information, see [Traffic billing protection](https://help.aliyun.com/document_detail/2249021.html) for pay-as-you-go instances.
   * 
   * > This parameter has no meaning for subscription instances.
   * 
   * @example
   * 2000
   */
  qpsBillingCap?: number;
  /**
   * @remarks
   * Indicates whether webpage tamper protection is supported. Valid values:
   * 
   * - **true**: Supported.
   * 
   * - **false**: Not supported.
   * 
   * @example
   * true
   */
  tamperproof?: boolean;
  /**
   * @remarks
   * The maximum number of protection rules that can be included in a single webpage tamper protection template.
   * 
   * @example
   * 50
   */
  tamperproofRuleInTemplateMaxCount?: number;
  /**
   * @remarks
   * The maximum number of webpage tamper protection templates that can be configured.
   * 
   * @example
   * 50
   */
  tamperproofTemplateMaxCount?: number;
  /**
   * @remarks
   * The maximum number of IP addresses that can be imported to the IP address blacklist in a single batch.
   * 
   * @example
   * 2,000
   */
  vastIpBlacklistInFileMaxCount?: number;
  /**
   * @remarks
   * The maximum number of IP addresses that can be added to the IP address blacklist from the console in a single operation.
   * 
   * @example
   * 500
   */
  vastIpBlacklistInOperationMaxCount?: number;
  /**
   * @remarks
   * The maximum number of IP addresses that can be added to the IP address blacklist for a single user.
   * 
   * @example
   * 50,000
   */
  vastIpBlacklistMaxCount?: number;
  /**
   * @remarks
   * Indicates whether the IP address whitelist is supported. Valid values:
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
   * The logical operator for the whitelist rule. For more information, see the description of the **conditions** parameter for **whitelist** rules in CreateDefenseRule.
   * 
   * @example
   * contain
   */
  whitelistLogical?: string;
  /**
   * @remarks
   * The match field for the whitelist rule. For more information, see the description of the **conditions** parameter for **whitelist** rules in CreateDefenseRule.
   * 
   * @example
   * URL
   */
  whitelistRuleCondition?: string;
  /**
   * @remarks
   * The maximum number of protection rules that can be included in a single whitelist template.
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
      antiScan: 'AntiScan',
      antiScanTemplateMaxCount: 'AntiScanTemplateMaxCount',
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
      ipBlacklist: 'IpBlacklist',
      ipBlacklistIpInRuleMaxCount: 'IpBlacklistIpInRuleMaxCount',
      ipBlacklistRuleInTemplateMaxCount: 'IpBlacklistRuleInTemplateMaxCount',
      ipBlacklistTemplateMaxCount: 'IpBlacklistTemplateMaxCount',
      ipv6: 'Ipv6',
      logService: 'LogService',
      majorProtection: 'MajorProtection',
      majorProtectionTemplateMaxCount: 'MajorProtectionTemplateMaxCount',
      qpsBillingCap: 'QpsBillingCap',
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
      antiScan: 'boolean',
      antiScanTemplateMaxCount: 'number',
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
      ipBlacklist: 'boolean',
      ipBlacklistIpInRuleMaxCount: 'number',
      ipBlacklistRuleInTemplateMaxCount: 'number',
      ipBlacklistTemplateMaxCount: 'number',
      ipv6: 'boolean',
      logService: 'boolean',
      majorProtection: 'boolean',
      majorProtectionTemplateMaxCount: 'number',
      qpsBillingCap: 'number',
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
   * The details of the instance.
   */
  details?: DescribeInstanceResponseBodyDetails;
  /**
   * @remarks
   * The edition of the WAF instance.
   * 
   * @example
   * default_version
   */
  edition?: string;
  /**
   * @remarks
   * The expiration time of the instance. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 4809859200000
   */
  endTime?: number;
  /**
   * @remarks
   * Indicates whether the instance has an overdue payment:
   * 
   * - **0**: No.
   * 
   * - **1**: Yes.
   * 
   * @example
   * 1
   */
  inDebt?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * @example
   * waf-cn-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - **POSTPAY**: The instance is a pay-as-you-go instance.
   * 
   * - **PREPAY**: The instance is a subscription instance.
   * 
   * @example
   * POSTPAY
   */
  payType?: string;
  /**
   * @remarks
   * The processing status of the instance. Valid values:
   * 
   * - **commodity_converting**: The instance is being upgraded or downgraded.
   * 
   * - **commodity_convert_check_failed**: The check for the instance upgrade or downgrade fails.
   * 
   * - **commodity_convert_process_failed**: The instance upgrade or downgrade fails.
   * 
   * - **order_create_failed**: The order fails to be created.
   * 
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
   * The request ID.
   * 
   * @example
   * 66A98669-CC6E-4F3E-80A6-3014697B11AE
   */
  requestId?: string;
  /**
   * @remarks
   * The time when the instance was purchased. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1668496310000
   */
  startTime?: number;
  /**
   * @remarks
   * The current status of the instance. Valid values:
   * 
   * - **1**: Normal.
   * 
   * - **2**: The instance has expired.
   * 
   * - **3**: The instance is released.
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

