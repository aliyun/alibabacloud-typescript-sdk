import * as $dara from '@darabonba/typescript';
export declare class ListConnectorsResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The number of bound agents.
     *
     * @example
     * 3
     */
    boundAgentCount?: number;
    /**
     * @remarks
     * The time when the connector was enabled.
     *
     * @example
     * 2026-09-01T08:00:00Z
     */
    enabledAt?: string;
    /**
     * @remarks
     * The JSON string of the connector configuration, which may contain sensitive credentials after the connector is enabled.
     *
     * @example
     * {"site":"global","organizationId":"org-xxxx"}
     */
    metadata?: string;
    /**
     * @remarks
     * The connector name. The current value is qodercli.
     *
     * @example
     * qodercli
     */
    name?: string;
    /**
     * @remarks
     * The connector status.
     *
     * @example
     * ENABLED
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
export declare class ListConnectorsResponseBody extends $dara.Model {
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
     * The HTTP status code.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The connector list.
     */
    items?: ListConnectorsResponseBodyItems[];
    /**
     * @remarks
     * The number of connectors returned in the current response.
     *
     * @example
     * 10
     */
    maxResults?: number;
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
     * The next token. This field is not returned in the current version.
     *
     * @example
     * dGVzdA==
     */
    nextToken?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * request-123456
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request is successful.
     *
     * @example
     * true
     */
    success?: boolean;
    /**
     * @remarks
     * The total number of connectors returned.
     *
     * @example
     * 10
     */
    totalCount?: number;
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
