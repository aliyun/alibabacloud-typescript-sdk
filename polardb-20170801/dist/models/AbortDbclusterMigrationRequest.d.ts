import * as $dara from '@darabonba/typescript';
export declare class AbortDBClusterMigrationRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pc-bp150t3l1td9863q9
     */
    DBClusterId?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The resource group ID.
     *
     * @example
     * rg-************
     */
    resourceGroupId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    securityToken?: string;
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
