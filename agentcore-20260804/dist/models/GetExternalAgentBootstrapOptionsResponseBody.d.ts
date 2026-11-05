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
     * The external agent ID.
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
     * The business status code. The value is SUCCESS when the request is successful.
     *
     * @example
     * SUCCESS
     */
    code?: string;
    /**
     * @remarks
     * The access network information available for the external agent.
     */
    data?: GetExternalAgentBootstrapOptionsResponseBodyData;
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
