import * as $dara from '@darabonba/typescript';
export declare class CreateUserResponseBodyUserTagsTag extends $dara.Model {
    tagKey?: string;
    tagValue?: string;
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
export declare class CreateUserResponseBodyUserTags extends $dara.Model {
    tag?: CreateUserResponseBodyUserTagsTag[];
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
export declare class CreateUserResponseBodyUser extends $dara.Model {
    /**
     * @remarks
     * The description.
     *
     * @example
     * This is a cloud computing engineer.
     */
    comments?: string;
    /**
     * @remarks
     * The creation time of the Resource Access Management (RAM) user.
     *
     * Format: RFC 3339 (UTC), such as 2020-10-12T09:12:00Z.
     *
     * @example
     * 2020-10-12T09:12:00Z
     */
    createDate?: string;
    /**
     * @remarks
     * The display name of the Resource Access Management (RAM) user.
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
     * The time of the last logon to the console by the Resource Access Management (RAM) user.
     *
     * Format: RFC 3339 (UTC), such as 2020-10-12T09:12:00Z.
     *
     * @example
     * 2020-10-12T09:12:00Z
     */
    lastLoginDate?: string;
    /**
     * @remarks
     * The mobile phone number of the Resource Access Management (RAM) user.
     * > This parameter is applicable only to the China site.
     *
     * @example
     * 86-1868888****
     */
    mobilePhone?: string;
    /**
     * @remarks
     * The provision type. Valid values:
     * - Manual: The Resource Access Management (RAM) user is manually created in RAM.
     * - SCIM: The Resource Access Management (RAM) user is created through the System for Cross-domain Identity Management protocol.
     * - CloudSSO: The user is created through CloudSSO synchronization.
     *
     * @example
     * Manual
     */
    provisionType?: string;
    tags?: CreateUserResponseBodyUserTags;
    /**
     * @remarks
     * The update time of the Resource Access Management (RAM) user.
     *
     * Format: RFC 3339 (UTC), such as 2020-10-12T09:12:00Z.
     *
     * @example
     * 2020-10-12T09:12:00Z
     */
    updateDate?: string;
    /**
     * @remarks
     * The ID of the Resource Access Management (RAM) user.
     *
     * @example
     * 20732900249392****
     */
    userId?: string;
    /**
     * @remarks
     * The logon name of the Resource Access Management (RAM) user.
     *
     * @example
     * test@example.onaliyun.com
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
export declare class CreateUserResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 2BB8C44A-2862-4922-AD43-03924749173B
     */
    requestId?: string;
    /**
     * @remarks
     * The Resource Access Management (RAM) user information.
     */
    user?: CreateUserResponseBodyUser;
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
