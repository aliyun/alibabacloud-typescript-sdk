// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafSiteSettingsBotManagementDefiniteBots } from "./WafSiteSettingsBotManagementDefiniteBots";
import { WafSiteSettingsBotManagementEffectOnStatic } from "./WafSiteSettingsBotManagementEffectOnStatic";
import { WafSiteSettingsBotManagementJSDetection } from "./WafSiteSettingsBotManagementJsdetection";
import { WafSiteSettingsBotManagementLikelyBots } from "./WafSiteSettingsBotManagementLikelyBots";
import { WafSiteSettingsBotManagementVerifiedBots } from "./WafSiteSettingsBotManagementVerifiedBots";


export class WafSiteSettingsBotManagement extends $dara.Model {
  definiteBots?: WafSiteSettingsBotManagementDefiniteBots;
  effectOnStatic?: WafSiteSettingsBotManagementEffectOnStatic;
  JSDetection?: WafSiteSettingsBotManagementJSDetection;
  likelyBots?: WafSiteSettingsBotManagementLikelyBots;
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

