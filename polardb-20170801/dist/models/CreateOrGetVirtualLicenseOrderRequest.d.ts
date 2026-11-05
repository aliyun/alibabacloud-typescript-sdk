import * as $dara from '@darabonba/typescript';
export declare class CreateOrGetVirtualLicenseOrderRequest extends $dara.Model {
    /**
     * @remarks
     * The engine type. Valid values: PG, Oracle, and MySQL.
     *
     * This parameter is required.
     *
     * @example
     * PG
     */
    engine?: string;
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
