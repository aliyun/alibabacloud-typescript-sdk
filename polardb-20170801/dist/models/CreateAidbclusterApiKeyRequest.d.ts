import * as $dara from '@darabonba/typescript';
export declare class CreateAIDBClusterApiKeyRequest extends $dara.Model {
    /**
     * @remarks
     * The description.
     *
     * @example
     * test
     */
    description?: string;
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
     * > * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query the region information of all clusters under the specified account.
     * > * If you leave this parameter empty, scheduled tasks across all regions under the current account are queried.
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
