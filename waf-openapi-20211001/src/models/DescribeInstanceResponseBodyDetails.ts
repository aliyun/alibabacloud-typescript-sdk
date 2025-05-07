// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceResponseBodyDetails extends $dara.Model {
  /**
   * @remarks
   * The maximum number of IP addresses that can be added to the match content of a match condition. For more information, see [Match conditions](https://help.aliyun.com/document_detail/374354.html).
   * 
   * @example
   * 100
   */
  aclRuleMaxIpCount?: number;
  /**
   * @remarks
   * Indicates whether the scan protection module is supported. Valid values:
   * 
   * *   **true:** The scan protection module is supported.
   * *   **false:** The scan protection module is not supported.
   * 
   * @example
   * true
   */
  antiScan?: boolean;
  /**
   * @remarks
   * The maximum number of scan protection rule templates that can be configured.
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
   * Indicates whether the basic protection rule module is supported. Valid values:
   * 
   * *   **true:** The basic protection rule module is supported.
   * *   **false:** The basic protection rule module is not supported.
   * 
   * @example
   * true
   */
  baseWafGroup?: boolean;
  /**
   * @remarks
   * The maximum number of protection rules that can be included in a basic protection rule template.
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
   * Indicates whether the bot management module is supported. Valid values:
   * 
   * *   **true:** The bot management module is supported.
   * *   **false:** The bot management module is not supported.
   * 
   * @example
   * true
   */
  bot?: boolean;
  /**
   * @remarks
   * Indicates whether bot management for app protection is supported. Valid values:
   * 
   * *   **true:** Bot management for app protection is supported.
   * *   **false:** Bot management for app protection is not supported.
   * 
   * @example
   * true
   */
  botApp?: string;
  /**
   * @remarks
   * The maximum number of bot management rule templates that can be configured.
   * 
   * @example
   * 50
   */
  botTemplateMaxCount?: number;
  /**
   * @remarks
   * Indicates whether bot management for website protection is supported. Valid values:
   * 
   * *   **true:** Bot management for website protection is supported.
   * *   **false:** Bot management for website protection is not supported.
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
   * Indicates whether the custom response module is supported. Valid values:
   * 
   * *   **true:** The custom response module is supported.
   * *   **false:** The custom response module is not supported.
   * 
   * @example
   * true
   */
  customResponse?: boolean;
  /**
   * @remarks
   * The maximum number of rules that can be included in a custom response rule template.
   * 
   * @example
   * 100
   */
  customResponseRuleInTemplateMaxCount?: number;
  /**
   * @remarks
   * The maximum number of custom response rule templates that can be configured.
   * 
   * @example
   * 20
   */
  customResponseTemplateMaxCount?: number;
  /**
   * @remarks
   * Indicates whether the custom rule module is supported. Valid values:
   * 
   * *   **true:** The custom rule module is supported.
   * *   **false:** The custom rule module is not supported.
   * 
   * @example
   * true
   */
  customRule?: boolean;
  /**
   * @remarks
   * The action that can be included in a custom rule.
   * 
   * @example
   * block
   */
  customRuleAction?: string;
  /**
   * @remarks
   * The match conditions that can be used in a custom rule. For more information, see **Match condition parameters** in the "**Parameters of custom rules (custom_acl)**" section in the [CreateDefenseRule](~~CreateDefenseRule~~) topic.
   * 
   * @example
   * URL
   */
  customRuleCondition?: string;
  /**
   * @remarks
   * The maximum number of rules that can be included in a custom rule template.
   * 
   * @example
   * 100
   */
  customRuleInTemplateMaxCount?: number;
  /**
   * @remarks
   * The statistical object for rate limiting in a custom rule.
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
   * The maximum number of protected object groups that can be configured.
   * 
   * @example
   * 100
   */
  defenseGroupMaxCount?: number;
  /**
   * @remarks
   * The maximum number of protected objects that can be included in a protected object group.
   * 
   * @example
   * 100
   */
  defenseObjectInGroupMaxCount?: number;
  /**
   * @remarks
   * The maximum number of protected objects to which a protection rule template can be applied.
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
   * Indicates whether the data leakage prevention module is supported. Valid values:
   * 
   * *   **true:** The data leakage prevention module is supported.
   * *   **false:** The data leakage prevention module is not supported.
   * 
   * @example
   * true
   */
  dlp?: boolean;
  /**
   * @remarks
   * The maximum number of rules that can be included in a data leakage prevention rule template.
   * 
   * @example
   * 50
   */
  dlpRuleInTemplateMaxCount?: number;
  /**
   * @remarks
   * The maximum number of data leakage prevention rule templates that can be configured.
   * 
   * @example
   * 50
   */
  dlpTemplateMaxCount?: number;
  /**
   * @remarks
   * Indicates whether exclusive IP addresses are supported. Valid values:
   * 
   * *   **true:** Exclusive IP addresses are supported.
   * *   **false:** Exclusive IP addresses are not supported.
   * 
   * @example
   * true
   */
  exclusiveIp?: boolean;
  /**
   * @remarks
   * Indicates whether global server load balancing (GSLB) is supported. Valid values:
   * 
   * *   **true:** GSLB is supported.
   * *   **false:** GSLB is not supported.
   * 
   * @example
   * true
   */
  gslb?: boolean;
  /**
   * @remarks
   * The HTTP port range that is supported. For more information, see [View supported ports](https://help.aliyun.com/document_detail/385578.html).
   * 
   * @example
   * 80
   */
  httpPorts?: string;
  /**
   * @remarks
   * The HTTPS port range that is supported. For more information, see [View supported ports](https://help.aliyun.com/document_detail/385578.html).
   * 
   * @example
   * 443
   */
  httpsPorts?: string;
  /**
   * @remarks
   * Indicates whether the IP address blacklist module is supported. Valid values:
   * 
   * *   **true:** The IP address blacklist module is supported.
   * *   **false:** The IP address blacklist module is not supported.
   * 
   * @example
   * true
   */
  ipBlacklist?: boolean;
  /**
   * @remarks
   * The maximum number of IP addresses that can be added to an IP address blacklist rule.
   * 
   * @example
   * 200
   */
  ipBlacklistIpInRuleMaxCount?: number;
  /**
   * @remarks
   * The maximum number of rules that can be included in an IP address blacklist rule template.
   * 
   * @example
   * 100
   */
  ipBlacklistRuleInTemplateMaxCount?: number;
  /**
   * @remarks
   * The maximum number of IP address blacklist rule templates that can be configured.
   * 
   * @example
   * 20
   */
  ipBlacklistTemplateMaxCount?: number;
  /**
   * @remarks
   * Indicates whether IPv6 is supported. Valid values:
   * 
   * *   **true:** IPv6 is supported.
   * *   **false:** IPv6 is not supported.
   * 
   * @example
   * true
   */
  ipv6?: boolean;
  /**
   * @remarks
   * Indicates whether the log collection feature is supported. Valid values:
   * 
   * *   **true:** The log collection feature is supported.
   * *   **false:** The log collection feature is not supported.
   * 
   * @example
   * true
   */
  logService?: boolean;
  /**
   * @remarks
   * Indicates whether major event protection is supported. Valid values:
   * 
   * *   **true:** Major event protection is supported.
   * *   **false:** Major event protection is not supported.
   * 
   * @example
   * true
   */
  majorProtection?: boolean;
  /**
   * @remarks
   * The maximum number of major event protection rule templates that can be configured.
   * 
   * @example
   * 20
   */
  majorProtectionTemplateMaxCount?: number;
  /**
   * @remarks
   * Indicates whether the website tamper-proofing module is supported. Valid values:
   * 
   * *   **true:** The website tamper-proofing module is supported.
   * *   **false:** The website tamper-proofing module is not supported.
   * 
   * @example
   * true
   */
  tamperproof?: boolean;
  /**
   * @remarks
   * The maximum number of rules that can be included in a website tamper-proofing rule template.
   * 
   * @example
   * 50
   */
  tamperproofRuleInTemplateMaxCount?: number;
  /**
   * @remarks
   * The maximum number of website tamper-proofing rule templates that can be configured.
   * 
   * @example
   * 50
   */
  tamperproofTemplateMaxCount?: number;
  /**
   * @remarks
   * The maximum number of IP addresses or CIDR blocks that can be added to an IP address blacklist in a batch.
   * 
   * @example
   * 2,000
   */
  vastIpBlacklistInFileMaxCount?: number;
  /**
   * @remarks
   * The maximum number of IP addresses or CIDR blocks that can be added to an IP address blacklist on a page.
   * 
   * @example
   * 500
   */
  vastIpBlacklistInOperationMaxCount?: number;
  /**
   * @remarks
   * The maximum number of IP addresses or CIDR blocks that can be added to an IP address blacklist per Alibaba Cloud account.
   * 
   * @example
   * 50,000
   */
  vastIpBlacklistMaxCount?: number;
  /**
   * @remarks
   * Indicates whether the whitelist module is supported. Valid values:
   * 
   * *   **true:** The whitelist module is supported.
   * *   **false:** The whitelist module is not supported.
   * 
   * @example
   * true
   */
  whitelist?: boolean;
  /**
   * @remarks
   * The logical operators that can be used in a whitelist rule. For more information, see **Match condition parameters** in the "**Parameters of whitelist rules (whitelist)**" section in the [CreateDefenseRule](~~CreateDefenseRule~~) topic.
   * 
   * @example
   * contain
   */
  whitelistLogical?: string;
  /**
   * @remarks
   * The match fields that can be used in a whitelist rule. For more information, see **Match condition parameters** in the "**Parameters of whitelist rules (whitelist)**" section in the [CreateDefenseRule](~~CreateDefenseRule~~) topic.
   * 
   * @example
   * URL
   */
  whitelistRuleCondition?: string;
  /**
   * @remarks
   * The maximum number of rules that can be included in a whitelist rule template.
   * 
   * @example
   * 100
   */
  whitelistRuleInTemplateMaxCount?: number;
  /**
   * @remarks
   * The maximum number of whitelist rule templates that can be configured.
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
      exclusiveIp: 'ExclusiveIp',
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
      exclusiveIp: 'boolean',
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

