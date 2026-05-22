// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WafSiteSettingsAddBotProtectionHeaders extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the parameter is enabled.
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
   * Indicates whether the parameter is enabled.
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
  action?: string;
  id?: number;
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
   * The action that you want to perform on requests that match the rule.
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
   * Indicates whether the parameter is enabled.
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
   * Indicates whether the parameter is enabled.
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
   * The action that you want to perform on requests that match the rule.
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
   * The action that you want to perform on requests that match the rule.
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
   * Definite Bots
   */
  definiteBots?: WafSiteSettingsBotManagementDefiniteBots;
  /**
   * @remarks
   * Takes effect on static resource requests.
   */
  effectOnStatic?: WafSiteSettingsBotManagementEffectOnStatic;
  /**
   * @remarks
   * JavaScript detection.
   */
  JSDetection?: WafSiteSettingsBotManagementJSDetection;
  /**
   * @remarks
   * Likely Bots
   */
  likelyBots?: WafSiteSettingsBotManagementLikelyBots;
  /**
   * @remarks
   * Verified Bots
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
   * Specify headers.
   */
  headers?: string[];
  /**
   * @remarks
   * Identifies the mode.
   * 
   * Enumerated values:
   * 
   * *   headers: specifies the headers.
   * *   connection_ip: the IP address for establishing a connection.
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
  action?: string;
  id?: number;
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
   * The security level value.
   * 
   * Enumerated values:
   * 
   * *   high: high.
   * *   low: low.
   * *   under_attack: I am under attack.
   * *   medium: medium.
   * *   essentially_off: essentially off.
   * *   off: completely off.
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
   * Adds a bot protection header.
   */
  addBotProtectionHeaders?: WafSiteSettingsAddBotProtectionHeaders;
  /**
   * @remarks
   * Adds security request header.
   */
  addSecurityHeaders?: WafSiteSettingsAddSecurityHeaders;
  bandwidthAbuseProtection?: WafSiteSettingsBandwidthAbuseProtection;
  /**
   * @remarks
   * Bot management.
   */
  botManagement?: WafSiteSettingsBotManagement;
  /**
   * @remarks
   * Identifies the IP address of the client.
   */
  clientIpIdentifier?: WafSiteSettingsClientIpIdentifier;
  disableSecurityModule?: WafSiteSettingsDisableSecurityModule;
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

