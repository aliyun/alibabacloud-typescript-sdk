// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProxyConfigEndpoints extends $dara.Model {
  baseUrl?: string;
  modelNames?: string[];
  modelServiceName?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      baseUrl: 'baseUrl',
      modelNames: 'modelNames',
      modelServiceName: 'modelServiceName',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseUrl: 'string',
      modelNames: { 'type': 'array', 'itemType': 'string' },
      modelServiceName: 'string',
      weight: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.modelNames)) {
      $dara.Model.validateArray(this.modelNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProxyConfigPoliciesAiGuardrailConfig extends $dara.Model {
  blockOnContentModeration?: boolean;
  blockOnMaliciousUrl?: boolean;
  blockOnModelHallucination?: boolean;
  blockOnPromptAttack?: boolean;
  blockOnSensitiveData?: boolean;
  checkRequest?: boolean;
  checkResponse?: boolean;
  level?: string;
  maxTextLength?: number;
  static names(): { [key: string]: string } {
    return {
      blockOnContentModeration: 'blockOnContentModeration',
      blockOnMaliciousUrl: 'blockOnMaliciousUrl',
      blockOnModelHallucination: 'blockOnModelHallucination',
      blockOnPromptAttack: 'blockOnPromptAttack',
      blockOnSensitiveData: 'blockOnSensitiveData',
      checkRequest: 'checkRequest',
      checkResponse: 'checkResponse',
      level: 'level',
      maxTextLength: 'maxTextLength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockOnContentModeration: 'boolean',
      blockOnMaliciousUrl: 'boolean',
      blockOnModelHallucination: 'boolean',
      blockOnPromptAttack: 'boolean',
      blockOnSensitiveData: 'boolean',
      checkRequest: 'boolean',
      checkResponse: 'boolean',
      level: 'string',
      maxTextLength: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProxyConfigPoliciesFallbacks extends $dara.Model {
  modelName?: string;
  modelServiceName?: string;
  static names(): { [key: string]: string } {
    return {
      modelName: 'modelName',
      modelServiceName: 'modelServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelName: 'string',
      modelServiceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProxyConfigPoliciesTokenRateLimiter extends $dara.Model {
  tpd?: number;
  tph?: number;
  tpm?: number;
  tps?: number;
  static names(): { [key: string]: string } {
    return {
      tpd: 'tpd',
      tph: 'tph',
      tpm: 'tpm',
      tps: 'tps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tpd: 'number',
      tph: 'number',
      tpm: 'number',
      tps: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProxyConfigPolicies extends $dara.Model {
  aiGuardrailConfig?: ProxyConfigPoliciesAiGuardrailConfig;
  cache?: boolean;
  concurrencyLimit?: number;
  fallbacks?: ProxyConfigPoliciesFallbacks[];
  numRetries?: number;
  requestTimeout?: number;
  tokenRateLimiter?: ProxyConfigPoliciesTokenRateLimiter;
  static names(): { [key: string]: string } {
    return {
      aiGuardrailConfig: 'aiGuardrailConfig',
      cache: 'cache',
      concurrencyLimit: 'concurrencyLimit',
      fallbacks: 'fallbacks',
      numRetries: 'numRetries',
      requestTimeout: 'requestTimeout',
      tokenRateLimiter: 'tokenRateLimiter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiGuardrailConfig: ProxyConfigPoliciesAiGuardrailConfig,
      cache: 'boolean',
      concurrencyLimit: 'number',
      fallbacks: { 'type': 'array', 'itemType': ProxyConfigPoliciesFallbacks },
      numRetries: 'number',
      requestTimeout: 'number',
      tokenRateLimiter: ProxyConfigPoliciesTokenRateLimiter,
    };
  }

  validate() {
    if(this.aiGuardrailConfig && typeof (this.aiGuardrailConfig as any).validate === 'function') {
      (this.aiGuardrailConfig as any).validate();
    }
    if(Array.isArray(this.fallbacks)) {
      $dara.Model.validateArray(this.fallbacks);
    }
    if(this.tokenRateLimiter && typeof (this.tokenRateLimiter as any).validate === 'function') {
      (this.tokenRateLimiter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProxyConfig extends $dara.Model {
  endpoints?: ProxyConfigEndpoints[];
  policies?: ProxyConfigPolicies;
  static names(): { [key: string]: string } {
    return {
      endpoints: 'endpoints',
      policies: 'policies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoints: { 'type': 'array', 'itemType': ProxyConfigEndpoints },
      policies: ProxyConfigPolicies,
    };
  }

  validate() {
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
    }
    if(this.policies && typeof (this.policies as any).validate === 'function') {
      (this.policies as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

