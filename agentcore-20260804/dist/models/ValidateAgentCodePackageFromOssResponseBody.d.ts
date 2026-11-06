import * as $dara from '@darabonba/typescript';
export declare class ValidateAgentCodePackageFromOssResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The file name of the original code package.
     *
     * @example
     * main.zip
     */
    fileName?: string;
    /**
     * @remarks
     * The compressed file size of the code package, in bytes.
     *
     * @example
     * 123
     */
    fileSize?: number;
    /**
     * @remarks
     * The format of the code package.
     *
     * @example
     * zip
     */
    format?: string;
    /**
     * @remarks
     * The OSS URI of the customer source code package.
     *
     * @example
     * oss://my-agent-bucket/packages/main.zip
     */
    sourceUri?: string;
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
export declare class ValidateAgentCodePackageFromOssResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business status code.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The returned result.
     */
    data?: ValidateAgentCodePackageFromOssResponseBodyData;
    /**
     * @remarks
     * The HTTP status code.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The response message.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 550e8400-e29b-41d4-a716-446655440000
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request is successful.
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
