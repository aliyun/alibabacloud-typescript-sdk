// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelSelectionFallbackChains extends $dara.Model {
  /**
   * @remarks
   * The endpoint name to which the chain belongs. It must be one of the currently selected endpoints.
   * 
   * @example
   * create-chat-completion
   */
  endpoint?: string;
  /**
   * @remarks
   * The ordered collection of fallback model card IDs.
   */
  fallbackModelCardIds?: string[];
  /**
   * @remarks
   * The source model card ID.
   * 
   * @example
   * msc-d00000000000000000000
   */
  sourceModelCardId?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'endpoint',
      fallbackModelCardIds: 'fallbackModelCardIds',
      sourceModelCardId: 'sourceModelCardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      fallbackModelCardIds: { 'type': 'array', 'itemType': 'string' },
      sourceModelCardId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fallbackModelCardIds)) {
      $dara.Model.validateArray(this.fallbackModelCardIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelSelectionModels extends $dara.Model {
  /**
   * @remarks
   * The model card ID.
   * 
   * @example
   * msc-d00000000000000000000
   */
  modelCardId?: string;
  /**
   * @remarks
   * The explicit execution target AI service ID for the model. This parameter is optional and takes precedence over the provider default.
   * 
   * @example
   * svc-d00000000000000000000
   */
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      modelCardId: 'modelCardId',
      serviceId: 'serviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelCardId: 'string',
      serviceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelSelection extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable convenience aliases. When enabled, all selected model names must be unique.
   * 
   * @example
   * false
   */
  convenienceAliasEnabled?: boolean;
  /**
   * @remarks
   * The collection of explicitly selected built-in endpoint (route) names. This parameter is required and cannot be empty.
   */
  endpoints?: string[];
  /**
   * @remarks
   * The ordered fallback chains configured by endpoint and initial model.
   */
  fallbackChains?: ModelSelectionFallbackChains[];
  /**
   * @remarks
   * The selected model group IDs within the instance. Group identity is retained, the union of current members and single-selected models is calculated, and empty groups can be saved as drafts.
   */
  modelGroupIds?: string[];
  /**
   * @remarks
   * The selected model collection.
   */
  models?: ModelSelectionModels[];
  static names(): { [key: string]: string } {
    return {
      convenienceAliasEnabled: 'convenienceAliasEnabled',
      endpoints: 'endpoints',
      fallbackChains: 'fallbackChains',
      modelGroupIds: 'modelGroupIds',
      models: 'models',
    };
  }

  static types(): { [key: string]: any } {
    return {
      convenienceAliasEnabled: 'boolean',
      endpoints: { 'type': 'array', 'itemType': 'string' },
      fallbackChains: { 'type': 'array', 'itemType': ModelSelectionFallbackChains },
      modelGroupIds: { 'type': 'array', 'itemType': 'string' },
      models: { 'type': 'array', 'itemType': ModelSelectionModels },
    };
  }

  validate() {
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
    }
    if(Array.isArray(this.fallbackChains)) {
      $dara.Model.validateArray(this.fallbackChains);
    }
    if(Array.isArray(this.modelGroupIds)) {
      $dara.Model.validateArray(this.modelGroupIds);
    }
    if(Array.isArray(this.models)) {
      $dara.Model.validateArray(this.models);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

