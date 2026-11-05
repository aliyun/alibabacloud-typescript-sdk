import * as $dara from '@darabonba/typescript';
export declare class DeleteContextDatabaseMemberResponseBodyKeys extends $dara.Model {
    /**
     * @remarks
     * The time when the API key was created. This field is empty.
     *
     * @example
     * (null)
     */
    createdAt?: string;
    /**
     * @remarks
     * The API key description. This field is empty.
     *
     * @example
     * (null)
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
     * The suffix of the API key. This field is empty.
     *
     * @example
     * (null)
     */
    keyDisplaySuffix?: string;
    /**
     * @remarks
     * The key ID. This field is empty.
     *
     * @example
     * (null)
     */
    keyId?: number;
    /**
     * @remarks
     * The prefix of the API key. This field is empty.
     *
     * @example
     * (null)
     */
    keyPrefix?: string;
    /**
     * @remarks
     * This field is empty.
     *
     * @example
     * (null)
     */
    lastUsedAt?: string;
    /**
     * @remarks
     * The API key name. This field is empty.
     *
     * @example
     * (null)
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
     * The API key status. This field is empty.
     *
     * @example
     * (null)
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
export declare class DeleteContextDatabaseMemberResponseBody extends $dara.Model {
    /**
     * @remarks
     * The time when the member was created.
     *
     * @example
     * 2026-05-28T17:59:55Z
     */
    createdAt?: string;
    /**
     * @remarks
     * The API key details. An empty array is returned.
     */
    keys?: DeleteContextDatabaseMemberResponseBodyKeys[];
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
     * The request ID.
     *
     * @example
     * FE9C65D7-930F-57A5-A207-8C396329****
     */
    requestId?: string;
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
     * deleted
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
