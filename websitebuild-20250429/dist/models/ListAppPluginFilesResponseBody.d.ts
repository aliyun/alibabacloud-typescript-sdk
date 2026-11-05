import * as $dara from '@darabonba/typescript';
export declare class ListAppPluginFilesResponseBodyModuleFiles extends $dara.Model {
    /**
     * @remarks
     * The file content returned when POP displays SKILL.md.
     *
     * @example
     * domain cnamen
     */
    content?: string;
    /**
     * @remarks
     * The file path.
     *
     * @example
     * /
     */
    filePath?: string;
    /**
     * @remarks
     * blob / tree
     *
     * @example
     * baidu
     */
    fileType?: string;
    /**
     * @remarks
     * The number of returned results. Default value: 10.
     *
     * @example
     * 5
     */
    size?: number;
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
export declare class ListAppPluginFilesResponseBodyModule extends $dara.Model {
    /**
     * @remarks
     * The task execution progress.
     */
    files?: ListAppPluginFilesResponseBodyModuleFiles[];
    /**
     * @remarks
     * The application instance version.
     *
     * @example
     * 2019-04-02
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
export declare class ListAppPluginFilesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The details of the access denial.
     *
     * @example
     * {}
     */
    accessDeniedDetail?: string;
    /**
     * @remarks
     * Specifies whether retries are allowed.
     *
     * @example
     * False
     */
    allowRetry?: boolean;
    /**
     * @remarks
     * The application name.
     *
     * @example
     * spring-cloud-b
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
     * The dynamic message.
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
     * The response data.
     */
    module?: ListAppPluginFilesResponseBodyModule;
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
