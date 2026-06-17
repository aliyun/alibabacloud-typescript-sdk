// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelApiRequest extends $dara.Model {
  /**
   * @remarks
   * The model to which requests are forcibly routed.
   * 
   * @example
   * xxx
   */
  forceModel?: string;
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
   * The model API category. Valid values:
   * 
   * - **text**
   * 
   * - **embedding**
   * 
   * - **rerank**
   * 
   * This parameter is required.
   * 
   * @example
   * text
   */
  modelCategory?: string;
  /**
   * @remarks
   * The model API name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The path prefix.
   * 
   * This parameter is required.
   * 
   * @example
   * /test
   */
  pathPrefix?: string;
  /**
   * @remarks
   * The model API protocol. Valid values:
   * 
   * - **OpenAI**
   * 
   * - **Anthropic**
   * 
   * - **Model Studio**
   * 
   * - **vLLM**
   * 
   * This parameter is required.
   * 
   * @example
   * openai
   */
  protocol?: string;
  /**
   * @remarks
   * Specifies whether to record input for billing.
   * 
   * @example
   * 10
   */
  recordInput?: string;
  /**
   * @remarks
   * Specifies whether to record output for billing.
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
   * A list of routing rules, provided as a JSON array string.
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
      forceModel: 'ForceModel',
      gwClusterId: 'GwClusterId',
      modelCategory: 'ModelCategory',
      name: 'Name',
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
      forceModel: 'string',
      gwClusterId: 'string',
      modelCategory: 'string',
      name: 'string',
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

