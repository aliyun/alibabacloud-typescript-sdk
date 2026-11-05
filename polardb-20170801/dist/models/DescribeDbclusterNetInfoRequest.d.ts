import * as $dara from '@darabonba/typescript';
export declare class DescribeDBClusterNetInfoRequest extends $dara.Model {
    /**
     * @remarks
     * The type of the endpoint. Valid values:
     *
     * - Normal: the primary endpoint
     *
     * - ReadWriteSplitting: the cluster endpoint
     *
     * - MPP: the Massively Parallel Processing (MPP) endpoint
     *
     * @example
     * Normal
     */
    connectionStringType?: string;
    /**
     * @remarks
     * The cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pc-****************
     */
    DBClusterId?: string;
    ownerAccount?: string;
    ownerId?: number;
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
