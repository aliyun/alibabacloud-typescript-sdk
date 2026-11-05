import * as $dara from '@darabonba/typescript';
export declare class DescribeParameterGroupRequest extends $dara.Model {
    ownerId?: number;
    /**
     * @remarks
     * The parameter template ID. You can call the [DescribeParameterGroups](~~DescribeParameterGroups~~) operation to query the parameter template ID.
     *
     * This parameter is required.
     *
     * @example
     * rpg-dp****
     */
    parameterGroupId?: string;
    /**
     * @remarks
     * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
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
