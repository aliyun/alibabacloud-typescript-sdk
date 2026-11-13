// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModelSelection } from "./ModelSelection";
import { ModelApiPolicyConfig } from "./ModelApiPolicyConfig";


export class UpdateModelApiRequest extends $dara.Model {
  /**
   * @remarks
   * The access prefix of the API. The default value is / when the API is created. If this parameter is omitted in an update request, the original value is retained.
   * 
   * @example
   * /beta
   */
  basePath?: string;
  /**
   * @remarks
   * The description of the model API. If this parameter is omitted in an update request, the original value is retained.
   * 
   * @example
   * Model API for business integration
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable direct supply fallback. If this parameter is omitted in an update request, the original value is retained. Explicitly setting this parameter to false disables the feature.
   * 
   * **if can be null:**
   * false
   */
  directSupplyFallbackEnabled?: boolean;
  /**
   * @remarks
   * The IDs of the selected custom domain names or the default domain name of the instance. This parameter must be explicitly specified and cannot be empty when the API is created. If this parameter is omitted in an update request, the original value is retained. When submitted, the entire list is replaced and cannot be empty.
   * 
   * **if can be null:**
   * false
   */
  domainIds?: string[];
  /**
   * @remarks
   * Specifies whether to enable API key authentication for consumers. If this parameter is omitted in an update request, the original value is retained. The type is fixed to Apikey or Custom.
   */
  enableAuth?: boolean;
  /**
   * @remarks
   * The time to first byte (TTFB) timeout.
   * 
   * @example
   * 30000
   */
  firstByteTimeout?: number;
  /**
   * @remarks
   * The model selection. This parameter is required when the API is created. If this parameter is omitted in an update request, the original value is retained. When submitted, the entire configuration is replaced.
   * 
   * **if can be null:**
   * false
   */
  modelSelection?: ModelSelection;
  /**
   * @remarks
   * The name of the model API. If this parameter is omitted or set to null, the original value is retained. When submitted, the value is trimmed of leading and trailing whitespace and must not be empty. The value can be up to 128 UTF-8 bytes in length and cannot contain at signs (@) or forward slashes (/). Changing the name does not change the API ID or the access prefix.
   * 
   * @example
   * beta-model-api
   */
  name?: string;
  /**
   * @remarks
   * The configurations for AI request logs and AI security protection only. If this parameter is omitted in an update request, the original value is retained. When submitted, the inline policies of both types are entirely replaced. An empty array clears both types of policies. Independent token quotas are not affected.
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
    if(Array.isArray(this.policyConfigs)) {
      $dara.Model.validateArray(this.policyConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

