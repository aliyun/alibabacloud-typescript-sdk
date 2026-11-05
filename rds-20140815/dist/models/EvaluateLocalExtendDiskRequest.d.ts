import * as $dara from '@darabonba/typescript';
export declare class EvaluateLocalExtendDiskRequest extends $dara.Model {
    /**
     * @remarks
     * The name of the instance.
     *
     * This parameter is required.
     *
     * @example
     * rm-wz9s06u4drm******
     */
    DBInstanceName?: string;
    ownerId?: number;
    /**
     * @remarks
     * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/26243.html) operation to obtain the region ID.
     *
     * This parameter is required.
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
     * rg-ac****
     */
    resourceGroupId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The storage capacity after scaling. Unit: GB.
     *
     * @example
     * 1000
     */
    storage?: number;
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
