// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModelSelection } from "./ModelSelection";
import { ModelSelectionDelta } from "./ModelSelectionDelta";
import { ModelApiPolicyConfig } from "./ModelApiPolicyConfig";


export class UpdateModelApiRequest extends $dara.Model {
  /**
   * @remarks
   * The access prefix of the API. The default value is / when created. If omitted in an update request, the original value is retained.
   * 
   * @example
   * /beta
   */
  basePath?: string;
  /**
   * @remarks
   * The description of the model API. If omitted in an update request, the original value is retained.
   * 
   * @example
   * Model API for business integration
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable the direct supply fallback. If omitted in an update request, the original value is retained. Set to false to explicitly disable it.
   * 
   * **if can be null:**
   * false
   */
  directSupplyFallbackEnabled?: boolean;
  /**
   * @remarks
   * The IDs of the selected custom or instance default domain names. This parameter must be explicitly set to a non-empty value when creating an API. If omitted in an update request, the original value is retained. When submitted, the entire list is replaced and cannot be empty.
   * 
   * **if can be null:**
   * false
   */
  domainIds?: string[];
  /**
   * @remarks
   * Specifies whether to enable consumer API key authentication. If omitted in an update request, the original value is retained. The type is fixed to Apikey or Custom.
   */
  enableAuth?: boolean;
  /**
   * @remarks
   * The first byte timeout.
   * 
   * @example
   * 30000
   */
  firstByteTimeout?: number;
  /**
   * @remarks
   * The model selection. This parameter is required when creating an API. If omitted in an update request, the original value is retained. When submitted, the entire selection is replaced.
   * 
   * **if can be null:**
   * false
   */
  modelSelection?: ModelSelection;
  /**
   * @remarks
   * Supported only by the new version of Model API in minimalist mode. Merges the actual source model IDs added or removed in this request into the latest locked selection. This parameter is mutually exclusive with modelSelection and cannot be null or an empty delta. The standard update and publish process applies.
   * 
   * **if can be null:**
   * false
   */
  modelSelectionDelta?: ModelSelectionDelta;
  /**
   * @remarks
   * The name of the model API. If omitted or set to null, the original value is retained. When submitted, the name is trimmed of leading and trailing whitespace, must not be empty, can be up to 128 UTF-8 bytes in length, and cannot contain the at sign (@) or forward slash (/). Renaming the API does not change the API ID or the access prefix.
   * 
   * @example
   * beta-model-api
   */
  name?: string;
  /**
   * @remarks
   * The policy configurations for AI request logging and AI security protection only. If omitted in an update request, the original values are retained. When submitted, the inline policies of both types are entirely replaced. An empty array clears both types of policies. Independent token quotas are not affected.
   * 
   * **if can be null:**
   * false
   */
  policyConfigs?: ModelApiPolicyConfig[];
  static names(): { [key: string]: string } {
    return {
      basePath: 'basePath',
      description: 'description',
      directSupplyFallbackEnabled: 'directSupplyFallbackEnabled',
      domainIds: 'domainIds',
      enableAuth: 'enableAuth',
      firstByteTimeout: 'firstByteTimeout',
      modelSelection: 'modelSelection',
      modelSelectionDelta: 'modelSelectionDelta',
      name: 'name',
      policyConfigs: 'policyConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basePath: 'string',
      description: 'string',
      directSupplyFallbackEnabled: 'boolean',
      domainIds: { 'type': 'array', 'itemType': 'string' },
      enableAuth: 'boolean',
      firstByteTimeout: 'number',
      modelSelection: ModelSelection,
      modelSelectionDelta: ModelSelectionDelta,
      name: 'string',
      policyConfigs: { 'type': 'array', 'itemType': ModelApiPolicyConfig },
    };
  }

  validate() {
    if(Array.isArray(this.domainIds)) {
      $dara.Model.validateArray(this.domainIds);
    }
    if(this.modelSelection && typeof (this.modelSelection as any).validate === 'function') {
      (this.modelSelection as any).validate();
    }
    if(this.modelSelectionDelta && typeof (this.modelSelectionDelta as any).validate === 'function') {
      (this.modelSelectionDelta as any).validate();
    }
    if(Array.isArray(this.policyConfigs)) {
      $dara.Model.validateArray(this.policyConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

