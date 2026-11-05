import * as $dara from '@darabonba/typescript';
export declare class DeleteAIDBClusterApiKeyRequest extends $dara.Model {
    /**
     * @remarks
     * The API key of the model service.
     *
     * This parameter is required.
     *
     * @example
     * xxx
     */
    apiKey?: string;
    /**
     * @remarks
     * The model space ID.
     *
     * @example
     * pms-xxx
     */
    modelSpaceName?: string;
    /**
     * @remarks
     * The region ID.
     * >You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query available region IDs.
     *
     * This parameter is required.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
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
