import * as $dara from '@darabonba/typescript';
export declare class GetServiceCredentialResponseBodyServiceCredential extends $dara.Model {
    /**
     * @remarks
     * The creation time.
     *
     * Format: RFC 3339 (UTC), for example, 2026-03-15T09:20:58Z.
     *
     * @example
     * 2026-03-15T09:20:58Z
     */
    createTime?: string;
    /**
     * @remarks
     * The expiration time.
     * This field is not returned for permanent service credentials.
     *
     * Format: RFC 3339 (UTC), for example, 2026-04-15T09:20:58Z.
     *
     * @example
     * 2026-04-15T09:20:58Z
     */
    expirationTime?: string;
    /**
     * @remarks
     * The service credential ID.
     *
     * @example
     * SC***************
     */
    serviceCredentialId?: string;
    /**
     * @remarks
     * The service credential name.
     *
     * @example
     * test
     */
    serviceCredentialName?: string;
    /**
     * @remarks
     * The Alibaba Cloud service name.
     *
     * @example
     * xxx.aliyuncs.com
     */
    serviceName?: string;
    /**
     * @remarks
     * The service credential status.
     *
     * @example
     * Active
     */
    status?: string;
    /**
     * @remarks
     * The logon name of the Resource Access Management (RAM) user.
     *
     * @example
     * test@example.onaliyun.com
     */
    userPrincipalName?: string;
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
export declare class GetServiceCredentialResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 66815255-7CCE-4759-AC37-9755794C3626
     */
    requestId?: string;
    /**
     * @remarks
     * The service credential information.
     */
    serviceCredential?: GetServiceCredentialResponseBodyServiceCredential;
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
