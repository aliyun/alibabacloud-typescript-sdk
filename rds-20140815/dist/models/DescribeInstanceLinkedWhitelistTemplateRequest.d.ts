import * as $dara from '@darabonba/typescript';
export declare class DescribeInstanceLinkedWhitelistTemplateRequest extends $dara.Model {
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
     * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/26243.html) operation to query the region ID.
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
     * rg-aek3dbzqb******
     */
    resourceGroupId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
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
