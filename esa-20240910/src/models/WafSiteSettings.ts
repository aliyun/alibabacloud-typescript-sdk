// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafSiteSettingsAddBotProtectionHeaders } from "./WafSiteSettingsAddBotProtectionHeaders";
import { WafSiteSettingsAddSecurityHeaders } from "./WafSiteSettingsAddSecurityHeaders";
import { WafSiteSettingsBotManagement } from "./WafSiteSettingsBotManagement";
import { WafSiteSettingsClientIpIdentifier } from "./WafSiteSettingsClientIpIdentifier";
import { WafSiteSettingsSecurityLevel } from "./WafSiteSettingsSecurityLevel";


export class WafSiteSettings extends $dara.Model {
  addBotProtectionHeaders?: WafSiteSettingsAddBotProtectionHeaders;
  addSecurityHeaders?: WafSiteSettingsAddSecurityHeaders;
  botManagement?: WafSiteSettingsBotManagement;
  clientIpIdentifier?: WafSiteSettingsClientIpIdentifier;
  securityLevel?: WafSiteSettingsSecurityLevel;
  static names(): { [key: string]: string } {
    return {
      addBotProtectionHeaders: 'AddBotProtectionHeaders',
      addSecurityHeaders: 'AddSecurityHeaders',
      botManagement: 'BotManagement',
      clientIpIdentifier: 'ClientIpIdentifier',
      securityLevel: 'SecurityLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addBotProtectionHeaders: WafSiteSettingsAddBotProtectionHeaders,
      addSecurityHeaders: WafSiteSettingsAddSecurityHeaders,
      botManagement: WafSiteSettingsBotManagement,
      clientIpIdentifier: WafSiteSettingsClientIpIdentifier,
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
    if(this.botManagement && typeof (this.botManagement as any).validate === 'function') {
      (this.botManagement as any).validate();
    }
    if(this.clientIpIdentifier && typeof (this.clientIpIdentifier as any).validate === 'function') {
      (this.clientIpIdentifier as any).validate();
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

