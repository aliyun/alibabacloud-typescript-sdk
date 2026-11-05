import * as $dara from '@darabonba/typescript';
export declare class DescribeDBClusterServerlessConfRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the serverless cluster.
     *
     * This parameter is required.
     *
     * @example
     * pc-bp10gr51qasnl****
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
