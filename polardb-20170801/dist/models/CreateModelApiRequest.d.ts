import * as $dara from '@darabonba/typescript';
export declare class CreateModelApiRequest extends $dara.Model {
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
     * The forced model.
     *
     * @example
     * Qwen3-32B
     */
    forceModel?: string;
    /**
     * @remarks
     * The ID of the gateway instance. You can obtain this ID from the GwClusterId value returned by the CreateGateway operation.
     *
     * This parameter is required.
     *
     * @example
     * pg-xxxxxxxxxx
     */
    gwClusterId?: string;
    /**
     * @remarks
     * The category. Valid values:
     * * **text**
     * * **embedding**
     * * **rerank**
     *
     * @example
     * text
     */
    modelCategory?: string;
    /**
     * @remarks
     * The model name mappings, specified as a JSON array string. Each element is in the format of {"Source":"client model name","Target":"upstream model name"}. The Source parameter is matched in a case-insensitive manner and must be unique. The Target parameter retains its original case when forwarded. Both parameters cannot be empty and cannot contain leading or trailing spaces.
     *
     * @example
     * [{"Source":"client-model-a","Target":"upstream-model-a"},{"Source":"client-model-b","Target":"upstream-model-b"}]
     */
    modelMappings?: string;
    /**
     * @remarks
     * The intelligent routing candidate list, specified as a JSON object string. Currently, it only contains AllowedModels, which is a non-empty array of unique model names. The order of the array determines the candidate order. Do not pass the Enabled, cost, or quality tier parameters. Saving candidates does not enable the feature. You must first call the EnableModelRouting operation to obtain the gateway entitlements.
     *
     * @example
     * {"AllowedModels":["deepseek-v4-pro","glm-5.3","glm-5.3-flash"]}
     */
    modelRouting?: string;
    /**
     * @remarks
     * The name of the model API.
     *
     * @example
     * test
     */
    name?: string;
    /**
     * @remarks
     * The API path prefix.
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
     * The list of routing rules, specified as a JSON array string.
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
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
