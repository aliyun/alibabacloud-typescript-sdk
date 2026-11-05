import * as $dara from '@darabonba/typescript';
export declare class GetAccessKeyLastUsedResponseBodyAccessKeyLastUsed extends $dara.Model {
    /**
     * @remarks
     * The last used time. Format: RFC 3339 (UTC). Example: 2020-10-16T01:37:37Z.
     *
     * @example
     * 2020-10-16T01:37:37Z
     */
    lastUsedDate?: string;
    /**
     * @remarks
     * The last used cloud service.
     *
     * @example
     * Ram
     */
    serviceName?: string;
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
export declare class GetAccessKeyLastUsedResponseBody extends $dara.Model {
    /**
     * @remarks
     * The last usage information of the access key.
     */
    accessKeyLastUsed?: GetAccessKeyLastUsedResponseBodyAccessKeyLastUsed;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * B29C79F6-354B-4297-A994-1338CC22A2EC
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
