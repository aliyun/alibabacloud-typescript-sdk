import * as $dara from '@darabonba/typescript';
export declare class CreateUserRequestTag extends $dara.Model {
    /**
     * @remarks
     * The tag key.
     *
     * Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
     *
     * @example
     * operator
     */
    key?: string;
    /**
     * @remarks
     * The tag value.
     *
     * Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot start with acs:. It cannot contain http:// or https://.
     *
     * @example
     * alice
     */
    value?: string;
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
export declare class CreateUserRequest extends $dara.Model {
    /**
     * @remarks
     * The description.
     *
     * The description must be 1 to 128 characters in length.
     *
     * @example
     * This is a cloud computing engineer.
     */
    comments?: string;
    /**
     * @remarks
     * The display name of the Resource Access Management (RAM) user.
     *
     * The display name must be 1 to 24 characters in length.
     *
     * This parameter is required.
     *
     * @example
     * test
     */
    displayName?: string;
    /**
     * @remarks
     * The electron mailbox of the Resource Access Management (RAM) user.
     * > This parameter is applicable only to the China site.
     *
     * @example
     * alice@example.com
     */
    email?: string;
    /**
     * @remarks
     * The mobile phone number of the Resource Access Management (RAM) user.
     *
     * Format: area code-phone number.
     *
     * > This parameter is applicable only to the China site.
     *
     * @example
     * 86-1868888****
     */
    mobilePhone?: string;
    /**
     * @remarks
     * The list of tags. A maximum of 20 tags can be added.
     */
    tag?: CreateUserRequestTag[];
    /**
     * @remarks
     * The logon Resource Access Management (RAM) user.
     *
     * The format is `<username>@<AccountAlias>.onaliyun.com`, where `<username>` is the Resource Access Management (RAM) user and `<AccountAlias>.onaliyun.com` is the default domain name. For more information about how to obtain the default domain name, see [GetDefaultDomain](https://help.aliyun.com/document_detail/186720.html).
     *
     * The UserPrincipalName parameter must be 1 to 128 characters in length and can contain letters, digits, periods (.), hyphens (-), and underscores (_). The `<username>` part must be 1 to 64 characters in length.
     *
     * This parameter is required.
     *
     * @example
     * Test@example.onaliyun.com
     */
    userPrincipalName?: string;
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
