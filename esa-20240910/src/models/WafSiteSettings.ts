// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WafSiteSettingsAddBotProtectionHeaders extends $dara.Model {
  /**
   * @remarks
   * The switch.
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
   * The switch.
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
   * The action of the bandwidth abuse protection rule.
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
   * The switch status of the bandwidth abuse protection rule.
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
   * The switch.
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
   * The switch.
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
   * The status switch for disabling the security module.
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
   * The action to take when the request body size exceeds `SizeLimit`.
   * 
   * Common values (the complete enumeration is subject to the server-side configuration):
   * - `allow`: Allow directly without performing deep packet inspection on the excess portion.
   * 
   * > The complete enum is subject to the WAF server-side configuration.
   * 
   * @example
   * allow
   */
  action?: string;
  /**
   * @remarks
   * The request body inspection rule ID (unique identifier of the built-in rule). When request body inspection is enabled, the server uses this ID to associate the matching logic of the built-in inspection rule. The ID value is subject to the WAF built-in rule list.
   * 
   * @example
   * 10000001
   */
  id?: number;
  /**
   * @remarks
   * The maximum size of the request body to inspect, in bytes.
   * 
   * - When the request body is less than or equal to this value, the entire content is subject to WAF matching.
   * - When the request body exceeds this value, the action specified in the `Action` field is taken (for example, inspect only the first N bytes, reject, or allow directly).
   * 
   * > The specific value range and default value are subject to the WAF server-side configuration.
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
   * The bot protection headers.
   */
  addBotProtectionHeaders?: WafSiteSettingsAddBotProtectionHeaders;
  /**
   * @remarks
   * The security headers.
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
   * The disable security module configuration.
   */
  disableSecurityModule?: WafSiteSettingsDisableSecurityModule;
  /**
   * @remarks
   * The request body inspection configuration. Controls the deep packet inspection behavior of WAF for HTTP request bodies. After this feature is enabled, content-based matching rules such as SQL injection and XSS detection take effect on request bodies.
   * 
   * This configuration can contain the following fields:
   * - `Id`: The unique identifier of the built-in inspection rule.
   * - `SizeLimit`: The maximum size of the request body to inspect.
   * - `Action`: The action to take when the request body exceeds the size limit.
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

