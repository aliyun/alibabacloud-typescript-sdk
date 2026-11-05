import * as $dara from '@darabonba/typescript';
export declare class DescribeExtensionsRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pc-**************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The database name.
     *
     * This parameter is required.
     *
     * @example
     * song
     */
    DBName?: string;
    /**
     * @remarks
     * The name of the database plugin to query.
     *
     * @example
     * jueming
     */
    extensionName?: string;
    /**
     * @example
     * test@example.com
     */
    ownerAccount?: string;
    /**
     * @example
     * 1234567890123456
     */
    ownerId?: number;
    /**
     * @example
     * test@example.com
     */
    resourceOwnerAccount?: string;
    /**
     * @example
     * 1234567890123456
     */
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
