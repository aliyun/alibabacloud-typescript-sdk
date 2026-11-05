import * as $dara from '@darabonba/typescript';
export declare class ListUsersInRecycleBinResponseBodyUsersUser extends $dara.Model {
    createDate?: string;
    deleteDate?: string;
    displayName?: string;
    recycleDate?: string;
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
export declare class ListUsersInRecycleBinResponseBodyUsers extends $dara.Model {
    user?: ListUsersInRecycleBinResponseBodyUsersUser[];
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
export declare class ListUsersInRecycleBinResponseBody extends $dara.Model {
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
     * 3687BD52-49FD-585B-AB14-CD05B7C76963
     */
    requestId?: string;
    users?: ListUsersInRecycleBinResponseBodyUsers;
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
