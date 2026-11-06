import * as $dara from '@darabonba/typescript';
export declare class DescribePolarClawPluginsResponseBodyDiagnostics extends $dara.Model {
    /**
     * @remarks
     * The diagnostic level. Valid values: `error` and `warn`.
     *
     * @example
     * warn
     */
    level?: string;
    /**
     * @remarks
     * The details of the diagnostic message.
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
     * The path to the source file of the associated plugin.
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
     * The list of provided channel IDs. An empty array indicates that no channel IDs are available.
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
     * The error message. If this field is missing, no error occurred.
     *
     * @example
     * null
     */
    error?: string;
    /**
     * @remarks
     * The format of the plugin. This field can be an empty string.
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
     * The origin of the plugin. Valid values: `bundled` (built-in), `global` (global), and `user-install` (user-installed).
     *
     * @example
     * global
     */
    origin?: string;
    /**
     * @remarks
     * The list of provided provider IDs. An empty array indicates that no provider IDs are available.
     */
    providerIds?: string[];
    /**
     * @remarks
     * The path to the plugin entry file.
     *
     * @example
     * /home/node/.openclaw/extensions/openclaw-lark/index.js
     */
    source?: string;
    /**
     * @remarks
     * The status of the plugin. Valid values: `loaded` (loaded), `disabled` (disabled), and `error` (failed to load).
     *
     * @example
     * loaded
     */
    status?: string;
    /**
     * @remarks
     * The version number.
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
     * The list of diagnostic information.
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
     * The list of plugins.
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
