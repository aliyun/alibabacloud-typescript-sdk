import * as $dara from '@darabonba/typescript';
export declare class RetryImageCacheRequestBody extends $dara.Model {
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
export declare class RetryImageCacheRequest extends $dara.Model {
    /**
     * @remarks
     * The request body, which is a fixed empty object {}. WorkspaceId is placed in the query. Do not pass Pool, role, Digest, or network.
     */
    body?: RetryImageCacheRequestBody;
    /**
     * @remarks
     * The client token. It is required and non-empty, and is reserved to keep the API compatible. This field does not currently deduplicate requests or recover original results. If a timeout occurs or the result is not confirmed, query the query cache status first before deciding whether to commit again.
     *
     * This parameter is required.
     *
     * @example
     * 550e8400-e29b-41d4-a716-446655440000
     */
    clientToken?: string;
    /**
     * @remarks
     * The product entry region, which is determined by the selected region endpoint.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The current routed workspace. The server verifies the account, region, and resource ownership. This parameter cannot be omitted or used to access other workspaces.
     *
     * This parameter is required.
     *
     * @example
     * ws-example
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
