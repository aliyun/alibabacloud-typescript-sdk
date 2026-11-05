import * as $dara from '@darabonba/typescript';
export declare class DeleteParameterGroupRequest extends $dara.Model {
    ownerId?: number;
    /**
     * @remarks
     * The parameter template ID. You can call the DescribeParameterGroups operation to query the parameter template ID.
     *
     * This parameter is required.
     *
     * @example
     * rpg-gfs****
     */
    parameterGroupId?: string;
    /**
     * @remarks
     * The region ID. You can call the DescribeRegions operation to query the region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The resource group ID. You can call the DescribeDBInstanceAttribute operation to query the resource group ID.
     *
     * @example
     * rg-acfmy****
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
