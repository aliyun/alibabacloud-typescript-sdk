import * as $dara from '@darabonba/typescript';
export declare class DescribeWhitelistTemplateRequest extends $dara.Model {
    /**
     * @remarks
     * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/26243.html) operation to query region IDs.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The ID of the resource group.
     *
     * @example
     * rg-acfmy****
     */
    resourceGroupId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The ID of the whitelist template. You can call the DescribeAllWhitelistTemplate operation to obtain the ID.
     *
     * This parameter is required.
     *
     * @example
     * 1012
     */
    templateId?: number;
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
