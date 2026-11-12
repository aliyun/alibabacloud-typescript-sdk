import * as $dara from '@darabonba/typescript';
export declare class ModifyAccountPasswordZonalRequest extends $dara.Model {
    /**
     * @remarks
     * The name of the account.
     *
     * This parameter is required.
     *
     * @example
     * testacc
     */
    accountName?: string;
    /**
     * @remarks
     * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can generate the value of this parameter on the client side. The value must be unique across different requests, case-sensitive, and up to 64 ASCII characters in length.
     *
     * @example
     * 6000170000591aed949d0f5********************
     */
    clientToken?: string;
    /**
     * @remarks
     * The ID of the edge cluster. This operation applies only to zonal edge clusters. You can obtain a valid ID by calling the DescribeDBClustersZonal operation. Standard PolarDB cluster IDs are not supported. For standard clusters, use the ModifyAccountPassword operation.
     *
     * This parameter is required.
     *
     * @example
     * pc-**************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The new password of the account. The password must meet the following requirements:
     * * Contains at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
     * * Is 8 to 32 characters in length.
     * * Special characters include `!@#$%^&*()_+-=`.
     *
     * This parameter is required.
     *
     * @example
     * Pw123456
     */
    newAccountPassword?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The type of the password.
     *
     * @example
     * Tair
     */
    passwordType?: string;
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
