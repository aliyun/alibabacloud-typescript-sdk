import * as $dara from '@darabonba/typescript';
export declare class DescribeAccountsZonalResponseBodyAccountsDatabasePrivileges extends $dara.Model {
    /**
     * @remarks
     * The permissions of the account.
     *
     * @example
     * ReadOnly
     */
    accountPrivilege?: string;
    /**
     * @remarks
     * The name of the database.
     *
     * @example
     * DBtest
     */
    DBName?: string;
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
export declare class DescribeAccountsZonalResponseBodyAccounts extends $dara.Model {
    /**
     * @remarks
     * The description of the account.
     *
     * @example
     * test
     */
    accountDescription?: string;
    /**
     * @remarks
     * The lock status of the account. Valid values:
     *
     * - UnLock: The account is not locked.
     *
     * - Lock: The account is locked.
     *
     * @example
     * UnLock
     */
    accountLockState?: string;
    /**
     * @remarks
     * The name of the account.
     *
     * @example
     * test_acc
     */
    accountName?: string;
    /**
     * @remarks
     * The expiration time of the password.
     *
     * @example
     * undefined
     */
    accountPasswordValidTime?: string;
    /**
     * @remarks
     * The status of the account. Valid values:
     *
     * - Creating: The account is being created.
     *
     * - Available: The account is available.
     *
     * - Deleting: The account is being deleted.
     *
     * @example
     * Available
     */
    accountStatus?: string;
    /**
     * @remarks
     * The type of the account. Valid values:
     *
     * - Normal: standard account.
     *
     * - Super: privileged account.
     *
     * - ReadOnly: global read-only account.
     *
     * @example
     * Normal
     */
    accountType?: string;
    /**
     * @remarks
     * The details of the database permissions granted to the account.
     */
    databasePrivileges?: DescribeAccountsZonalResponseBodyAccountsDatabasePrivileges[];
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
export declare class DescribeAccountsZonalResponseBody extends $dara.Model {
    /**
     * @remarks
     * The details of the account information.
     */
    accounts?: DescribeAccountsZonalResponseBodyAccounts[];
    /**
     * @remarks
     * The maximum number of entries to return for this request.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The query token. Set the value to the NextToken value returned in the last API call. If no subsequent query is required, do not specify this parameter.
     *
     * @example
     * 212db86sca4384811e0b5e8707e******
     */
    nextToken?: string;
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries on the current page.
     *
     * @example
     * 1
     */
    pageRecordCount?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 155462B9-205F-4FFC-BB43-4855FE******
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
