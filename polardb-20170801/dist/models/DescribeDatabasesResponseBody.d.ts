import * as $dara from '@darabonba/typescript';
export declare class DescribeDatabasesResponseBodyDatabasesDatabaseAccountsAccount extends $dara.Model {
    accountName?: string;
    accountPrivilege?: string;
    accountStatus?: string;
    privilegeStatus?: string;
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
export declare class DescribeDatabasesResponseBodyDatabasesDatabaseAccounts extends $dara.Model {
    account?: DescribeDatabasesResponseBodyDatabasesDatabaseAccountsAccount[];
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
export declare class DescribeDatabasesResponseBodyDatabasesDatabase extends $dara.Model {
    accounts?: DescribeDatabasesResponseBodyDatabasesDatabaseAccounts;
    characterSetName?: string;
    DBDescription?: string;
    DBName?: string;
    DBStatus?: string;
    engine?: string;
    masterID?: string;
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
export declare class DescribeDatabasesResponseBodyDatabases extends $dara.Model {
    database?: DescribeDatabasesResponseBodyDatabasesDatabase[];
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
export declare class DescribeDatabasesResponseBody extends $dara.Model {
    databases?: DescribeDatabasesResponseBodyDatabases;
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
     * The number of entries returned on the current page.
     *
     * @example
     * 1
     */
    pageRecordCount?: number;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * E1DF8CA6-2300-448B-9ABF-760C4B******
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
