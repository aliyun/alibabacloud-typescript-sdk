// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiBasicGuardrailConfig } from "./AiBasicGuardrailConfig";
import { AiCacheConfig } from "./AiCacheConfig";
import { AiFallbackConfig } from "./AiFallbackConfig";
import { AiNetworkSearchConfig } from "./AiNetworkSearchConfig";
import { AiSecurityGuardConfig } from "./AiSecurityGuardConfig";
import { AiStatisticsConfig } from "./AiStatisticsConfig";
import { AiTokenRateLimitConfig } from "./AiTokenRateLimitConfig";
import { AiToolSelectionConfig } from "./AiToolSelectionConfig";
import { HttpApiPolicyReference } from "./HttpApiPolicyReference";


export class HttpApiPolicyConfigsSemanticRouterConfig extends $dara.Model {
  /**
   * @remarks
   * The timeout period in milliseconds.
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
   * The optional configuration object used exclusively for the AiBasicGuardrail policy, at the same level as the enable field of the policy item. The display field indicates read-only display eligibility. The responseEnabled field controls Detection and Response, and the responseMode field only processes asynchronous requests. If an update omits response fields or the configuration object, the previously saved values are retained. If no saved values exist, Detection and Response is enabled by default without declaring a response pattern. To simply enable or disable protection, modify the outer enable field while retaining other required API parameters. You do not need to resubmit this object.
   * 
   * @example
   * {"responseEnabled":true}
   * 
   * **if can be null:**
   * true
   */
  aiBasicGuardrailConfig?: AiBasicGuardrailConfig;
  /**
   * @remarks
   * The AI cache configuration.
   * 
   * **if can be null:**
   * true
   */
  aiCacheConfig?: AiCacheConfig;
  /**
   * @remarks
   * The AI fallback configuration.
   * 
   * **if can be null:**
   * false
   */
  aiFallbackConfig?: AiFallbackConfig;
  /**
   * @remarks
   * The AI web search configuration.
   * 
   * **if can be null:**
   * true
   */
  aiNetworkSearchConfig?: AiNetworkSearchConfig;
  /**
   * @remarks
   * The AI security Protection Settings.
   * 
   * **if can be null:**
   * false
   */
  aiSecurityGuardConfig?: AiSecurityGuardConfig;
  /**
   * @remarks
   * The AI statistics configuration.
   * 
   * **if can be null:**
   * false
   */
  aiStatisticsConfig?: AiStatisticsConfig;
  /**
   * @remarks
   * The AI token rate limit configuration.
   * 
   * **if can be null:**
   * false
   * 
   * @deprecated
   */
  aiTokenRateLimitConfig?: AiTokenRateLimitConfig;
  /**
   * @remarks
   * The AI tool selection configuration.
   * 
   * **if can be null:**
   * true
   */
  aiToolSelectionConfig?: AiToolSelectionConfig;
  /**
   * @remarks
   * Specifies whether it is enabled.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The read-only compatibility reference. GetHttpApi returns the policyId or policyAttachmentId for the ModelAPI AiTokenRateLimit. This reference must be removed before persistence in the write path and must not be used as a bind or unbind instruction.
   * 
   * **if can be null:**
   * true
   */
  policyReference?: HttpApiPolicyReference;
  /**
   * @remarks
   * The semantic routing configuration.
   * 
   * **if can be null:**
   * false
   */
  semanticRouterConfig?: HttpApiPolicyConfigsSemanticRouterConfig;
  /**
   * @remarks
   * The policy templatetype.
   * 
   * @example
   * K8S
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aiBasicGuardrailConfig: 'aiBasicGuardrailConfig',
      aiCacheConfig: 'aiCacheConfig',
      aiFallbackConfig: 'aiFallbackConfig',
      aiNetworkSearchConfig: 'aiNetworkSearchConfig',
      aiSecurityGuardConfig: 'aiSecurityGuardConfig',
      aiStatisticsConfig: 'aiStatisticsConfig',
      aiTokenRateLimitConfig: 'aiTokenRateLimitConfig',
      aiToolSelectionConfig: 'aiToolSelectionConfig',
      enable: 'enable',
      policyReference: 'policyReference',
      semanticRouterConfig: 'semanticRouterConfig',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiBasicGuardrailConfig: AiBasicGuardrailConfig,
      aiCacheConfig: AiCacheConfig,
      aiFallbackConfig: AiFallbackConfig,
      aiNetworkSearchConfig: AiNetworkSearchConfig,
      aiSecurityGuardConfig: AiSecurityGuardConfig,
      aiStatisticsConfig: AiStatisticsConfig,
      aiTokenRateLimitConfig: AiTokenRateLimitConfig,
      aiToolSelectionConfig: AiToolSelectionConfig,
      enable: 'boolean',
      policyReference: HttpApiPolicyReference,
      semanticRouterConfig: HttpApiPolicyConfigsSemanticRouterConfig,
      type: 'string',
    };
  }

  validate() {
    if(this.aiBasicGuardrailConfig && typeof (this.aiBasicGuardrailConfig as any).validate === 'function') {
      (this.aiBasicGuardrailConfig as any).validate();
    }
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
    if(this.policyReference && typeof (this.policyReference as any).validate === 'function') {
      (this.policyReference as any).validate();
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

