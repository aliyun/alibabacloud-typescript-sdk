import * as $dara from '@darabonba/typescript';
export declare class ResetAccountPasswordRequest extends $dara.Model {
    /**
     * @remarks
     * The name of the database account.
     *
     * This parameter is required.
     *
     * @example
     * test1
     */
    accountName?: string;
    /**
     * @remarks
     * The new password.
     *
     * > * The password must be 8 to 32 characters in length.
     * > * The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
     * > * Special characters include `!@#$&%^*()_+-=`
     *
     * This parameter is required.
     *
     * @example
     * Test123456
     */
    accountPassword?: string;
    /**
     * @remarks
     * The instance ID. You can call DescribeDBInstances to obtain the instance ID.
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
