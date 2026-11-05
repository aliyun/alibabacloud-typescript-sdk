import * as $dara from '@darabonba/typescript';
export declare class DeleteAccountRequest extends $dara.Model {
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
