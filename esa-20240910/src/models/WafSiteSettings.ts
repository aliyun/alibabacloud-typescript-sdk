// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WafSiteSettingsAddBotProtectionHeaders extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to add bot protection headers.
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
   * Specifies whether to add security headers.
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
   * The action to perform for the bandwidth abuse protection rule.
   * 
   * @example
   * deny
   */
  action?: string;
  /**
   * @remarks
   * The rule ID for bandwidth abuse protection.
   * 
   * @example
   * 10000001
   */
  id?: number;
  /**
   * @remarks
   * The status of the bandwidth abuse protection rule. Valid values: `on` and `off`.
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
   * The action to perform.
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
   * Specifies whether to apply bot management to static resource requests.
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
   * Specifies whether to enable JavaScript detection.
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
   * The action to perform.
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
   * The action to perform.
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
   * Configuration for traffic identified as a definite bot.
   */
  definiteBots?: WafSiteSettingsBotManagementDefiniteBots;
  /**
   * @remarks
   * Configuration to apply bot management to static resource requests.
   */
  effectOnStatic?: WafSiteSettingsBotManagementEffectOnStatic;
  /**
   * @remarks
   * The JavaScript detection settings.
   */
  JSDetection?: WafSiteSettingsBotManagementJSDetection;
  /**
   * @remarks
   * Configuration for traffic identified as a likely bot.
   */
  likelyBots?: WafSiteSettingsBotManagementLikelyBots;
  /**
   * @remarks
   * Configuration for traffic identified as a verified bot.
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
   * An array of headers to check for the client IP address.
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
   * Specifies whether to disable the security module. Set to `on` to disable.
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
   * The action to perform when the request body size exceeds the limit.
   */
  action?: string;
  /**
   * @remarks
   * The rule ID for request body inspection.
   */
  id?: number;
  /**
   * @remarks
   * The size limit, in bytes, for inspecting the request body.
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
   * The security level.
   * 
   * @example
   * low
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
   * Configuration for adding bot protection headers.
   */
  addBotProtectionHeaders?: WafSiteSettingsAddBotProtectionHeaders;
  /**
   * @remarks
   * Configuration for adding security headers.
   */
  addSecurityHeaders?: WafSiteSettingsAddSecurityHeaders;
  /**
   * @remarks
   * The bandwidth abuse protection settings.
   */
  bandwidthAbuseProtection?: WafSiteSettingsBandwidthAbuseProtection;
  /**
   * @remarks
   * The bot management settings.
   */
  botManagement?: WafSiteSettingsBotManagement;
  /**
   * @remarks
   * Configuration for client IP identification.
   */
  clientIpIdentifier?: WafSiteSettingsClientIpIdentifier;
  /**
   * @remarks
   * Configuration for disabling the security module.
   */
  disableSecurityModule?: WafSiteSettingsDisableSecurityModule;
  /**
   * @remarks
   * Configuration for request body inspection.
   */
  requestBodyInspection?: WafSiteSettingsRequestBodyInspection;
  /**
   * @remarks
   * The security level settings.
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

