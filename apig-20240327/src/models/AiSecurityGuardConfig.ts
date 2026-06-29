// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiPluginStatus } from "./AiPluginStatus";


export class AiSecurityGuardConfigConsumerRequestCheckService extends $dara.Model {
  /**
   * @remarks
   * The consumer matching method.
   * 
   * @example
   * exact
   */
  matchType?: string;
  /**
   * @remarks
   * The modality type.
   * 
   * @example
   * Text
   */
  modalityType?: string;
  /**
   * @remarks
   * The consumer name.
   * 
   * @example
   * consumer-a
   */
  name?: string;
  /**
   * @remarks
   * The check service.
   * 
   * @example
   * query_security_check
   */
  requestCheckService?: string;
  /**
   * @remarks
   * The image check service.
   * 
   * @example
   * img_query_guard
   */
  requestImageCheckService?: string;
  static names(): { [key: string]: string } {
    return {
      matchType: 'matchType',
      modalityType: 'modalityType',
      name: 'name',
      requestCheckService: 'requestCheckService',
      requestImageCheckService: 'requestImageCheckService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchType: 'string',
      modalityType: 'string',
      name: 'string',
      requestCheckService: 'string',
      requestImageCheckService: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiSecurityGuardConfigConsumerResponseCheckService extends $dara.Model {
  /**
   * @remarks
   * The consumer matching method.
   * 
   * @example
   * exact
   */
  matchType?: string;
  /**
   * @remarks
   * The modality type.
   * 
   * @example
   * Text
   */
  modalityType?: string;
  /**
   * @remarks
   * The consumer name.
   * 
   * @example
   * consumer-a
   */
  name?: string;
  /**
   * @remarks
   * The check service.
   * 
   * @example
   * query_security_check
   */
  responseCheckService?: string;
  /**
   * @remarks
   * The image check service.
   * 
   * @example
   * img_query_guard
   */
  responseImageCheckService?: string;
  static names(): { [key: string]: string } {
    return {
      matchType: 'matchType',
      modalityType: 'modalityType',
      name: 'name',
      responseCheckService: 'responseCheckService',
      responseImageCheckService: 'responseImageCheckService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchType: 'string',
      modalityType: 'string',
      name: 'string',
      responseCheckService: 'string',
      responseImageCheckService: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiSecurityGuardConfigConsumerRiskLevel extends $dara.Model {
  /**
   * @remarks
   * The risk level.
   * 
   * @example
   * high
   */
  level?: string;
  /**
   * @remarks
   * The consumer matching method.
   * 
   * @example
   * exact
   */
  matchType?: string;
  /**
   * @remarks
   * The consumer name.
   * 
   * @example
   * consumer-a
   */
  name?: string;
  /**
   * @remarks
   * The risk dimension type.
   * 
   * @example
   * ContentModeration
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'level',
      matchType: 'matchType',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      matchType: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiSecurityGuardConfigRiskConfigConsumerRules extends $dara.Model {
  /**
   * @remarks
   * The matching method.
   * 
   * @example
   * Exact
   */
  matchType?: string;
  /**
   * @remarks
   * The consumer matching pattern value.
   * 
   * @example
   * consumer-a
   */
  pattern?: string;
  static names(): { [key: string]: string } {
    return {
      matchType: 'matchType',
      pattern: 'pattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchType: 'string',
      pattern: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiSecurityGuardConfigRiskConfig extends $dara.Model {
  /**
   * @remarks
   * The consumer-level matching rules.
   */
  consumerRules?: AiSecurityGuardConfigRiskConfigConsumerRules;
  /**
   * @remarks
   * The risk level.
   * 
   * @example
   * high
   */
  level?: string;
  /**
   * @remarks
   * The risk dimension type.
   * 
   * @example
   * ContentModeration
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      consumerRules: 'consumerRules',
      level: 'level',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerRules: AiSecurityGuardConfigRiskConfigConsumerRules,
      level: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.consumerRules && typeof (this.consumerRules as any).validate === 'function') {
      (this.consumerRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiSecurityGuardConfig extends $dara.Model {
  /**
   * @remarks
   * The response buffer size in KB. Default value: 1000. Valid values: 1 to 1500.
   * 
   * @example
   * 1000
   */
  bufferLimit?: number;
  /**
   * @remarks
   * Specifies whether to check request content.
   * 
   * @example
   * true
   */
  checkRequest?: boolean;
  /**
   * @remarks
   * Specifies whether to check request images.
   * 
   * @example
   * false
   */
  checkRequestImage?: boolean;
  /**
   * @remarks
   * Specifies whether to check response content.
   * 
   * @example
   * true
   */
  checkResponse?: boolean;
  /**
   * @remarks
   * Specifies whether to check response images.
   * 
   * @example
   * false
   */
  checkResponseImage?: boolean;
  /**
   * @remarks
   * The consumer-level request detection service configuration.
   */
  consumerRequestCheckService?: AiSecurityGuardConfigConsumerRequestCheckService[];
  /**
   * @remarks
   * The consumer-level response detection service configuration.
   */
  consumerResponseCheckService?: AiSecurityGuardConfigConsumerResponseCheckService[];
  /**
   * @remarks
   * The consumer-level risk level configuration.
   */
  consumerRiskLevel?: AiSecurityGuardConfigConsumerRiskLevel[];
  /**
   * @remarks
   * The plugin running status.
   * 
   * **if can be null:**
   * true
   */
  pluginStatus?: AiPluginStatus;
  /**
   * @remarks
   * The ServiceCode of the request text detection service (system-injected default value).
   * 
   * @example
   * query_security_check
   */
  requestCheckService?: string;
  /**
   * @remarks
   * The ServiceCode of the request image detection service (system-injected default value).
   * 
   * @example
   * img_query_guard
   */
  requestImageCheckService?: string;
  /**
   * @remarks
   * The ServiceCode of the response text detection service (system-injected default value).
   * 
   * @example
   * response_security_check
   */
  responseCheckService?: string;
  /**
   * @remarks
   * The ServiceCode of the response image detection service (system-injected default value).
   * 
   * @example
   * img_response_guard
   */
  responseImageCheckService?: string;
  /**
   * @remarks
   * The global risk alert level.
   * 
   * @example
   * high
   */
  riskAlertLevel?: string;
  /**
   * @remarks
   * The risk dimension configuration list (system-injected, normalized from ConsumerRiskLevel).
   */
  riskConfig?: AiSecurityGuardConfigRiskConfig[];
  /**
   * @remarks
   * The security guardrail service address (green-cip endpoint). Use the VPC internal address when the gateway and security guardrail are in the same region.
   * 
   * @example
   * https://green-cip-vpc.cn-shanghai.aliyuncs.com
   */
  serviceAddress?: string;
  static names(): { [key: string]: string } {
    return {
      bufferLimit: 'bufferLimit',
      checkRequest: 'checkRequest',
      checkRequestImage: 'checkRequestImage',
      checkResponse: 'checkResponse',
      checkResponseImage: 'checkResponseImage',
      consumerRequestCheckService: 'consumerRequestCheckService',
      consumerResponseCheckService: 'consumerResponseCheckService',
      consumerRiskLevel: 'consumerRiskLevel',
      pluginStatus: 'pluginStatus',
      requestCheckService: 'requestCheckService',
      requestImageCheckService: 'requestImageCheckService',
      responseCheckService: 'responseCheckService',
      responseImageCheckService: 'responseImageCheckService',
      riskAlertLevel: 'riskAlertLevel',
      riskConfig: 'riskConfig',
      serviceAddress: 'serviceAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bufferLimit: 'number',
      checkRequest: 'boolean',
      checkRequestImage: 'boolean',
      checkResponse: 'boolean',
      checkResponseImage: 'boolean',
      consumerRequestCheckService: { 'type': 'array', 'itemType': AiSecurityGuardConfigConsumerRequestCheckService },
      consumerResponseCheckService: { 'type': 'array', 'itemType': AiSecurityGuardConfigConsumerResponseCheckService },
      consumerRiskLevel: { 'type': 'array', 'itemType': AiSecurityGuardConfigConsumerRiskLevel },
      pluginStatus: AiPluginStatus,
      requestCheckService: 'string',
      requestImageCheckService: 'string',
      responseCheckService: 'string',
      responseImageCheckService: 'string',
      riskAlertLevel: 'string',
      riskConfig: { 'type': 'array', 'itemType': AiSecurityGuardConfigRiskConfig },
      serviceAddress: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.consumerRequestCheckService)) {
      $dara.Model.validateArray(this.consumerRequestCheckService);
    }
    if(Array.isArray(this.consumerResponseCheckService)) {
      $dara.Model.validateArray(this.consumerResponseCheckService);
    }
    if(Array.isArray(this.consumerRiskLevel)) {
      $dara.Model.validateArray(this.consumerRiskLevel);
    }
    if(this.pluginStatus && typeof (this.pluginStatus as any).validate === 'function') {
      (this.pluginStatus as any).validate();
    }
    if(Array.isArray(this.riskConfig)) {
      $dara.Model.validateArray(this.riskConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

