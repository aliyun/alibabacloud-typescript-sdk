import * as $dara from '@darabonba/typescript';
export declare class ListUsersForGroupResponseBodyUsersUser extends $dara.Model {
    displayName?: string;
    joinDate?: string;
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
export declare class ListUsersForGroupResponseBodyUsers extends $dara.Model {
    user?: ListUsersForGroupResponseBodyUsersUser[];
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
export declare class ListUsersForGroupResponseBody extends $dara.Model {
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
     * The pagination token that is used in the next request to retrieve a new page of results.
     *
     * > This parameter is returned only when `IsTruncated` is `true`.
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
     * 789FF581-B3C8-43A8-9115-54304B46D05C
     */
    requestId?: string;
    users?: ListUsersForGroupResponseBodyUsers;
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
