import * as $dara from '@darabonba/typescript';
export declare class ModifyAccountDescriptionRequest extends $dara.Model {
    /**
     * @remarks
     * The description of the account. The description must meet the following requirements:
     *
     * - It cannot start with `http://` or `https://`.
     *
     * - It must be 2 to 256 characters in length.
     *
     * This parameter is required.
     *
     * @example
     * test
     */
    accountDescription?: string;
    /**
     * @remarks
     * The account name.
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
     * pc-*************
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
