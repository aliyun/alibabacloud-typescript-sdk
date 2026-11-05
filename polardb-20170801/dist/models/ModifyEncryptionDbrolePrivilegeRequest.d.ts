import * as $dara from '@darabonba/typescript';
export declare class ModifyEncryptionDBRolePrivilegeRequest extends $dara.Model {
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
    ownerAccount?: string;
    ownerId?: number;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The role access policy.
     *
     * @example
     * {"notEncryption":["alton"],"encryption":["alton01"]}
     */
    rolePrivilegeConfig?: string;
    /**
     * @remarks
     * The role permission name.
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
