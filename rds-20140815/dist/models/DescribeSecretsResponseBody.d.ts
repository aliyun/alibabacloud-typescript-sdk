import * as $dara from '@darabonba/typescript';
export declare class DescribeSecretsResponseBodySecrets extends $dara.Model {
    /**
     * @remarks
     * The Alibaba Cloud account ID.
     *
     * @example
     * 1266348003****
     */
    accountId?: string;
    /**
     * @remarks
     * The description of the credential provided by the user.
     *
     * @example
     * test
     */
    description?: string;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The user credential of the created Data API account.
     *
     * @example
     * acs:rds:cn-hangzhou:1335786****:dbInstance/rm-bp1m7l3j63****
     */
    secretArn?: string;
    /**
     * @remarks
     * The name of the user credential.
     *
     * @example
     * Foo
     */
    secretName?: string;
    /**
     * @remarks
     * The database username.
     *
     * @example
     * user_jack
     */
    username?: string;
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
export declare class DescribeSecretsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The page number of the query result.
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
     * DF4961DD-16F5-5B24-BD4C-0C7788F7ADAF
     */
    requestId?: string;
    /**
     * @remarks
     * The list of credential details.
     */
    secrets?: DescribeSecretsResponseBodySecrets[];
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
