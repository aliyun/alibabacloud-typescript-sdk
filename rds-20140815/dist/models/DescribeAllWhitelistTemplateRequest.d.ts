import * as $dara from '@darabonba/typescript';
export declare class DescribeAllWhitelistTemplateRequest extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to enable fuzzy match. Valid values:
     *
     * - **true**: Enabled.
     * - **false**: Disabled.
     *
     * @example
     * true
     */
    fuzzySearch?: boolean;
    /**
     * @remarks
     * The number of entries per page. Valid values: 10, 30, and 50.
     *
     * This parameter is required.
     *
     * @example
     * 10
     */
    maxRecordsPerPage?: number;
    /**
     * @remarks
     * The current page number.
     *
     * This parameter is required.
     *
     * @example
     * 1
     */
    pageNumbers?: number;
    /**
     * @remarks
     * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/610399.html) operation to query region IDs.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The ID of the resource group. For more information, see What is a resource group?
     *
     * @example
     * rg-acfmyhigx******
     */
    resourceGroupId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The name of the whitelist template. Specify this parameter for fuzzy match. You can call the DescribeWhitelistTemplate operation to obtain the template name.
     *
     * @example
     * template
     */
    templateName?: string;
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
