import * as $dara from '@darabonba/typescript';
export declare class ListContextDatabaseMembersResponseBodyMembersKeys extends $dara.Model {
    /**
     * @remarks
     * The creation time.
     *
     * @example
     * 2026-05-28T17:59:55Z
     */
    createdAt?: string;
    /**
     * @remarks
     * The API key description.
     *
     * @example
     * data pipeline key
     */
    description?: string;
    /**
     * @remarks
     * This field is empty.
     *
     * @example
     * (null)
     */
    expiresAt?: string;
    /**
     * @remarks
     * The display suffix of the API key.
     *
     * @example
     * 33631c
     */
    keyDisplaySuffix?: string;
    /**
     * @remarks
     * The key ID.
     *
     * @example
     * 1
     */
    keyId?: number;
    /**
     * @remarks
     * The prefix of the API key.
     *
     * @example
     * ctxdb-
     */
    keyPrefix?: string;
    /**
     * @remarks
     * The time when the key was last used. This field is populated after the key is used for authentication and is empty for unused keys.
     *
     * @example
     * 2026-07-15T08:30:00Z
     */
    lastUsedAt?: string;
    /**
     * @remarks
     * The API key name.
     *
     * @example
     * my-key
     */
    name?: string;
    /**
     * @remarks
     * This field is empty.
     *
     * @example
     * (null)
     */
    revokedAt?: string;
    /**
     * @remarks
     * The API key status.
     *
     * @example
     * active
     */
    status?: string;
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
export declare class ListContextDatabaseMembersResponseBodyMembers extends $dara.Model {
    /**
     * @remarks
     * The creation time.
     *
     * @example
     * 2026-05-28T17:59:55Z
     */
    createdAt?: string;
    /**
     * @remarks
     * The list of API keys.
     */
    keys?: ListContextDatabaseMembersResponseBodyMembersKeys[];
    /**
     * @remarks
     * The member ID.
     *
     * @example
     * mb-cz51tnnp8****
     */
    memberId?: string;
    /**
     * @remarks
     * The member name.
     *
     * @example
     * Alice
     */
    memberName?: string;
    /**
     * @remarks
     * The member role.
     *
     * @example
     * admin
     */
    role?: string;
    /**
     * @remarks
     * The member status.
     *
     * @example
     * active
     */
    status?: string;
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
export declare class ListContextDatabaseMembersResponseBody extends $dara.Model {
    /**
     * @remarks
     * The maximum number of entries per page. This field is empty.
     *
     * @example
     * (null)
     */
    maxResults?: number;
    /**
     * @remarks
     * The list of members.
     */
    members?: ListContextDatabaseMembersResponseBodyMembers[];
    /**
     * @remarks
     * The pagination token for the next page. This field is empty.
     *
     * @example
     * (null)
     */
    nextToken?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * FE9C65D7-930F-57A5-A207-8C396329****
     */
    requestId?: string;
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
