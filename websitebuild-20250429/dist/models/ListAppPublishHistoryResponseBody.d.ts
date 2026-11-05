import * as $dara from '@darabonba/typescript';
export declare class ListAppPublishHistoryResponseBodyModuleHistory extends $dara.Model {
    /**
     * @remarks
     * Specifies whether quick rollback is supported.
     *
     * @example
     * true
     */
    canQuickRevert?: string;
    /**
     * @remarks
     * The commit hash of the code.
     *
     * @example
     * 890243d5977e74d80eebd4734f7b05f626f84cb1
     */
    commitHash?: string;
    /**
     * @remarks
     * The current step number.
     *
     * @example
     * PRE_CHECK
     */
    currentStep?: string;
    /**
     * @remarks
     * The code of the current release step.
     *
     * @example
     * INIT
     */
    currentStepCode?: string;
    /**
     * @remarks
     * The deployment channel.
     *
     * @example
     * PC
     */
    deployChannel?: string;
    /**
     * @remarks
     * The application description.
     *
     * @example
     * PSKB
     */
    description?: string;
    /**
     * @remarks
     * The release process.
     *
     * @example
     * error
     */
    errorStep?: string;
    /**
     * @remarks
     * The code of the release step where the error occurred.
     *
     * @example
     * BUILDING
     */
    errorStepCode?: string;
    /**
     * @remarks
     * Indicates whether the operation is completed.
     */
    isFinish?: boolean;
    /**
     * @remarks
     * Indicates whether the resource allocation for the financial unit is successful. Valid values:
     * - true: The allocation is successful.
     * - false: The allocation fails.
     *
     * @example
     * True
     */
    isSuccess?: boolean;
    /**
     * @remarks
     * The error message.
     *
     * @example
     * SUCCESS
     */
    msg?: string;
    /**
     * @remarks
     * The sort order. Valid values: ASC and DESC.
     *
     * @example
     * DESC
     */
    orderType?: string;
    /**
     * @remarks
     * The code of the release order type.
     *
     * @example
     * DEPLOY
     */
    orderTypeCode?: string;
    /**
     * @remarks
     * The transcoding progress.
     *
     * @example
     * true
     */
    percent?: number;
    /**
     * @remarks
     * The release number.
     *
     * @example
     * 123
     */
    publishNumber?: string;
    /**
     * @remarks
     * The release order ID.
     *
     * @example
     * 123
     */
    publishOrderId?: number;
    /**
     * @remarks
     * The release time in the UTC format yyyy-MM-dd\\"T\\"HH:mm:ss.SSS\\"Z\\".
     *
     * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
     *
     * @example
     * 2026
     */
    publishTime?: string;
    /**
     * @remarks
     * The list of release step codes.
     */
    stepCodes?: string[];
    /**
     * @remarks
     * The specific configurations of the component.
     */
    steps?: string[];
    /**
     * @remarks
     * The release sub-channel.
     *
     * @example
     * wx0123456789abcdef
     */
    subchannel?: string;
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
export declare class ListAppPublishHistoryResponseBodyModule extends $dara.Model {
    /**
     * @remarks
     * The ID of the current release order.
     *
     * @example
     * 123
     */
    currentPublishOrderId?: number;
    /**
     * @remarks
     * Specifies whether to display the history of applying alert templates to application groups. Valid values:
     * - true: Displayed.
     * - false: Not displayed. Default value: false.
     */
    history?: ListAppPublishHistoryResponseBodyModuleHistory[];
    /**
     * @remarks
     * The page number. Default value: 1.
     *
     * @example
     * 1
     */
    pageNum?: number;
    /**
     * @remarks
     * The page size.
     *
     * @example
     * 10
     */
    pageSize?: number;
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 0
     */
    total?: number;
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
export declare class ListAppPublishHistoryResponseBody extends $dara.Model {
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
     * The name of the frontend application.
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
     * The dynamic message. This parameter is not used and can be ignored.
     *
     * @example
     * abc
     */
    dynamicMessage?: string;
    /**
     * @remarks
     * The error parameters.
     */
    errorArgs?: any[];
    /**
     * @remarks
     * The maximum number of entries to return for a single query. Valid values: 10 to 100. Default value: 20.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The data table module. Valid values:
     * - ABTest: experiment data table
     * - ExperimentTool: experiment tool table
     * - DataDiagnosis: data diagnostics
     */
    module?: ListAppPublishHistoryResponseBodyModule;
    /**
     * @remarks
     * The token that is used to start the next query. If no next query exists, this parameter is empty.
     *
     * @example
     * 0l45bkwM022Dt+rOvPi/oQ==
     */
    nextToken?: string;
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
