import * as $dara from '@darabonba/typescript';
export declare class ListContextDatabaseSyncPluginsResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The authorization method.
     *
     * @example
     * {"kind":"oauth","phases":["discovery"]}
     */
    authorization?: string;
    /**
     * @remarks
     * The display name.
     *
     * @example
     * R&D team DingTalk data source
     */
    displayName?: string;
    /**
     * @remarks
     * The icon.
     *
     * @example
     * /icons/dingtalk.svg
     */
    icon?: string;
    /**
     * @remarks
     * The plugin ID.
     *
     * @example
     * dingtalk
     */
    id?: string;
    /**
     * @remarks
     * The plugin type. This operation returns only plugins of the source type.
     *
     * @example
     * source
     */
    kind?: string;
    /**
     * @remarks
     * The datasource config template (JSON character string, structure varies depending on the plugin).
     *
     * @example
     * {"hint":"Select import scope","fields":[{"key":"folderIds","type":"string-list","label":"Folder / document scope"}]}
     */
    sourceConfig?: string;
    /**
     * @remarks
     * The version.
     *
     * @example
     * 1.0.0
     */
    version?: string;
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
export declare class ListContextDatabaseSyncPluginsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The status code.
     *
     * @example
     * success
     */
    code?: string;
    /**
     * @remarks
     * The query results.
     */
    data?: ListContextDatabaseSyncPluginsResponseBodyData[];
    /**
     * @remarks
     * The HTTP status code.
     *
     * @example
     * 1
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The returned message.
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
     * FE9C65D7-930F-57A5-A207-8C396329****
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
