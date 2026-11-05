import * as $dara from '@darabonba/typescript';
export declare class DescribeModelApisRequest extends $dara.Model {
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
     * The model API IDs.
     *
     * @example
     * mi-xxx,mi-xxxx
     */
    modelApiIds?: string;
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
     * The name of the model API.
     *
     * @example
     * testName
     */
    name?: string;
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page. Valid values:
     * * **30**
     * * **50**
     * * **100**
     * Default value: **30**.
     *
     * @example
     * 30
     */
    pageSize?: number;
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
     * The region ID.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    /**
     * @remarks
     * The status of the model API.
     *
     * @example
     * Enable
     */
    status?: string;
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
