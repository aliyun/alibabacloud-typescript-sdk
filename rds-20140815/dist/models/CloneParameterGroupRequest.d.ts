import * as $dara from '@darabonba/typescript';
export declare class CloneParameterGroupRequest extends $dara.Model {
    ownerId?: number;
    /**
     * @remarks
     * The description of the parameter template that is copied to the destination region.
     *
     * @example
     * CloneGroup1
     */
    parameterGroupDesc?: string;
    /**
     * @remarks
     * The ID of the source parameter template. You can call the [DescribeParameterGroups](https://help.aliyun.com/document_detail/144491.html) operation to query the parameter template ID.
     *
     * This parameter is required.
     *
     * @example
     * rpg-13ppdh****
     */
    parameterGroupId?: string;
    /**
     * @remarks
     * The name of the parameter template that is copied to the destination region.
     *
     * This parameter is required.
     *
     * @example
     * tartestgroup
     */
    parameterGroupName?: string;
    /**
     * @remarks
     * The region ID of the source parameter template. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The resource group ID. This parameter can be left empty.
     *
     * @example
     * rg-acfmy****
     */
    resourceGroupId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The ID of the destination region. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-qingdao
     */
    targetRegionId?: string;
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
