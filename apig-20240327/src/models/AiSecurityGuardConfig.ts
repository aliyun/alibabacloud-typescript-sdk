// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiPluginStatus } from "./AiPluginStatus";


export class AiSecurityGuardConfigConsumerRequestCheckService extends $dara.Model {
  /**
   * @remarks
   * The match type for identifying the consumer. For example: `header` or `query`.
   */
  matchType?: string;
  /**
   * @remarks
   * The modality type for this rule. For example: `text` or `image`.
   */
  modalityType?: string;
  /**
   * @remarks
   * The identifier of the consumer.
   */
  name?: string;
  /**
   * @remarks
   * The identifier of the request check service for text content for this consumer.
   */
  requestCheckService?: string;
  /**
   * @remarks
   * The identifier of the request check service for image content for this consumer.
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
   * The match type for identifying the consumer. For example: `header` or `query`.
   */
  matchType?: string;
  /**
   * @remarks
   * The modality type for this rule. For example: `text` or `image`.
   */
  modalityType?: string;
  /**
   * @remarks
   * The identifier of the consumer.
   */
  name?: string;
  /**
   * @remarks
   * The identifier of the response check service for text content for this consumer.
   */
  responseCheckService?: string;
  /**
   * @remarks
   * The identifier of the response check service for image content for this consumer.
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
   * The risk level to apply to the specified consumer and risk type. For example: `low`, `medium`, or `high`.
   */
  level?: string;
  /**
   * @remarks
   * The match type for identifying the consumer. For example: `header` or `query`.
   */
  matchType?: string;
  /**
   * @remarks
   * The identifier of the consumer.
   */
  name?: string;
  /**
   * @remarks
   * The type of risk to configure. For example: `profanity` or `spam`.
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
   * The location in the request to search for the `pattern`. For example: `header` or `query`.
   */
  matchType?: string;
  /**
   * @remarks
   * The pattern for matching a consumer. This can be a regular expression.
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
   * Contains rules that override the default settings for specific consumers.
   */
  consumerRules?: AiSecurityGuardConfigRiskConfigConsumerRules;
  /**
   * @remarks
   * The default risk level for this risk type. For example: `low`, `medium`, or `high`.
   */
  level?: string;
  /**
   * @remarks
   * The type of risk to configure. For example: `profanity` or `spam`.
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
   * The buffer limit in bytes for streaming content checks. The service buffers content up to this limit before sending it for analysis.
   */
  bufferLimit?: number;
  /**
   * @remarks
   * Specifies whether to check the content of incoming requests.
   */
  checkRequest?: boolean;
  /**
   * @remarks
   * Specifies whether to check incoming requests for image content. Requires `checkRequest` to be `true`.
   */
  checkRequestImage?: boolean;
  /**
   * @remarks
   * Specifies whether to check the content of outgoing responses.
   */
  checkResponse?: boolean;
  /**
   * @remarks
   * Specifies whether to check outgoing responses for image content. Requires `checkResponse` to be `true`.
   */
  checkResponseImage?: boolean;
  /**
   * @remarks
   * Specifies consumer-specific configurations for the request check service.
   */
  consumerRequestCheckService?: AiSecurityGuardConfigConsumerRequestCheckService[];
  /**
   * @remarks
   * Specifies consumer-specific configurations for the response check service.
   */
  consumerResponseCheckService?: AiSecurityGuardConfigConsumerResponseCheckService[];
  /**
   * @remarks
   * Specifies customized risk thresholds for different consumers.
   */
  consumerRiskLevel?: AiSecurityGuardConfigConsumerRiskLevel[];
  /**
   * @remarks
   * Controls whether the AI Security Guard plugin is enabled or disabled.
   * 
   * **if can be null:**
   * true
   */
  pluginStatus?: AiPluginStatus;
  /**
   * @remarks
   * The identifier of the request check service for text content.
   */
  requestCheckService?: string;
  /**
   * @remarks
   * The identifier of the request check service for image content.
   */
  requestImageCheckService?: string;
  /**
   * @remarks
   * The identifier of the response check service for text content.
   */
  responseCheckService?: string;
  /**
   * @remarks
   * The identifier of the response check service for image content.
   */
  responseImageCheckService?: string;
  /**
   * @remarks
   * The risk alert level. The service triggers an alert when a detected risk meets or exceeds this level.
   */
  riskAlertLevel?: string;
  /**
   * @remarks
   * Specifies general risk configurations.
   */
  riskConfig?: AiSecurityGuardConfigRiskConfig[];
  /**
   * @remarks
   * The service address of the security check endpoint.
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

