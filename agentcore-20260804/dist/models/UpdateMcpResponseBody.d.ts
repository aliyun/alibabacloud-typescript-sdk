import * as $dara from '@darabonba/typescript';
export declare class UpdateMcpResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The currently applied revision number of the virtual MCP.
     *
     * @example
     * 1
     */
    appliedRevision?: number;
    /**
     * @remarks
     * The ID of the MCP service updated in this request.
     *
     * @example
     * mcp-server-virtual-1
     */
    mcpServerId?: string;
    /**
     * @remarks
     * The ID of the most recent publish task for the virtual MCP.
     *
     * @example
     * task-1234567890
     */
    operationTaskId?: string;
    /**
     * @remarks
     * The target revision number of the virtual MCP.
     *
     * @example
     * 2
     */
    revision?: number;
    /**
     * @remarks
     * The resource status after the update is accepted. The UPDATING status does not indicate that the update has taken effect.
     *
     * @example
     * UPDATING
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
export declare class UpdateMcpResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business status code.
     *
     * @example
     * Success
     */
    code?: string;
    /**
     * @remarks
     * For the VIRTUAL type, the update status, revision number, and publish task ID are returned. For a standard MCP, the original empty data response is retained.
     */
    data?: UpdateMcpResponseBodyData;
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
     * Request processed successfully
     */
    message?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * A1B2C3D4-E5F6-47A8-90AB-CDEF12345678
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
