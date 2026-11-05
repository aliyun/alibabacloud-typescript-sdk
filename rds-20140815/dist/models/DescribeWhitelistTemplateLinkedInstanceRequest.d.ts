import * as $dara from '@darabonba/typescript';
export declare class DescribeWhitelistTemplateLinkedInstanceRequest extends $dara.Model {
    /**
     * @remarks
     * The region ID. You can call the DescribeRegions operation to query the region ID.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The ID of the resource group. This parameter can be left empty.
     *
     * @example
     * rg-acfmy*****
     */
    resourceGroupId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The ID of the whitelist template. You can call the DescribeAllWhitelistTemplate operation to query the ID.
     *
     * This parameter is required.
     *
     * @example
     * 412
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
