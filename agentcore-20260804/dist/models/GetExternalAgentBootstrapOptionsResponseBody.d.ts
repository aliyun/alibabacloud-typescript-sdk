import * as $dara from '@darabonba/typescript';
export declare class GetExternalAgentBootstrapOptionsResponseBodyDataNetworkOptions extends $dara.Model {
    /**
     * @remarks
     * Indicates whether the access network is available.
     */
    available?: boolean;
    /**
     * @remarks
     * The access network type. Valid values: INTRANET (internal network) and INTERNET (public network).
     *
     * @example
     * INTERNET
     */
    networkType?: string;
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
export declare class GetExternalAgentBootstrapOptionsResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The ID of the managed agent.
     *
     * @example
     * agent-1
     */
    agentId?: string;
    /**
     * @remarks
     * The list of available access networks.
     */
    networkOptions?: GetExternalAgentBootstrapOptionsResponseBodyDataNetworkOptions[];
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
export declare class GetExternalAgentBootstrapOptionsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business status code. The value is SUCCESS for a successful request.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The available access network information for the managed agent.
     */
    data?: GetExternalAgentBootstrapOptionsResponseBodyData;
    /**
     * @remarks
     * The HTTP status code. The value is 200 for a successful request.
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
