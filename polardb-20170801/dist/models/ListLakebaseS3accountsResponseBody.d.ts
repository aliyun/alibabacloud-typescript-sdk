import * as $dara from '@darabonba/typescript';
export declare class ListLakebaseS3AccountsResponseBodyS3Accounts extends $dara.Model {
    /**
     * @remarks
     * The account type. Valid values:
     * - default: the built-in default account.
     * - user: a user-created account.
     *
     * @example
     * default
     */
    accountType?: string;
    /**
     * @remarks
     * The AccessKey ID of the S3 account.
     *
     * @example
     * accname
     */
    userAccAk?: string;
    /**
     * @remarks
     * The AccessKey secret of the S3 account (masked).
     *
     * @example
     * password***
     */
    userAccSk?: string;
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
export declare class ListLakebaseS3AccountsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The current page number.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page.
     *
     * @example
     * 10
     */
    pageSize?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 925B84D9-CA72-432C-95CF-738C22******
     */
    requestId?: string;
    /**
     * @remarks
     * The S3 accounts.
     */
    s3Accounts?: ListLakebaseS3AccountsResponseBodyS3Accounts[];
    /**
     * @remarks
     * The total number of accounts.
     *
     * @example
     * 6
     */
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
