// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyModelApiRequest extends $dara.Model {
  /**
   * @remarks
   * The gateway retry configuration.
   * 
   * @example
   * {
   * 	"failover": {
   * 		"enabled": true,
   * 		"max_provider_retries": 2,
   * 		"max_failover_providers": 1,
   * 		"retryable_status_codes": [429, 500, 502, 503, 504],
   * 		"retry_delay": 0.5
   * 	}
   * }
   */
  config?: string;
  /**
   * @remarks
   * The gateway instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pg-xxxxxxxxxx
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The model API ID.
   * 
   * This parameter is required.
   * 
   * @example
   * mi-xxxxx
   */
  modelApiId?: string;
  /**
   * @remarks
   * The category. Valid values:
   * * **text**
   * * **embedding**
   * * **rerank**
   * 
   * This parameter is required.
   * 
   * @example
   * text
   */
  modelCategory?: string;
  /**
   * @remarks
   * The API path prefix.
   * 
   * This parameter is required.
   * 
   * @example
   * /test
   */
  pathPrefix?: string;
  /**
   * @remarks
   * The protocol. Valid values:
   * 
   * * **openai**
   * * **anthropic**
   * * **bailian**
   * * **vllm**
   * 
   * This parameter is required.
   * 
   * @example
   * openai
   */
  protocol?: string;
  /**
   * @remarks
   * The number of input points.
   * 
   * @example
   * 10
   */
  recordInput?: string;
  /**
   * @remarks
   * The number of output points.
   * 
   * @example
   * 10
   */
  recordOutput?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The list of routing rules (JSON array string).
   * 
   * This parameter is required.
   * 
   * @example
   * [
   *   {
   *     "RuleName": "string",
   *     "FallbackMode": "failover",
   *     "MatchModelListJson": "[]",
   *     "providerBalancerAlgorithm": "round-robin",
   *     "Providers": [
   *       {
   *         "ModelServiceName": "string",
   *         "Weight": "0",
   *         "model_protocol": "vllm"
   *         "ModelList": "[]"
   *       }
   *     ],
   *     "FallbackProviders": [
   *       {
   *         "ModelServiceName": "string",
   *         "model_protocol": "anthropic",
   *         "Weight": "10",
   *         "ModelList": "[]"
   *       }
   *     ]
   *   }
   * ]
   */
  routeRules?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      gwClusterId: 'GwClusterId',
      modelApiId: 'ModelApiId',
      modelCategory: 'ModelCategory',
      pathPrefix: 'PathPrefix',
      protocol: 'Protocol',
      recordInput: 'RecordInput',
      recordOutput: 'RecordOutput',
      regionId: 'RegionId',
      routeRules: 'RouteRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      gwClusterId: 'string',
      modelApiId: 'string',
      modelCategory: 'string',
      pathPrefix: 'string',
      protocol: 'string',
      recordInput: 'string',
      recordOutput: 'string',
      regionId: 'string',
      routeRules: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

