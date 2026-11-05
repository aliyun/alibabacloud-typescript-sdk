import * as $dara from '@darabonba/typescript';
export declare class ListUsersResponseBodyUsersUserTagsTag extends $dara.Model {
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
export declare class ListUsersResponseBodyUsersUserTags extends $dara.Model {
    tag?: ListUsersResponseBodyUsersUserTagsTag[];
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
export declare class ListUsersResponseBodyUsersUser extends $dara.Model {
    comments?: string;
    createDate?: string;
    displayName?: string;
    email?: string;
    lastLoginDate?: string;
    mobilePhone?: string;
    provisionType?: string;
    status?: string;
    tags?: ListUsersResponseBodyUsersUserTags;
    updateDate?: string;
    userId?: string;
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
export declare class ListUsersResponseBodyUsers extends $dara.Model {
    user?: ListUsersResponseBodyUsersUser[];
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
export declare class ListUsersResponseBody extends $dara.Model {
    /**
     * @remarks
     * Indicates whether the response is truncated. Valid values:
     *
     * - true
     *
     * - false
     *
     * @example
     * true
     */
    isTruncated?: boolean;
    /**
     * @remarks
     * The parameter that is used to obtain the truncated part. It takes effect only when `IsTruncated` is set to `true`.
     *
     * @example
     * EXAMPLE
     */
    marker?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 4B450CA1-36E8-4AA2-8461-86B42BF4CC4E
     */
    requestId?: string;
    users?: ListUsersResponseBodyUsers;
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
