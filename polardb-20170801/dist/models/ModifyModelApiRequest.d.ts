import * as $dara from '@darabonba/typescript';
export declare class ModifyModelApiRequest extends $dara.Model {
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
     * The ID of the model API.
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
     * @example
     * text
     */
    modelCategory?: string;
    /**
     * @remarks
     * The model name mappings, specified as a JSON array string. Each element is in the format of {"Source":"client model name","Target":"upstream model name"}. If you do not specify this parameter, the current mappings are retained. If you specify "[]", the mappings are cleared. The Source field is matched in a case-insensitive manner and must be unique.
     *
     * @example
     * [{"Source":"client-model-a","Target":"upstream-model-a"},{"Source":"client-model-b","Target":"upstream-model-b"}]
     */
    modelMappings?: string;
    /**
     * @remarks
     * The intelligent routing candidate list, specified as a JSON object string in the format of {"AllowedModels":["candidate model name"]}. If you do not specify this parameter, the current list is retained. If you specify this parameter, the existing list is fully replaced with the new list. You cannot use an empty list to disable the feature. Saving candidates does not enable the feature. You must call EnableModelRouting first.
     *
     * @example
     * {"AllowedModels":["deepseek-v4-pro","glm-5.3","glm-5.3-flash"]}
     */
    modelRouting?: string;
    /**
     * @remarks
     * The name of the model API. This parameter is modifiable. If you do not specify this parameter, the original name is retained.
     *
     * @example
     * jev-chat-api
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
     * The number of input tokens.
     *
     * @example
     * 10
     */
    recordInput?: string;
    /**
     * @remarks
     * The number of output tokens.
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
     * The list of routing rules, specified as a JSON array string. Usage note: Correct the value of FallbackMode in the RouteRules parameter example by replacing it with a valid value or removing the field, and add the list of valid values and their descriptions for the FallbackMode subfield in the description of RouteRules.
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
