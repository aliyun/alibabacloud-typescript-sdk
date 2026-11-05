import * as $dara from '@darabonba/typescript';
export declare class DescribeAccountsResponseBodyAccountsDatabasePrivileges extends $dara.Model {
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
     * The database name.
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
export declare class DescribeAccountsResponseBodyAccounts extends $dara.Model {
    /**
     * @remarks
     * The description of the database account.
     *
     * @example
     * test
     */
    accountDescription?: string;
    /**
     * @remarks
     * The lock status of the account. Valid values:
     *
     * - **UnLock**: The account is not locked.
     *
     * - **Lock**: The account is locked.
     *
     * @example
     * UnLock
     */
    accountLockState?: string;
    /**
     * @remarks
     * The name of the database account.
     *
     * @example
     * test_acc
     */
    accountName?: string;
    /**
     * @remarks
     * The validity period of the password.
     *
     * @example
     * undefined
     */
    accountPasswordValidTime?: string;
    /**
     * @remarks
     * The status of the database account. Valid values:
     *
     * - **Creating**: The account is being created.
     *
     * - **Available**: The account is available.
     *
     * - **Deleting**: The account is being deleted.
     *
     * @example
     * Available
     */
    accountStatus?: string;
    /**
     * @remarks
     * The type of the account. Valid values:
     *
     * - **Normal**: standard account.
     *
     * - **Super**: privileged account.
     *
     * - **ReadOnly**: global read-only account.
     *
     * @example
     * Normal
     */
    accountType?: string;
    /**
     * @remarks
     * The list of database permissions that are granted to the account.
     */
    databasePrivileges?: DescribeAccountsResponseBodyAccountsDatabasePrivileges[];
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
export declare class DescribeAccountsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The details of the account.
     */
    accounts?: DescribeAccountsResponseBodyAccounts[];
    /**
     * @remarks
     * The page number. Pages start from page 1.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries returned per page.
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
