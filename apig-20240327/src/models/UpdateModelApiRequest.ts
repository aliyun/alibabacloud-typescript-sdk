// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModelSelection } from "./ModelSelection";
import { ModelSelectionDelta } from "./ModelSelectionDelta";
import { ModelApiPolicyConfig } from "./ModelApiPolicyConfig";


export class UpdateModelApiRequest extends $dara.Model {
  /**
   * @remarks
   * The API access prefix. The default value is / during creation. If omitted during an update, the original value is retained.
   * 
   * @example
   * /beta
   */
  basePath?: string;
  /**
   * @remarks
   * The description of the model API. If omitted during an update, the original value is retained.
   * 
   * @example
   * Model API for business integration
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable direct supply fallback. If omitted during an update, the original value is retained. Explicitly set to false to disable it.
   * 
   * **if can be null:**
   * false
   */
  directSupplyFallbackEnabled?: boolean;
  /**
   * @remarks
   * The IDs of the selected custom or default domain names of the instance. This parameter must be explicitly non-empty during creation. If omitted during an update, the original value is retained. When submitted, the entire list is replaced and cannot be empty.
   * 
   * **if can be null:**
   * false
   */
  domainIds?: string[];
  /**
   * @remarks
   * Specifies whether to enable consumer API key authentication. If omitted during an update, the original value is retained. The type is fixed to Apikey or Custom.
   */
  enableAuth?: boolean;
  /**
   * @remarks
   * The time to first byte.
   * 
   * @example
   * 30000
   */
  firstByteTimeout?: number;
  /**
   * @remarks
   * The model selection. This parameter is required during creation. If omitted during an update, the original value is retained. When submitted, the entire selection is replaced.
   * 
   * **if can be null:**
   * false
   */
  modelSelection?: ModelSelection;
  /**
   * @remarks
   * Supported only by the new version of ModelAPI in minimalist mode: merges the actual source model IDs added to or removed from the model source in this request into the latest selection within the lock. This parameter is mutually exclusive with modelSelection and cannot be null or an empty delta. The standard update and publish process applies.
   * 
   * **if can be null:**
   * false
   */
  modelSelectionDelta?: ModelSelectionDelta;
  /**
   * @remarks
   * The name of the model API. If omitted or set to null, the original value is retained. When submitted, the value is trimmed of leading and trailing whitespace, must be non-empty, contain a maximum of 128 UTF-8 bytes, and cannot contain @ or /. Renaming the API does not change the API ID or access prefix.
   * 
   * @example
   * beta-model-api
   */
  name?: string;
  /**
   * @remarks
   * The configurations for AI request logs and AI security protection. If omitted during an update, the original values are retained. When submitted, the inline policies of both types are entirely replaced. An empty array clears both types. Independent token quotas are not affected.
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

