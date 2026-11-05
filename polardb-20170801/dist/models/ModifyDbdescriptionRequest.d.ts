import * as $dara from '@darabonba/typescript';
export declare class ModifyDBDescriptionRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pc-***************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The description of the database. The description must meet the following requirements:
     *
     * - Cannot start with `http://` or `https://`.
     *
     * - Must be 2 to 256 characters in length.
     *
     * This parameter is required.
     *
     * @example
     * DBDesc
     */
    DBDescription?: string;
    /**
     * @remarks
     * The database name.
     *
     * This parameter is required.
     *
     * @example
     * testDB
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
