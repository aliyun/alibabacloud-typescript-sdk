import * as $dara from '@darabonba/typescript';
export declare class DescribeAvailableCrossRegionRequest extends $dara.Model {
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
