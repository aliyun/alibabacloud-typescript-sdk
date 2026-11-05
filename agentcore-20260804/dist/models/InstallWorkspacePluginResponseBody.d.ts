import * as $dara from '@darabonba/typescript';
export declare class InstallWorkspacePluginResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * Indicates whether the plugin is enabled.
     *
     * @example
     * false
     */
    enabled?: boolean;
    /**
     * @remarks
     * The plugin name.
     *
     * @example
     * collaboration
     */
    pluginName?: string;
    /**
     * @remarks
     * The plugin status. Valid values: DISABLED, ENABLING, ENABLED, ENABLE_FAILED, DISABLING, and DISABLE_FAILED.
     *
     * @example
     * ENABLING
     */
    status?: string;
    /**
     * @remarks
     * The workspace ID.
     *
     * @example
     * ws-123456
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
export declare class InstallWorkspacePluginResponseBody extends $dara.Model {
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
     * The details of the plugin installation operation.
     */
    data?: InstallWorkspacePluginResponseBodyData;
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
     * The response message. Returns an error description when the request fails.
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
