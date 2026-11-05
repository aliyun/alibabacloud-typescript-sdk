import * as $dara from '@darabonba/typescript';
export declare class GetAppPluginResponseBodyModule extends $dara.Model {
    /**
     * @remarks
     * The category.
     *
     * @example
     * Archive
     */
    category?: string;
    /**
     * @remarks
     * The configuration form in React JSON Schema format.
     *
     * @example
     * ***
     */
    configItems?: string;
    /**
     * @remarks
     * The creator.
     *
     * @example
     * adminSubuser(264859988988056208)
     */
    createdBy?: string;
    /**
     * @remarks
     * The application description.
     *
     * @example
     * /bak->serverless.handler(2020091300200279)
     */
    description?: string;
    /**
     * @remarks
     * The image display mode. Valid values:
     *
     * - **0** (None): The image is not displayed.
     * - **1** (Always): The image is always displayed.
     *
     * @example
     * always
     */
    display?: number;
    /**
     * @remarks
     * Indicates whether scheduled delivery of resource snapshots is enabled. Valid values:
     *
     * - true: Enabled.
     * - false: Disabled.
     *
     * @example
     * True
     */
    enabled?: number;
    /**
     * @remarks
     * The extended information.
     *
     * @example
     * {"deliveryNodeName":"Bind domain name and publish","deliveryNodeStatus":"Finish","deliveryOperatorRole":"Provider"}
     */
    extend?: string;
    /**
     * @remarks
     * The version number.
     *
     * @example
     * v0.1.0
     */
    gitRef?: string;
    /**
     * @remarks
     * The creation time.
     *
     * @example
     * 1740479834
     */
    gmtCreate?: string;
    /**
     * @remarks
     * The modification time.
     *
     * @example
     * 2025-08-28T02:25:41Z
     */
    gmtModified?: string;
    /**
     * @remarks
     * The hook definitions.
     *
     * @example
     * []
     */
    hooks?: string;
    /**
     * @remarks
     * The popularity.
     *
     * @example
     * 1
     */
    hotCount?: number;
    /**
     * @remarks
     * The plugin description.
     *
     * @example
     * @lALPM2AwTOg9IUHNAUDNAUA
     */
    icon?: string;
    /**
     * @remarks
     * The ID of the associated API gateway plugin.
     *
     * @example
     * 1bae9ceaceea432d91c7069fab0dfc02
     */
    pluginId?: string;
    /**
     * @remarks
     * The name of the plugin. The name must be 4 to 50 characters in length and can contain uppercase and lowercase letters, Chinese characters, digits, and underscores (_). It cannot start with an underscore.
     *
     * @example
     * tf_testaccapigatewayplugin29311
     */
    pluginName?: string;
    /**
     * @remarks
     * The URL of the image repository.
     *
     * @example
     * xxx
     */
    repositoryUrl?: string;
    /**
     * @remarks
     * The skill header information for model selection.
     *
     * @example
     * header
     */
    skillHeader?: string;
    /**
     * @remarks
     * trial,draft,live,refunded,expired,released
     *
     * @example
     * NORMAL
     */
    status?: string;
    /**
     * @remarks
     * The category tags.
     *
     * @example
     * [{\\"Key\\": \\"kubernetes.io/cluster-id\\", \\"Value\\": \\"cc67198b13db948c9848599654da5586e\\"}, {\\"Key\\": \\"created-by\\", \\"Value\\": \\"alibabacloud-imagecache-controller\\"}]
     */
    tags?: string;
    /**
     * @remarks
     * The version of the application instance.
     *
     * @example
     * 2019-04-02
     */
    version?: string;
    /**
     * @remarks
     * **The visibility level.**
     *
     * @example
     * PRIVATE
     */
    visibility?: string;
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
export declare class GetAppPluginResponseBody extends $dara.Model {
    /**
     * @remarks
     * The detailed reason for the access denial.
     *
     * @example
     * {}
     */
    accessDeniedDetail?: string;
    /**
     * @remarks
     * Indicates whether retries are allowed.
     *
     * @example
     * False
     */
    allowRetry?: boolean;
    /**
     * @remarks
     * The name of the application.
     *
     * @example
     * dewuApp
     */
    appName?: string;
    /**
     * @remarks
     * The dynamic error code.
     *
     * @example
     * ERROR-oo1
     */
    dynamicCode?: string;
    /**
     * @remarks
     * The dynamic error message, which is used to replace `%s` in the error message returned by the **ErrMessage** parameter.
     * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the request parameter **DtsJobId** is invalid.
     *
     * @example
     * SYSTEM_ERROR
     */
    dynamicMessage?: string;
    /**
     * @remarks
     * The returned error parameters.
     */
    errorArgs?: any[];
    /**
     * @remarks
     * The application module.
     */
    module?: GetAppPluginResponseBodyModule;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 6C6B99AC-39EC-5350-874C-204128C905E6
     */
    requestId?: string;
    /**
     * @remarks
     * The error code.
     *
     * @example
     * SYSTEM.ERROR
     */
    rootErrorCode?: string;
    /**
     * @remarks
     * The exception message.
     *
     * @example
     * System exception
     */
    rootErrorMsg?: string;
    /**
     * @remarks
     * The reserved parameter.
     *
     * @example
     * True
     */
    synchro?: boolean;
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
