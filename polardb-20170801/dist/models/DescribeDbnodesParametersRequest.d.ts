import * as $dara from '@darabonba/typescript';
export declare class DescribeDBNodesParametersRequest extends $dara.Model {
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
    /**
     * @remarks
     * The node IDs. You can specify multiple node IDs separated by commas (,).
     *
     * This parameter is required.
     *
     * @example
     * pi-****************,pi-****************
     */
    DBNodeIds?: string;
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
