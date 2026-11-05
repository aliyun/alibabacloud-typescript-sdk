import * as $dara from '@darabonba/typescript';
export declare class CreateAccessKeyResponseBodyAccessKey extends $dara.Model {
    /**
     * @remarks
     * The access key ID.
     *
     * @example
     * yourAccessKeyID
     */
    accessKeyId?: string;
    /**
     * @remarks
     * The access key.
     *
     * @example
     * yourAccessKeySecret
     */
    accessKeySecret?: string;
    /**
     * @remarks
     * The creation time of the access key. Format: RFC 3339 (UTC). Example: 2020-10-15T08:08:54Z.
     *
     * @example
     * 2020-10-15T08:08:54Z
     */
    createDate?: string;
    /**
     * @remarks
     * The status of the access key. Valid values:
     * - Active: Activated.
     * - Inactive: Disabled.
     *
     * @example
     * Active
     */
    status?: string;
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
export declare class CreateAccessKeyResponseBody extends $dara.Model {
    /**
     * @remarks
     * The access key.
     */
    accessKey?: CreateAccessKeyResponseBodyAccessKey;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 19DDD9F7-AFCC-4D72-8CBA-CCE5A142E7AB
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
