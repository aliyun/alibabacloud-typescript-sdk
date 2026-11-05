import * as $dara from '@darabonba/typescript';
export declare class GetAgentCodePackageUploadUrlResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The expiration time of the upload URL.
     *
     * @example
     * 2026-10-22T00:10:00Z
     */
    expiresAt?: string;
    /**
     * @remarks
     * The HTTP headers required for direct upload.
     */
    headers?: {
        [key: string]: string;
    };
    /**
     * @remarks
     * The maximum compressed size of the code package.
     *
     * @example
     * 500000000
     */
    maxSize?: number;
    /**
     * @remarks
     * The temporary OSS URI of the code package.
     *
     * @example
     * oss://agentcore-platform-example/code-package-uploads/workspaces/ws-a1b2c3d4e5f6/550e8400-e29b-41d4-a716-446655440000/package.zip
     */
    sourceUri?: string;
    /**
     * @remarks
     * The HTTP method for direct upload.
     *
     * @example
     * PUT
     */
    uploadMethod?: string;
    /**
     * @remarks
     * The time-limited presigned upload URL.
     *
     * @example
     * https://agentcore-platform-example.oss-cn-hangzhou.aliyuncs.com/code-package-uploads/workspaces/ws-a1b2c3d4e5f6/550e8400-e29b-41d4-a716-446655440000/package.zip?OSSAccessKeyId=LTAI5tExample****&Expires=1792627800&Signature=ExampleSignature****
     */
    uploadUrl?: string;
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
export declare class GetAgentCodePackageUploadUrlResponseBody extends $dara.Model {
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
     * The response data.
     */
    data?: GetAgentCodePackageUploadUrlResponseBodyData;
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
