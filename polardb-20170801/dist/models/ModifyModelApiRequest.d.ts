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
     * The list of routing rules, formatted as a JSON array string. Usage notes: Correct the value of FallbackMode in the RouteRules parameter example by replacing it with a valid value or removing the field, and add the list of valid values and their meanings for the FallbackMode subfield to the description of RouteRules.
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
