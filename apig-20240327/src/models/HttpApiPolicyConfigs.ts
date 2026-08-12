// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiCacheConfig } from "./AiCacheConfig";
import { AiFallbackConfig } from "./AiFallbackConfig";
import { AiNetworkSearchConfig } from "./AiNetworkSearchConfig";
import { AiSecurityGuardConfig } from "./AiSecurityGuardConfig";
import { AiStatisticsConfig } from "./AiStatisticsConfig";
import { AiTokenRateLimitConfig } from "./AiTokenRateLimitConfig";
import { AiToolSelectionConfig } from "./AiToolSelectionConfig";


export class HttpApiPolicyConfigsSemanticRouterConfig extends $dara.Model {
  /**
   * @remarks
   * Timeout in milliseconds
   * 
   * @example
   * 2000
   */
  timeoutMillisecond?: number;
  static names(): { [key: string]: string } {
    return {
      timeoutMillisecond: 'timeoutMillisecond',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeoutMillisecond: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HttpApiPolicyConfigs extends $dara.Model {
  /**
   * @remarks
   * AiCacheConfig
   * 
   * **if can be null:**
   * true
   */
  aiCacheConfig?: AiCacheConfig;
  /**
   * @remarks
   * AiFallbackConfig
   * 
   * **if can be null:**
   * false
   */
  aiFallbackConfig?: AiFallbackConfig;
  /**
   * @remarks
   * AiNetworkSearchConfig
   * 
   * **if can be null:**
   * true
   */
  aiNetworkSearchConfig?: AiNetworkSearchConfig;
  /**
   * @remarks
   * AiSecurityGuardConfig
   * 
   * **if can be null:**
   * false
   */
  aiSecurityGuardConfig?: AiSecurityGuardConfig;
  /**
   * @remarks
   * AiStatisticsConfig
   * 
   * **if can be null:**
   * false
   */
  aiStatisticsConfig?: AiStatisticsConfig;
  /**
   * @remarks
   * AiTokenRateLimitConfig
   * 
   * **if can be null:**
   * false
   */
  aiTokenRateLimitConfig?: AiTokenRateLimitConfig;
  /**
   * @remarks
   * AiToolSelectionConfig
   * 
   * **if can be null:**
   * true
   */
  aiToolSelectionConfig?: AiToolSelectionConfig;
  /**
   * @remarks
   * Policy Enable
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * SemanticRouterConfig
   * 
   * **if can be null:**
   * false
   */
  semanticRouterConfig?: HttpApiPolicyConfigsSemanticRouterConfig;
  /**
   * @remarks
   * Policy Type
   * 
   * @example
   * AiCache
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aiCacheConfig: 'aiCacheConfig',
      aiFallbackConfig: 'aiFallbackConfig',
      aiNetworkSearchConfig: 'aiNetworkSearchConfig',
      aiSecurityGuardConfig: 'aiSecurityGuardConfig',
      aiStatisticsConfig: 'aiStatisticsConfig',
      aiTokenRateLimitConfig: 'aiTokenRateLimitConfig',
      aiToolSelectionConfig: 'aiToolSelectionConfig',
      enable: 'enable',
      semanticRouterConfig: 'semanticRouterConfig',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiCacheConfig: AiCacheConfig,
      aiFallbackConfig: AiFallbackConfig,
      aiNetworkSearchConfig: AiNetworkSearchConfig,
      aiSecurityGuardConfig: AiSecurityGuardConfig,
      aiStatisticsConfig: AiStatisticsConfig,
      aiTokenRateLimitConfig: AiTokenRateLimitConfig,
      aiToolSelectionConfig: AiToolSelectionConfig,
      enable: 'boolean',
      semanticRouterConfig: HttpApiPolicyConfigsSemanticRouterConfig,
      type: 'string',
    };
  }

  validate() {
    if(this.aiCacheConfig && typeof (this.aiCacheConfig as any).validate === 'function') {
      (this.aiCacheConfig as any).validate();
    }
    if(this.aiFallbackConfig && typeof (this.aiFallbackConfig as any).validate === 'function') {
      (this.aiFallbackConfig as any).validate();
    }
    if(this.aiNetworkSearchConfig && typeof (this.aiNetworkSearchConfig as any).validate === 'function') {
      (this.aiNetworkSearchConfig as any).validate();
    }
    if(this.aiSecurityGuardConfig && typeof (this.aiSecurityGuardConfig as any).validate === 'function') {
      (this.aiSecurityGuardConfig as any).validate();
    }
    if(this.aiStatisticsConfig && typeof (this.aiStatisticsConfig as any).validate === 'function') {
      (this.aiStatisticsConfig as any).validate();
    }
    if(this.aiTokenRateLimitConfig && typeof (this.aiTokenRateLimitConfig as any).validate === 'function') {
      (this.aiTokenRateLimitConfig as any).validate();
    }
    if(this.aiToolSelectionConfig && typeof (this.aiToolSelectionConfig as any).validate === 'function') {
      (this.aiToolSelectionConfig as any).validate();
    }
    if(this.semanticRouterConfig && typeof (this.semanticRouterConfig as any).validate === 'function') {
      (this.semanticRouterConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

