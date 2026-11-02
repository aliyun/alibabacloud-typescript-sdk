// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AiPluginStatus } from "./AiPluginStatus";


export class AiSecurityGuardConfigConsumerConfigBindings extends $dara.Model {
  /**
   * @remarks
   * The match type for consumer names. Valid values: exact (exact match), prefix (prefix match), regexp (regular expression match), and all (matches any consumer). Rules of the all type must be placed at the end of the binding list.
   * 
   * @example
   * exact
   */
  matchType?: string;
  /**
   * @remarks
   * The match condition for the consumer name. If matchType is exact, enter the full consumer name. If matchType is prefix, enter the name prefix. If matchType is regexp, enter a regular expression. The value cannot be empty for these three types. If matchType is all, the value must be an empty string.
   * 
   * @example
   * example-consumer
   */
  name?: string;
  /**
   * @remarks
   * The ID of the bound security guardrail configuration. This parameter cannot be empty. You can query the ID by calling the ListAiSecurityGuardConfigs operation and use the returned templateId.
   * 
   * @example
   * apig_0123456789abcdef
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      matchType: 'matchType',
      name: 'name',
      templateId: 'templateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchType: 'string',
      name: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiSecurityGuardConfigConsumerRequestCheckService extends $dara.Model {
  /**
   * @remarks
   * The consumer match type.
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
   * The consumer match type.
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
   * The consumer match type.
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
   * The match type.
   * 
   * @example
   * Exact
   */
  matchType?: string;
  /**
   * @remarks
   * The consumer match pattern value.
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
   * The consumer-level match rules.
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
   * The size of the response buffer in KB. Default value: 1000. Valid values: 1 to 1500.
   * 
   * @example
   * 1000
   */
  bufferLimit?: number;
  /**
   * @remarks
   * Specifies whether to check the request content.
   * 
   * @example
   * true
   */
  checkRequest?: boolean;
  /**
   * @remarks
   * Specifies whether to check the request images.
   * 
   * @example
   * false
   */
  checkRequestImage?: boolean;
  /**
   * @remarks
   * Specifies whether to check the response content.
   * 
   * @example
   * true
   */
  checkResponse?: boolean;
  /**
   * @remarks
   * Specifies whether to check the response images.
   * 
   * @example
   * false
   */
  checkResponseImage?: boolean;
  /**
   * @remarks
   * The bindings between consumers and security guardrail configurations. An empty array explicitly clears the pending configurations.
   * 
   * **if can be null:**
   * true
   */
  consumerConfigBindings?: AiSecurityGuardConfigConsumerConfigBindings[];
  /**
   * @remarks
   * The consumer-level request check service configuration.
   */
  consumerRequestCheckService?: AiSecurityGuardConfigConsumerRequestCheckService[];
  /**
   * @remarks
   * The consumer-level response check service configuration.
   */
  consumerResponseCheckService?: AiSecurityGuardConfigConsumerResponseCheckService[];
  /**
   * @remarks
   * The consumer-level risk level configuration.
   */
  consumerRiskLevel?: AiSecurityGuardConfigConsumerRiskLevel[];
  /**
   * @remarks
   * Specifies whether the entire security guardrail policy is populated by default for this query. Returns true only for synthesized policies. For existing policies, returns false or is not returned. This is a read-only field. It is ignored upon submission, is not saved, and does not affect the start or stop status.
   * 
   * **if can be null:**
   * true
   */
  defaultGenerated?: boolean;
  /**
   * @remarks
   * Specifies whether to use the long-term solution. If omitted or set to null, the original value is retained during an update.
   * 
   * **if can be null:**
   * true
   */
  longTermEnabled?: boolean;
  /**
   * @remarks
   * The running status of the plug-in.
   * 
   * **if can be null:**
   * true
   */
  pluginStatus?: AiPluginStatus;
  /**
   * @remarks
   * The ServiceCode of the request text check service. The system injects the default value.
   * 
   * @example
   * query_security_check
   */
  requestCheckService?: string;
  /**
   * @remarks
   * The ServiceCode of the request image check service. The system injects the default value.
   * 
   * @example
   * img_query_guard
   */
  requestImageCheckService?: string;
  /**
   * @remarks
   * The ServiceCode of the response text check service. The system injects the default value.
   * 
   * @example
   * response_security_check
   */
  responseCheckService?: string;
  /**
   * @remarks
   * The ServiceCode of the response image check service. The system injects the default value.
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
   * The list of risk dimension configurations. The system injects this list, which is generated by normalizing ConsumerRiskLevel.
   */
  riskConfig?: AiSecurityGuardConfigRiskConfig[];
  /**
   * @remarks
   * The address of the security guardrail service, which is the green-cip endpoint. If the gateway and the security guardrail are in the same region, use the VPC internal network address.
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
      consumerConfigBindings: 'consumerConfigBindings',
      consumerRequestCheckService: 'consumerRequestCheckService',
      consumerResponseCheckService: 'consumerResponseCheckService',
      consumerRiskLevel: 'consumerRiskLevel',
      defaultGenerated: 'defaultGenerated',
      longTermEnabled: 'longTermEnabled',
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
      consumerConfigBindings: { 'type': 'array', 'itemType': AiSecurityGuardConfigConsumerConfigBindings },
      consumerRequestCheckService: { 'type': 'array', 'itemType': AiSecurityGuardConfigConsumerRequestCheckService },
      consumerResponseCheckService: { 'type': 'array', 'itemType': AiSecurityGuardConfigConsumerResponseCheckService },
      consumerRiskLevel: { 'type': 'array', 'itemType': AiSecurityGuardConfigConsumerRiskLevel },
      defaultGenerated: 'boolean',
      longTermEnabled: 'boolean',
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
    if(Array.isArray(this.consumerConfigBindings)) {
      $dara.Model.validateArray(this.consumerConfigBindings);
    }
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

