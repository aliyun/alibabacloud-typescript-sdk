import * as $dara from '@darabonba/typescript';
export declare class DescribeParameterGroupsRequest extends $dara.Model {
    /**
     * @remarks
     * The parameter overview information.
     *
     * - **false**: Returns parameter overview information. This is the default value.
     *
     * - **true**: Does not return parameter overview information.
     *
     * @example
     * false
     */
    enableDetail?: boolean;
    ownerId?: number;
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
     * The resource group ID.
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
