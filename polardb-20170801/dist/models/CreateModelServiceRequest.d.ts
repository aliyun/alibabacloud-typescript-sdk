import * as $dara from '@darabonba/typescript';
export declare class CreateModelServiceRequest extends $dara.Model {
    /**
     * @remarks
     * The API key of the model service.
     *
     * This parameter is required.
     *
     * @example
     * 6c4b1f0317cd4fd7a5b446d3503d**
     */
    apiKey?: string;
    /**
     * @remarks
     * The address of the upstream service.
     *
     * This parameter is required.
     *
     * @example
     * https://example.com/v1
     */
    baseUrl?: string;
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
     * The number of input points.
     *
     * @example
     * 10
     */
    inputCostPointsPerMillion?: string;
    /**
     * @remarks
     * The model category.
     *
     * This parameter is required.
     *
     * @example
     * text
     */
    modelCategory?: string;
    /**
     * @remarks
     * The model service name.
     *
     * This parameter is required.
     *
     * @example
     * test
     */
    name?: string;
    /**
     * @remarks
     * The number of output points.
     *
     * @example
     * 10
     */
    outputCostPointsPerMillion?: string;
    /**
     * @remarks
     * The protocol type.
     *
     * This parameter is required.
     *
     * @example
     * openai
     */
    protocol?: string;
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
     * The number of requests.
     *
     * @example
     * 10
     */
    requestCostPoints?: string;
    /**
     * @remarks
     * The model service provider.
     *
     * This parameter is required.
     *
     * @example
     * bailian
     */
    vendor?: string;
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
