import * as $dara from '@darabonba/typescript';
export declare class DeleteDatabaseZonalRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * > Note: The DBClusterId must be the ID of a PolarDB on ENS cluster created by calling CreateDBCluster(CloudProvider=ENS, EnsRegionId=xxx).
     *
     * This parameter is required.
     *
     * @example
     * pc-*************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The name of the database.
     *
     * This parameter is required.
     *
     * @example
     * testdb
     */
    DBName?: string;
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
