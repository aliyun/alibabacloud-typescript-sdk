// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModelSelection } from "./ModelSelection";
import { ModelApiPolicyConfig } from "./ModelApiPolicyConfig";


export class CreateModelApiRequest extends $dara.Model {
  /**
   * @remarks
   * The API access prefix. The default value for creation is /. If omitted during an update, the original value is retained.
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
   * Specifies whether to enable direct supply fallback. If omitted in a create request, the default value is false, which does not implicitly incur pay-as-you-go tail charges. You can only enable this feature by explicitly setting this parameter to true.
   * 
   * **if can be null:**
   * false
   */
  directSupplyFallbackEnabled?: boolean;
  /**
   * @remarks
   * The IDs of the selected custom or default instance domain names. This parameter must be explicitly specified and cannot be empty during creation. If omitted during an update, the original value is retained. If submitted, the entire list is replaced and cannot be empty.
   * 
   * This parameter is required.
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
   * The timeout period for the first byte.
   * 
   * @example
   * 30000
   */
  firstByteTimeout?: number;
  /**
   * @remarks
   * The target dedicated gateway instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gw-d00000000000000000000
   */
  gatewayId?: string;
  /**
   * @remarks
   * Specifies whether to explicitly perform the initial configuration. If omitted or set to false, standard multi-API creation is retained. If set to true, you must explicitly set name to default, basePath to /, and provide a non-empty clientToken. Additionally, when saving, multi-API management must be disabled and the number of complete new-version APIs must be zero.
   * 
   * **if can be null:**
   * false
   */
  initialConfiguration?: boolean;
  /**
   * @remarks
   * The model selection. This parameter is required for creation. If omitted during an update, the original value is retained. If submitted, the entire value is replaced.
   * 
   * This parameter is required.
   * 
   * **if can be null:**
   * false
   */
  modelSelection?: ModelSelection;
  /**
   * @remarks
   * The name of the model API.
   * 
   * This parameter is required.
   * 
   * @example
   * beta-model-api
   */
  name?: string;
  /**
   * @remarks
   * The configurations for AI request logging and AI security protection only. If omitted during an update, the original values are retained. If submitted, the inline policies of both types are entirely replaced. An empty array clears both types. Independent token quotas are not affected.
   * 
   * **if can be null:**
   * false
   */
  policyConfigs?: ModelApiPolicyConfig[];
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acf0000000000000000
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The idempotency identity. The caller generates a globally unique value (we recommend a UUID) to invoke the API. The maximum length is 64 characters. Within approximately 24 hours after the initial request succeeds, if you invoke a duplicate request with the same clientToken and identical request parameter values, the system directly returns the initial creation result. If a request parameter is inconsistent or the initial request is still being processed, the system returns the corresponding idempotency fault. If omitted, the original creation behavior is retained.
   * 
   * @example
   * create-model-api-client-token-001
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      basePath: 'basePath',
      description: 'description',
      directSupplyFallbackEnabled: 'directSupplyFallbackEnabled',
      domainIds: 'domainIds',
      enableAuth: 'enableAuth',
      firstByteTimeout: 'firstByteTimeout',
      gatewayId: 'gatewayId',
      initialConfiguration: 'initialConfiguration',
      modelSelection: 'modelSelection',
      name: 'name',
      policyConfigs: 'policyConfigs',
      resourceGroupId: 'resourceGroupId',
      clientToken: 'clientToken',
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
      gatewayId: 'string',
      initialConfiguration: 'boolean',
      modelSelection: ModelSelection,
      name: 'string',
      policyConfigs: { 'type': 'array', 'itemType': ModelApiPolicyConfig },
      resourceGroupId: 'string',
      clientToken: 'string',
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

