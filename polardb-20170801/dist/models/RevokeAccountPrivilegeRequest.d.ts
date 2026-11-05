import * as $dara from '@darabonba/typescript';
export declare class RevokeAccountPrivilegeRequest extends $dara.Model {
    /**
     * @remarks
     * The account name.
     *
     * > Only standard accounts are supported. Privileged accounts are not supported.
     *
     * This parameter is required.
     *
     * @example
     * testacc
     */
    accountName?: string;
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
     * The database name. To specify multiple databases, separate the names with commas (,).
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
