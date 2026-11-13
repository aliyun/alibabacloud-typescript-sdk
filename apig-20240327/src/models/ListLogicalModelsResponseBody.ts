// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogicalModelsResponseBodyDataItemsAvailablePaths extends $dara.Model {
  /**
   * @remarks
   * The call path.
   * 
   * @example
   * /v1/chat/completions
   */
  path?: string;
  /**
   * @remarks
   * The path type.
   * 
   * @example
   * type-xxxxxxxx
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'path',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
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

export class ListLogicalModelsResponseBodyDataItemsDeployment extends $dara.Model {
  /**
   * @remarks
   * The ID of the current configuration delivery operation.
   * 
   * @example
   * op-xxxxxxxx
   */
  operationId?: string;
  /**
   * @remarks
   * The object configuration version.
   * 
   * @example
   * 1
   */
  revision?: number;
  /**
   * @remarks
   * The configuration delivery status. Valid values: Pending, Running, Succeeded, PartiallyFailed, and Failed. This status is independent of the API release status.
   * 
   * @example
   * Succeeded
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      operationId: 'operationId',
      revision: 'revision',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationId: 'string',
      revision: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogicalModelsResponseBodyDataItemsFallbackTargets extends $dara.Model {
  /**
   * @remarks
   * The ID of the actual source model card within the same instance.
   * 
   * This parameter is required.
   * 
   * @example
   * msc-xxxxxxxx
   */
  modelCardId?: string;
  static names(): { [key: string]: string } {
    return {
      modelCardId: 'modelCardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelCardId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogicalModelsResponseBodyDataItemsMeta extends $dara.Model {
  /**
   * @remarks
   * The minimum input token limit when all primary targets declare this limit. This field is not returned if any target\\"s limit is unknown.
   * 
   * @example
   * 128000
   */
  maxInputTokens?: number;
  /**
   * @remarks
   * The minimum output token limit when all primary targets declare this limit. This field is not returned if any target\\"s limit is unknown.
   * 
   * @example
   * 16384
   */
  maxOutputTokens?: number;
  /**
   * @remarks
   * The minimum total token limit when all primary targets declare this limit. This field is not returned if any target\\"s limit is unknown.
   * 
   * @example
   * 16384
   */
  maxTokens?: number;
  /**
   * @remarks
   * The input modalities commonly supported by all primary targets.
   */
  supportedInputModalities?: string[];
  /**
   * @remarks
   * The output modalities commonly supported by all primary targets.
   */
  supportedOutputModalities?: string[];
  static names(): { [key: string]: string } {
    return {
      maxInputTokens: 'maxInputTokens',
      maxOutputTokens: 'maxOutputTokens',
      maxTokens: 'maxTokens',
      supportedInputModalities: 'supportedInputModalities',
      supportedOutputModalities: 'supportedOutputModalities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxInputTokens: 'number',
      maxOutputTokens: 'number',
      maxTokens: 'number',
      supportedInputModalities: { 'type': 'array', 'itemType': 'string' },
      supportedOutputModalities: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedInputModalities)) {
      $dara.Model.validateArray(this.supportedInputModalities);
    }
    if(Array.isArray(this.supportedOutputModalities)) {
      $dara.Model.validateArray(this.supportedOutputModalities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogicalModelsResponseBodyDataItemsSlotsComplex extends $dara.Model {
  /**
   * @remarks
   * The ID of the actual source model card within the same instance. The ID starts with msc-. VM or service overrides are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * msc-xxxxxxxx
   */
  modelCardId?: string;
  static names(): { [key: string]: string } {
    return {
      modelCardId: 'modelCardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelCardId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogicalModelsResponseBodyDataItemsSlotsSimple extends $dara.Model {
  /**
   * @remarks
   * The ID of the actual source model card within the same instance. The ID starts with msc-. VM or service overrides are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * msc-xxxxxxxx
   */
  modelCardId?: string;
  static names(): { [key: string]: string } {
    return {
      modelCardId: 'modelCardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelCardId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogicalModelsResponseBodyDataItemsSlotsStandard extends $dara.Model {
  /**
   * @remarks
   * The ID of the actual source model card within the same instance. The ID starts with msc-. VM or service overrides are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * msc-xxxxxxxx
   */
  modelCardId?: string;
  static names(): { [key: string]: string } {
    return {
      modelCardId: 'modelCardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelCardId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogicalModelsResponseBodyDataItemsSlots extends $dara.Model {
  /**
   * @remarks
   * The complex slot, which contains 1 to 3 source cards. The three slots are globally deduplicated by modelCardId.
   * 
   * This parameter is required.
   */
  complex?: ListLogicalModelsResponseBodyDataItemsSlotsComplex[];
  /**
   * @remarks
   * The simple slot, which contains 1 to 3 source cards. The three slots are globally deduplicated by modelCardId.
   * 
   * This parameter is required.
   */
  simple?: ListLogicalModelsResponseBodyDataItemsSlotsSimple[];
  /**
   * @remarks
   * The standard slot, which contains 1 to 3 source cards. The three slots are globally deduplicated by modelCardId.
   * 
   * This parameter is required.
   */
  standard?: ListLogicalModelsResponseBodyDataItemsSlotsStandard[];
  static names(): { [key: string]: string } {
    return {
      complex: 'complex',
      simple: 'simple',
      standard: 'standard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complex: { 'type': 'array', 'itemType': ListLogicalModelsResponseBodyDataItemsSlotsComplex },
      simple: { 'type': 'array', 'itemType': ListLogicalModelsResponseBodyDataItemsSlotsSimple },
      standard: { 'type': 'array', 'itemType': ListLogicalModelsResponseBodyDataItemsSlotsStandard },
    };
  }

  validate() {
    if(Array.isArray(this.complex)) {
      $dara.Model.validateArray(this.complex);
    }
    if(Array.isArray(this.simple)) {
      $dara.Model.validateArray(this.simple);
    }
    if(Array.isArray(this.standard)) {
      $dara.Model.validateArray(this.standard);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogicalModelsResponseBodyDataItemsTargets extends $dara.Model {
  /**
   * @remarks
   * The ID of the actual source model card within the same instance. The ID starts with msc-. VM or service overrides are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * msc-xxxxxxxx
   */
  modelCardId?: string;
  /**
   * @remarks
   * The weight. It is an integer from 0 to 10000 and is saved as the original value. A value of 0 is allowed for Mapping.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      modelCardId: 'modelCardId',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelCardId: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogicalModelsResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The list of call paths commonly supported by all primary targets.
   */
  availablePaths?: ListLogicalModelsResponseBodyDataItemsAvailablePaths[];
  /**
   * @remarks
   * The call strategy. This field is returned only for Auto. Valid values: balanced, cheap, fast, and quality. This field can be omitted. If omitted, the default strategy is balanced. This field is not returned for Mapping and Weighted.
   * 
   * @example
   * balanced
   */
  callStrategy?: string;
  /**
   * @remarks
   * The configuration delivery record. A successful API response only indicates that the request is accepted, not that the configuration has taken effect.
   */
  deployment?: ListLogicalModelsResponseBodyDataItemsDeployment;
  /**
   * @remarks
   * The ordered fallback targets. A maximum of 5 fallback targets are supported. They are deduplicated by the actual card ID and can be an empty array.
   */
  fallbackTargets?: ListLogicalModelsResponseBodyDataItemsFallbackTargets[];
  /**
   * @remarks
   * The intersection of the Boolean capabilities of all primary targets.
   * 
   * @example
   * {"nativeStreaming":true}
   */
  features?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the gateway instance to which the logical model belongs.
   * 
   * @example
   * gw-xxxxxxxx
   */
  gatewayId?: string;
  /**
   * @remarks
   * The logical model ID. The ID starts with vm-.
   * 
   * @example
   * vm-xxxxxxxx
   */
  logicalModelId?: string;
  /**
   * @remarks
   * The aggregated information about the capabilities of the primary targets.
   */
  meta?: ListLogicalModelsResponseBodyDataItemsMeta;
  /**
   * @remarks
   * The client logical call name. It supports up to 256 bytes in UTF-8, must not contain spaces or slashes, and must not start with auto.
   * 
   * @example
   * chat-entry
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether activation is required. This field is returned only for Auto. If the AI Credits Router commodity is not activated, the value is true. If it is activated, the value is false. This field is omitted if the read operation fails or the status is unknown. This field is omitted for Mapping and Weighted.
   */
  requiresActivation?: boolean;
  /**
   * @remarks
   * The response model type. If Actual is specified, the public name of the actual model is returned. If Logical is specified, the entry name of the logical model is returned.
   * 
   * @example
   * Logical
   */
  responseModel?: string;
  /**
   * @remarks
   * The object version number. The initial value is 1 upon creation and increments with each successful update.
   * 
   * @example
   * 1
   */
  revision?: number;
  /**
   * @remarks
   * The routing policy. Valid values: Mapping, Weighted, and Auto. If Auto is specified, targets must be an empty array and slots is required.
   * 
   * @example
   * Mapping
   */
  routingPolicy?: string;
  /**
   * @remarks
   * The slots. This field is returned only for Auto. Each of the simple, standard, and complex slots contains 1 to 3 source cards. The three slots are globally deduplicated by modelCardId. This field is omitted for Mapping and Weighted.
   */
  slots?: ListLogicalModelsResponseBodyDataItemsSlots;
  /**
   * @remarks
   * The primary targets. For Mapping, exactly one target is allowed. For Weighted, the sum of original relative weights must be greater than 0. For Auto, this must be an empty array.
   */
  targets?: ListLogicalModelsResponseBodyDataItemsTargets[];
  /**
   * @remarks
   * The last modification time in ISO 8601 (RFC 3339) format in the UTC time zone, such as 2026-05-15T10:00:00Z.
   * 
   * @example
   * 2026-05-15T10:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      availablePaths: 'availablePaths',
      callStrategy: 'callStrategy',
      deployment: 'deployment',
      fallbackTargets: 'fallbackTargets',
      features: 'features',
      gatewayId: 'gatewayId',
      logicalModelId: 'logicalModelId',
      meta: 'meta',
      name: 'name',
      requiresActivation: 'requiresActivation',
      responseModel: 'responseModel',
      revision: 'revision',
      routingPolicy: 'routingPolicy',
      slots: 'slots',
      targets: 'targets',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availablePaths: { 'type': 'array', 'itemType': ListLogicalModelsResponseBodyDataItemsAvailablePaths },
      callStrategy: 'string',
      deployment: ListLogicalModelsResponseBodyDataItemsDeployment,
      fallbackTargets: { 'type': 'array', 'itemType': ListLogicalModelsResponseBodyDataItemsFallbackTargets },
      features: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gatewayId: 'string',
      logicalModelId: 'string',
      meta: ListLogicalModelsResponseBodyDataItemsMeta,
      name: 'string',
      requiresActivation: 'boolean',
      responseModel: 'string',
      revision: 'number',
      routingPolicy: 'string',
      slots: ListLogicalModelsResponseBodyDataItemsSlots,
      targets: { 'type': 'array', 'itemType': ListLogicalModelsResponseBodyDataItemsTargets },
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.availablePaths)) {
      $dara.Model.validateArray(this.availablePaths);
    }
    if(this.deployment && typeof (this.deployment as any).validate === 'function') {
      (this.deployment as any).validate();
    }
    if(Array.isArray(this.fallbackTargets)) {
      $dara.Model.validateArray(this.fallbackTargets);
    }
    if(this.features) {
      $dara.Model.validateMap(this.features);
    }
    if(this.meta && typeof (this.meta as any).validate === 'function') {
      (this.meta as any).validate();
    }
    if(this.slots && typeof (this.slots as any).validate === 'function') {
      (this.slots as any).validate();
    }
    if(Array.isArray(this.targets)) {
      $dara.Model.validateArray(this.targets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogicalModelsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of logical models.
   */
  items?: ListLogicalModelsResponseBodyDataItems[];
  /**
   * @remarks
   * The maximum number of entries returned for the current request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The cursor token for querying the next page. This field is not returned if no more data is available.
   * 
   * @example
   * next-token-xxxxxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListLogicalModelsResponseBodyDataItems },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogicalModelsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListLogicalModelsResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 393E2630-DBE7-5221-AB35-9E740675491A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListLogicalModelsResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

