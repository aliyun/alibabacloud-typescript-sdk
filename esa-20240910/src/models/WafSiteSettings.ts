// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WafSiteSettingsAddBotProtectionHeaders extends $dara.Model {
  /**
   * @remarks
   * The enable status.
   */
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafSiteSettingsAddSecurityHeaders extends $dara.Model {
  /**
   * @remarks
   * The enable status.
   */
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafSiteSettingsBandwidthAbuseProtection extends $dara.Model {
  /**
   * @remarks
   * The action performed by the bandwidth abuse protection rule.
   * 
   * @example
   * deny
   */
  action?: string;
  /**
   * @remarks
   * The ID of the bandwidth abuse protection rule.
   * 
   * @example
   * 10000001
   */
  id?: number;
  /**
   * @remarks
   * The enable status of the bandwidth abuse protection rule.
   * 
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      id: 'Id',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      id: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafSiteSettingsBotManagementDefiniteBots extends $dara.Model {
  /**
   * @remarks
   * The action.
   * 
   * @example
   * captcha
   */
  action?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 20000001
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafSiteSettingsBotManagementEffectOnStatic extends $dara.Model {
  /**
   * @remarks
   * The enable status.
   * 
   * @example
   * true
   */
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafSiteSettingsBotManagementJSDetection extends $dara.Model {
  /**
   * @remarks
   * The enable status.
   */
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafSiteSettingsBotManagementLikelyBots extends $dara.Model {
  /**
   * @remarks
   * The action.
   * 
   * @example
   * deny
   */
  action?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 20000002
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafSiteSettingsBotManagementVerifiedBots extends $dara.Model {
  /**
   * @remarks
   * The action.
   * 
   * @example
   * bypass
   */
  action?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 20000003
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafSiteSettingsBotManagement extends $dara.Model {
  /**
   * @remarks
   * The definite bots.
   */
  definiteBots?: WafSiteSettingsBotManagementDefiniteBots;
  /**
   * @remarks
   * Specifies whether the rule applies to static resource requests.
   */
  effectOnStatic?: WafSiteSettingsBotManagementEffectOnStatic;
  /**
   * @remarks
   * The JavaScript detection.
   */
  JSDetection?: WafSiteSettingsBotManagementJSDetection;
  /**
   * @remarks
   * The likely bots.
   */
  likelyBots?: WafSiteSettingsBotManagementLikelyBots;
  /**
   * @remarks
   * The verified bots.
   */
  verifiedBots?: WafSiteSettingsBotManagementVerifiedBots;
  static names(): { [key: string]: string } {
    return {
      definiteBots: 'DefiniteBots',
      effectOnStatic: 'EffectOnStatic',
      JSDetection: 'JSDetection',
      likelyBots: 'LikelyBots',
      verifiedBots: 'VerifiedBots',
    };
  }

  static types(): { [key: string]: any } {
    return {
      definiteBots: WafSiteSettingsBotManagementDefiniteBots,
      effectOnStatic: WafSiteSettingsBotManagementEffectOnStatic,
      JSDetection: WafSiteSettingsBotManagementJSDetection,
      likelyBots: WafSiteSettingsBotManagementLikelyBots,
      verifiedBots: WafSiteSettingsBotManagementVerifiedBots,
    };
  }

  validate() {
    if(this.definiteBots && typeof (this.definiteBots as any).validate === 'function') {
      (this.definiteBots as any).validate();
    }
    if(this.effectOnStatic && typeof (this.effectOnStatic as any).validate === 'function') {
      (this.effectOnStatic as any).validate();
    }
    if(this.JSDetection && typeof (this.JSDetection as any).validate === 'function') {
      (this.JSDetection as any).validate();
    }
    if(this.likelyBots && typeof (this.likelyBots as any).validate === 'function') {
      (this.likelyBots as any).validate();
    }
    if(this.verifiedBots && typeof (this.verifiedBots as any).validate === 'function') {
      (this.verifiedBots as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafSiteSettingsClientIpIdentifier extends $dara.Model {
  /**
   * @remarks
   * The specified headers.
   */
  headers?: string[];
  /**
   * @remarks
   * The identification mode.
   * 
   * @example
   * headers
   */
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'array', 'itemType': 'string' },
      mode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.headers)) {
      $dara.Model.validateArray(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafSiteSettingsDisableSecurityModule extends $dara.Model {
  /**
   * @remarks
   * The enable status for disabling the security module.
   * 
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafSiteSettingsRequestBodyInspection extends $dara.Model {
  /**
   * @remarks
   * The action to take when the request body size exceeds the SizeLimit.
   * Common valid values (the complete enumeration is subject to the server configuration):
   * - allow: Allows the request directly without performing deep packet inspection on the exceeded part.
   * > The complete enumeration is subject to the WAF server configuration.
   * 
   * @example
   * allow
   */
  action?: string;
  /**
   * @remarks
   * The ID of the request body inspection rule, which is the unique identifier of the built-in rule. When request body inspection is enabled, the server uses this ID to associate the matching logic of the built-in inspection rule. The valid values of the ID are subject to the WAF built-in rule list.
   * 
   * @example
   * 10000001
   */
  id?: number;
  /**
   * @remarks
   * The maximum size of the request body to be inspected, in bytes.
   * - If the request body is less than or equal to this value, the complete content is used for WAF matching.
   * - If the request body exceeds this value, the action specified by the Action field is performed, such as inspecting only the first N bytes, blocking, or allowing.
   * > The specific valid values and default value are subject to the WAF server configuration.
   * 
   * @example
   * 16KB
   */
  sizeLimit?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      id: 'Id',
      sizeLimit: 'SizeLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      id: 'number',
      sizeLimit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WafSiteSettingsSecurityLevel extends $dara.Model {
  /**
   * @remarks
   * The security level rule ID.
   * 
   * @example
   * 10000001
   */
  id?: number;
  /**
   * @remarks
   * The security level value.
   * 
   * @example
   * low
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
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

export class WafSiteSettings extends $dara.Model {
  /**
   * @remarks
   * The configuration for adding bot protection headers.
   */
  addBotProtectionHeaders?: WafSiteSettingsAddBotProtectionHeaders;
  /**
   * @remarks
   * The configuration for adding security headers.
   */
  addSecurityHeaders?: WafSiteSettingsAddSecurityHeaders;
  /**
   * @remarks
   * The bandwidth abuse protection.
   */
  bandwidthAbuseProtection?: WafSiteSettingsBandwidthAbuseProtection;
  /**
   * @remarks
   * The bot management.
   */
  botManagement?: WafSiteSettingsBotManagement;
  /**
   * @remarks
   * The client IP identification.
   */
  clientIpIdentifier?: WafSiteSettingsClientIpIdentifier;
  /**
   * @remarks
   * The configuration for disabling the security module.
   */
  disableSecurityModule?: WafSiteSettingsDisableSecurityModule;
  /**
   * @remarks
   * The request body inspection configuration. This configuration controls the deep packet inspection behavior of WAF for HTTP request bodies. For example, matching based on request body content, such as SQL injection and XSS, takes effect only after this feature is enabled. This configuration can include the following fields:
   * - Id: The unique identifier of the built-in inspection rule.
   * - SizeLimit: The maximum size of the request body to be inspected.
   * - Action: The action to take when the size limit is exceeded.
   */
  requestBodyInspection?: WafSiteSettingsRequestBodyInspection;
  /**
   * @remarks
   * The security level.
   */
  securityLevel?: WafSiteSettingsSecurityLevel;
  static names(): { [key: string]: string } {
    return {
      addBotProtectionHeaders: 'AddBotProtectionHeaders',
      addSecurityHeaders: 'AddSecurityHeaders',
      bandwidthAbuseProtection: 'BandwidthAbuseProtection',
      botManagement: 'BotManagement',
      clientIpIdentifier: 'ClientIpIdentifier',
      disableSecurityModule: 'DisableSecurityModule',
      requestBodyInspection: 'RequestBodyInspection',
      securityLevel: 'SecurityLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addBotProtectionHeaders: WafSiteSettingsAddBotProtectionHeaders,
      addSecurityHeaders: WafSiteSettingsAddSecurityHeaders,
      bandwidthAbuseProtection: WafSiteSettingsBandwidthAbuseProtection,
      botManagement: WafSiteSettingsBotManagement,
      clientIpIdentifier: WafSiteSettingsClientIpIdentifier,
      disableSecurityModule: WafSiteSettingsDisableSecurityModule,
      requestBodyInspection: WafSiteSettingsRequestBodyInspection,
      securityLevel: WafSiteSettingsSecurityLevel,
    };
  }

  validate() {
    if(this.addBotProtectionHeaders && typeof (this.addBotProtectionHeaders as any).validate === 'function') {
      (this.addBotProtectionHeaders as any).validate();
    }
    if(this.addSecurityHeaders && typeof (this.addSecurityHeaders as any).validate === 'function') {
      (this.addSecurityHeaders as any).validate();
    }
    if(this.bandwidthAbuseProtection && typeof (this.bandwidthAbuseProtection as any).validate === 'function') {
      (this.bandwidthAbuseProtection as any).validate();
    }
    if(this.botManagement && typeof (this.botManagement as any).validate === 'function') {
      (this.botManagement as any).validate();
    }
    if(this.clientIpIdentifier && typeof (this.clientIpIdentifier as any).validate === 'function') {
      (this.clientIpIdentifier as any).validate();
    }
    if(this.disableSecurityModule && typeof (this.disableSecurityModule as any).validate === 'function') {
      (this.disableSecurityModule as any).validate();
    }
    if(this.requestBodyInspection && typeof (this.requestBodyInspection as any).validate === 'function') {
      (this.requestBodyInspection as any).validate();
    }
    if(this.securityLevel && typeof (this.securityLevel as any).validate === 'function') {
      (this.securityLevel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

