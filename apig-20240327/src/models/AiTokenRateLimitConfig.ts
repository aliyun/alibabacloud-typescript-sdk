// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiTokenRateLimitConfigRule } from "./AiTokenRateLimitConfigRule";
import { AiPluginStatus } from "./AiPluginStatus";
import { AiPolicyRedisConfig } from "./AiPolicyRedisConfig";


export class AiTokenRateLimitConfig extends $dara.Model {
  enableGlobalRules?: boolean;
  globalRules?: AiTokenRateLimitConfigRule[];
  /**
   * **if can be null:**
   * true
   */
  pluginStatus?: AiPluginStatus;
  /**
   * **if can be null:**
   * true
   */
  redisConfig?: AiPolicyRedisConfig;
  rules?: AiTokenRateLimitConfigRule[];
  static names(): { [key: string]: string } {
    return {
      enableGlobalRules: 'enableGlobalRules',
      globalRules: 'globalRules',
      pluginStatus: 'pluginStatus',
      redisConfig: 'redisConfig',
      rules: 'rules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableGlobalRules: 'boolean',
      globalRules: { 'type': 'array', 'itemType': AiTokenRateLimitConfigRule },
      pluginStatus: AiPluginStatus,
      redisConfig: AiPolicyRedisConfig,
      rules: { 'type': 'array', 'itemType': AiTokenRateLimitConfigRule },
    };
  }

  validate() {
    if(Array.isArray(this.globalRules)) {
      $dara.Model.validateArray(this.globalRules);
    }
    if(this.pluginStatus && typeof (this.pluginStatus as any).validate === 'function') {
      (this.pluginStatus as any).validate();
    }
    if(this.redisConfig && typeof (this.redisConfig as any).validate === 'function') {
      (this.redisConfig as any).validate();
    }
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

