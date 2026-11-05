import * as $dara from '@darabonba/typescript';
export declare class DescribeDatabasesResponseBodyDatabasesDatabaseAccountsAccountPrivilegeInfo extends $dara.Model {
    account?: string;
    accountPrivilege?: string;
    accountPrivilegeDetail?: string;
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
    accountPrivilegeInfo?: DescribeDatabasesResponseBodyDatabasesDatabaseAccountsAccountPrivilegeInfo[];
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
export declare class DescribeDatabasesResponseBodyDatabasesDatabaseAdvancedInfo extends $dara.Model {
    advancedDbProperty?: {
        [key: string]: any;
    }[];
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
export declare class DescribeDatabasesResponseBodyDatabasesDatabaseBasicInfo extends $dara.Model {
    basicDbProperty?: {
        [key: string]: any;
    }[];
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
export declare class DescribeDatabasesResponseBodyDatabasesDatabaseRuntimeInfo extends $dara.Model {
    runtimeDbProperty?: {
        [key: string]: any;
    }[];
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
    advancedInfo?: DescribeDatabasesResponseBodyDatabasesDatabaseAdvancedInfo;
    basicInfo?: DescribeDatabasesResponseBodyDatabasesDatabaseBasicInfo;
    characterSetName?: string;
    collate?: string;
    connLimit?: string;
    ctype?: string;
    DBDescription?: string;
    DBInstanceId?: string;
    DBName?: string;
    DBStatus?: string;
    duckDBEnabled?: boolean;
    engine?: string;
    pageNumber?: number;
    pageSize?: number;
    runtimeInfo?: DescribeDatabasesResponseBodyDatabasesDatabaseRuntimeInfo;
    tablespace?: string;
    totalCount?: number;
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
     * The request ID.
     *
     * @example
     * 2603CA96-B17D-4903-BC04-61A2C829CD94
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
