import * as $dara from '@darabonba/typescript';
export declare class GetAppWorkspaceDirectoryResponseBodyModuleDirectoryList extends $dara.Model {
    /**
     * @remarks
     * The child content.
     */
    children?: any[];
    /**
     * @remarks
     * The full path relative to the workspace.
     *
     * @example
     * PolarDBInnoDBRedoLogWrites
     */
    key?: string;
    /**
     * @remarks
     * The name.
     *
     * @example
     * Evaluable=true
     */
    label?: string;
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
export declare class GetAppWorkspaceDirectoryResponseBodyModule extends $dara.Model {
    /**
     * @remarks
     * The current time.
     *
     * @example
     * 2026
     */
    currentTime?: string;
    /**
     * @remarks
     * The directory structure.
     */
    directoryList?: GetAppWorkspaceDirectoryResponseBodyModuleDirectoryList[];
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
export declare class GetAppWorkspaceDirectoryResponseBody extends $dara.Model {
    /**
     * @remarks
     * The detailed reason for access denial.
     *
     * @example
     * {}
     */
    accessDeniedDetail?: string;
    /**
     * @remarks
     * Indicates whether a retry is allowed.
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
     * ish-intelligence-store-platform-admin-web
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
     * The dynamic message. This parameter is not used and can be ignored.
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
     * The returned object.
     */
    module?: GetAppWorkspaceDirectoryResponseBodyModule;
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
