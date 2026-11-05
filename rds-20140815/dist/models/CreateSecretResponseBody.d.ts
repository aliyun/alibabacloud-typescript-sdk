import * as $dara from '@darabonba/typescript';
export declare class CreateSecretResponseBody extends $dara.Model {
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
     * The ARN of the created Data API user credential.
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
     * Indicates whether the request is successful. Valid values:
     *
     * - **true**: The request is successful.
     * - **false**: The request fails.
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
