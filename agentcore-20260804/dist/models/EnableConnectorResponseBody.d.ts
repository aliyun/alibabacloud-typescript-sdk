import * as $dara from '@darabonba/typescript';
export declare class EnableConnectorResponseBodyData extends $dara.Model {
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
     * The JSON string for the connector configuration. This is sensitive information.
     *
     * @example
     * {"site":"global","organizationId":"org-xxxx"}
     */
    metadata?: string;
    /**
     * @remarks
     * The connector name. Currently, the value is qodercli.
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
export declare class EnableConnectorResponseBody extends $dara.Model {
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
     * The connector details.
     */
    data?: EnableConnectorResponseBodyData;
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
