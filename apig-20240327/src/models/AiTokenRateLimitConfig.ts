// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiTokenRateLimitConfigRule } from "./AiTokenRateLimitConfigRule";
import { AiPluginStatus } from "./AiPluginStatus";
import { AiPolicyRedisConfig } from "./AiPolicyRedisConfig";


export class AiTokenRateLimitConfig extends $dara.Model {
  /**
   * @remarks
   * Controls whether global rules are enabled. If set to `true`, the rules in `globalRules` are applied. Defaults to `false`.
   */
  enableGlobalRules?: boolean;
  /**
   * @remarks
   * A list of global rate limit rules. These rules are applied when no specific rule in `rules` is matched.
   */
  globalRules?: AiTokenRateLimitConfigRule[];
  /**
   * @remarks
   * Specifies the status of the plugin, such as `enabled` or `disabled`.
   * 
   * **if can be null:**
   * true
   */
  pluginStatus?: AiPluginStatus;
  /**
   * @remarks
   * Specifies the Redis configuration for distributed rate limiting.
   * 
   * **if can be null:**
   * true
   */
  redisConfig?: AiPolicyRedisConfig;
  /**
   * @remarks
   * A list of specific rate limit rules.
   */
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

