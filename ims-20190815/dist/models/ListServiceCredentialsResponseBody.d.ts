import * as $dara from '@darabonba/typescript';
export declare class ListServiceCredentialsResponseBodyServiceCredentials extends $dara.Model {
    /**
     * @remarks
     * The time when the service credential was created.
     *
     * Format: RFC 3339 (UTC). Example: 2026-05-07T05:49:57Z.
     *
     * @example
     * 2026-05-07T05:49:57Z
     */
    createTime?: string;
    /**
     * @remarks
     * The expiration time. This field is not returned for permanent service credentials.
     *
     * Format: RFC 3339 (UTC). Example: 2026-06-07T05:49:57Z.
     *
     * @example
     * 2026-06-07T05:49:57Z
     *
     * **if can be null:**
     * true
     */
    expirationTime?: string;
    /**
     * @remarks
     * The ID of the service credential.
     *
     * @example
     * SC*************
     */
    serviceCredentialId?: string;
    /**
     * @remarks
     * The name of the service credential.
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
     * The status of the service credential.
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
export declare class ListServiceCredentialsResponseBody extends $dara.Model {
    /**
     * @remarks
     * Indicates whether there is a next page.
     *
     * @example
     * true
     */
    isTruncated?: boolean;
    /**
     * @remarks
     * The maximum number of entries per page.
     *
     * @example
     * 20
     */
    maxResults?: number;
    /**
     * @remarks
     * The token used to retrieve the next page of results.
     *
     * @example
     * EXAMPLE*******
     */
    nextToken?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * D80A0F97-6F12-5CD1-A70A-77A03BF4CFC5
     */
    requestId?: string;
    /**
     * @remarks
     * The list of service credentials.
     */
    serviceCredentials?: ListServiceCredentialsResponseBodyServiceCredentials[];
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
