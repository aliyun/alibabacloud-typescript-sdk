import * as $dara from '@darabonba/typescript';
export declare class CopyDatabaseRequest extends $dara.Model {
    /**
     * @remarks
     * The instance name. **This parameter is required**.
     *
     * @example
     * rm-wz9s06u4drm******
     */
    DBInstanceName?: string;
    /**
     * @remarks
     * The destination database name. **This parameter is required**.
     *
     * @example
     * db2***
     */
    dstDBName?: string;
    ownerId?: number;
    /**
     * @remarks
     * The reserved account.
     *
     * @example
     * 1
     */
    reserveAccount?: number;
    /**
     * @remarks
     * The resource group ID.
     *
     * @example
     * rg-acfmy*****
     */
    resourceGroupId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The source database name. **This parameter is required**.
     *
     * @example
     * db1***
     */
    srcDBName?: string;
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
