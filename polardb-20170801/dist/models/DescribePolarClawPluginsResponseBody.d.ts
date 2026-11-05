import * as $dara from '@darabonba/typescript';
export declare class DescribePolarClawPluginsResponseBodyDiagnostics extends $dara.Model {
    /**
     * @remarks
     * The severity level. Valid values: `error` and `warn`.
     *
     * @example
     * warn
     */
    level?: string;
    /**
     * @remarks
     * The detailed diagnostic message.
     *
     * @example
     * loaded without install/load-path provenance; treat as untracked local code
     */
    message?: string;
    /**
     * @remarks
     * The ID of the associated plugin.
     *
     * @example
     * openclaw-lark
     */
    pluginId?: string;
    /**
     * @remarks
     * The source file path associated with the diagnostic.
     *
     * @example
     * /home/node/.openclaw/extensions/openclaw-lark/index.js
     */
    source?: string;
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
export declare class DescribePolarClawPluginsResponseBodyPlugins extends $dara.Model {
    /**
     * @remarks
     * A list of channel IDs, which can be empty.
     */
    channelIds?: string[];
    /**
     * @remarks
     * The description of the plugin.
     *
     * @example
     * Lark/Feishu channel plugin with im/doc/wiki/drive/task/calendar tools
     */
    description?: string;
    /**
     * @remarks
     * The error message, or `null` if no error occurred.
     *
     * @example
     * null
     */
    error?: string;
    /**
     * @remarks
     * The format of the plugin, which can be an empty string.
     *
     * @example
     * openclaw
     */
    format?: string;
    /**
     * @remarks
     * The plugin ID.
     *
     * @example
     * openclaw-lark
     */
    id?: string;
    /**
     * @remarks
     * The display name of the plugin.
     *
     * @example
     * Feishu
     */
    name?: string;
    /**
     * @remarks
     * The origin of the plugin. Valid values: `bundled`, `global`, and `user-install`.
     *
     * @example
     * global
     */
    origin?: string;
    /**
     * @remarks
     * A list of provider IDs, which can be empty.
     */
    providerIds?: string[];
    /**
     * @remarks
     * The file path to the plugin\\"s entry point.
     *
     * @example
     * /home/node/.openclaw/extensions/openclaw-lark/index.js
     */
    source?: string;
    /**
     * @remarks
     * The status of the plugin. Valid values: `loaded`, `disabled`, and `error`.
     *
     * @example
     * loaded
     */
    status?: string;
    /**
     * @remarks
     * The version number of the plugin.
     *
     * @example
     * 2026.4.7
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
export declare class DescribePolarClawPluginsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The application ID.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The response status code.
     *
     * @example
     * 200
     */
    code?: number;
    /**
     * @remarks
     * An array of diagnostic objects.
     */
    diagnostics?: DescribePolarClawPluginsResponseBodyDiagnostics[];
    /**
     * @remarks
     * The response message.
     *
     * @example
     * successful
     */
    message?: string;
    /**
     * @remarks
     * An array of plugin objects.
     */
    plugins?: DescribePolarClawPluginsResponseBodyPlugins[];
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 2281C6C9-CBAB-1AFD-8400-670750CF6025_2212
     */
    requestId?: string;
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
