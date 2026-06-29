// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiTokenRateLimitConfigRule } from "./AiTokenRateLimitConfigRule";
import { AiPluginStatus } from "./AiPluginStatus";
import { AiPolicyRedisConfig } from "./AiPolicyRedisConfig";


export class AiTokenRateLimitConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable global (API-level) throttling rules. Default value: false.
   * 
   * @example
   * true
   */
  enableGlobalRules?: boolean;
  /**
   * @remarks
   * The list of global throttling rules. Only the LimitByGlobal type is allowed.
   */
  globalRules?: AiTokenRateLimitConfigRule[];
  /**
   * @remarks
   * The running status of the plugin.
   * 
   * **if can be null:**
   * true
   */
  pluginStatus?: AiPluginStatus;
  /**
   * @remarks
   * The Redis configuration.
   * 
   * **if can be null:**
   * true
   */
  redisConfig?: AiPolicyRedisConfig;
  /**
   * @remarks
   * The list of throttling rules.
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

