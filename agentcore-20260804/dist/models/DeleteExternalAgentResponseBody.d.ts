import * as $dara from '@darabonba/typescript';
export declare class DeleteExternalAgentResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The inbound access mode.
     *
     * @example
     * API_KEY
     */
    accessMode?: string;
    /**
     * @remarks
     * The user access scope.
     *
     * @example
     * ALL
     */
    accessScope?: string;
    /**
     * @remarks
     * The external agent ID.
     *
     * @example
     * agent-1
     */
    agentId?: string;
    /**
     * @remarks
     * The creation mode.
     *
     * @example
     * CUSTOM
     */
    createMode?: string;
    /**
     * @remarks
     * The creation time in RFC 3339 format.
     *
     * @example
     * 2026-01-01T00:00:00Z
     */
    createdAt?: string;
    /**
     * @remarks
     * The deployment type.
     *
     * @example
     * SELF_HOSTED
     */
    deployType?: string;
    /**
     * @remarks
     * The description of the external agent.
     *
     * @example
     * Code review agent running in the user environment
     */
    description?: string;
    /**
     * @remarks
     * The latest specification version number.
     *
     * @example
     * 1
     */
    latestSpecVersion?: number;
    /**
     * @remarks
     * The name of the external agent.
     *
     * @example
     * my-external-agent
     */
    name?: string;
    /**
     * @remarks
     * The runtime type reported by the external agent.
     *
     * @example
     * qwenpaw
     */
    runtime?: string;
    /**
     * @remarks
     * The status of the external agent. Valid values: Creating, Running, Failed, Updating, Deleting, and Deleted.
     *
     * @example
     * Running
     */
    status?: string;
    /**
     * @remarks
     * The update time in RFC 3339 format.
     *
     * @example
     * 2026-01-01T00:00:00Z
     */
    updatedAt?: string;
    /**
     * @remarks
     * The workspace ID.
     *
     * @example
     * ws-1
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
export declare class DeleteExternalAgentResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business status code. The value is SUCCESS when the request is successful.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The summary information of the deleted external agent.
     */
    data?: DeleteExternalAgentResponseBodyData;
    /**
     * @remarks
     * The HTTP status code. The value is 200 when the request is successful.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The request processing result message.
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
     * 1a2b3c4d-xxxx-xxxx-xxxx-xxxxxxxxxxxx
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
