import * as $dara from '@darabonba/typescript';
export declare class VerifyAgentCodePackageOssRamAuthorizationResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The policy binding status.
     *
     * @example
     * AUTHORIZED
     */
    authorizationStatus?: string;
    /**
     * @remarks
     * The name of the authorized source OSS bucket.
     *
     * @example
     * my-agent-bucket
     */
    ossBucketName?: string;
    /**
     * @remarks
     * The name of the workspace role selected by the backend.
     *
     * @example
     * AliyunAgentCoreWorkspace-ws-a1b2c3d4e5f6
     */
    roleName?: string;
    /**
     * @remarks
     * The workspace ID.
     *
     * @example
     * ws-a1b2c3d4e5f6
     */
    workspaceId?: string;
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
export declare class VerifyAgentCodePackageOssRamAuthorizationResponseBody extends $dara.Model {
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
    data?: VerifyAgentCodePackageOssRamAuthorizationResponseBodyData;
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
