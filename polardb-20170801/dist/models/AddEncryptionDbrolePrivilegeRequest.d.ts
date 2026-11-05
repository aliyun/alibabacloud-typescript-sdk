import * as $dara from '@darabonba/typescript';
export declare class AddEncryptionDBRolePrivilegeRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * This parameter is required.
     *
     * @example
     * pc-******************
     */
    DBClusterId?: string;
    ownerAccount?: string;
    ownerId?: number;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The access policy for the role.
     *
     * @example
     * {"notEncryption":["alton"],"encryption":["alton01"]}
     */
    rolePrivilegeConfig?: string;
    /**
     * @remarks
     * The name of the role-based permission.
     *
     * @example
     * test
     */
    rolePrivilegeName?: string;
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
