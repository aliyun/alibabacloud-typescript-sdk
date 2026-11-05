import * as $dara from '@darabonba/typescript';
export declare class ModifyDBInstanceDescriptionRequest extends $dara.Model {
    /**
     * @remarks
     * The name of the ApsaraDB RDS instance.
     * >The name must be 2 to 64 characters in length.
     *
     * This parameter is required.
     *
     * @example
     * testInstance
     */
    DBInstanceDescription?: string;
    /**
     * @remarks
     * The instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceId?: string;
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
