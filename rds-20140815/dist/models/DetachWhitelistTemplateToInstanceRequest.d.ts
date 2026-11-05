import * as $dara from '@darabonba/typescript';
export declare class DetachWhitelistTemplateToInstanceRequest extends $dara.Model {
    /**
     * @remarks
     * The name of the instance.
     *
     * This parameter is required.
     *
     * @example
     * rm-bp191w771k******
     */
    insName?: string;
    /**
     * @remarks
     * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/610399.html) operation to query the region ID.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The ID of the resource group. For more information about resource groups, see What is a resource group.
     *
     * @example
     * rg-acfmz3kjr******
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
