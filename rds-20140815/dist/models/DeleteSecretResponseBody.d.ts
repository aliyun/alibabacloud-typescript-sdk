import * as $dara from '@darabonba/typescript';
export declare class DeleteSecretResponseBody extends $dara.Model {
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
     * The user credential of the Data API account.
     *
     * @example
     * acs:rds:cn-hangzhou:1335786***:dbInstance/rm-bp1m7l3j63****
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
     * Indicates whether the request was successful. Valid values:
     *
     * - **true**: The request was successful.
     * - **false**: The request failed.
     *
     * @example
     * true
     */
    success?: boolean;
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
