import * as $dara from '@darabonba/typescript';
export declare class GetAppPublishStatusResponseBodyModule extends $dara.Model {
    /**
     * @remarks
     * Indicates whether quick rollback is supported.
     *
     * @example
     * true
     */
    canQuickRevert?: string;
    /**
     * @remarks
     * The current step of the task.
     *
     * @example
     * PRE_CHECK
     */
    currentStep?: string;
    /**
     * @remarks
     * The code of the current publish step.
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
     * PC,WEAPP
     */
    deployChannel?: string;
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
     * The publish process.
     *
     * @example
     * abc
     */
    errorStep?: string;
    /**
     * @remarks
     * The code of the publish step where the error occurred.
     *
     * @example
     * BUILDING
     */
    errorStepCode?: string;
    /**
     * @remarks
     * Indicates whether the task is completed.
     */
    isFinish?: boolean;
    /**
     * @remarks
     * Indicates whether the call is successful. Valid values:
     * - `true`: The call is successful.
     * - `false`: The call failed.
     *
     * @example
     * True
     */
    isSuccess?: boolean;
    /**
     * @remarks
     * The additional description.
     *
     * @example
     * common notify successfully.
     */
    msg?: string;
    /**
     * @remarks
     * The sorting type, such as ASC or DESC.
     *
     * @example
     * DESC
     */
    orderType?: string;
    /**
     * @remarks
     * The code of the publish order type.
     *
     * @example
     * DEPLOY
     */
    orderTypeCode?: string;
    /**
     * @remarks
     * The completion percentage of the task.
     *
     * @example
     * 20
     */
    percent?: number;
    /**
     * @remarks
     * The publish number.
     *
     * @example
     * 123
     */
    publishNumber?: string;
    /**
     * @remarks
     * The publish order ID.
     *
     * @example
     * 123
     */
    publishOrderId?: number;
    /**
     * @remarks
     * The scheduled publish time in the UTC format yyyy-MM-dd\\"T\\"HH:mm:ss.SSS\\"Z\\".
     *
     * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
     *
     * @example
     * 123123
     */
    publishTime?: string;
    /**
     * @remarks
     * The site ID. You can obtain the site ID by calling the [ListSites](~~ListSites~~) operation.
     *
     * @example
     * 865181640657408
     */
    siteId?: string;
    /**
     * @remarks
     * The list of publish step codes.
     */
    stepCodes?: string[];
    /**
     * @remarks
     * The error level. Valid values: FATAL, ERROR, WARNING, and CRITICAL.
     */
    steps?: string[];
    /**
     * @remarks
     * The publish subchannel.
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
export declare class GetAppPublishStatusResponseBody extends $dara.Model {
    /**
     * @remarks
     * The detailed reason why access is denied.
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
     * The application name.
     *
     * @example
     * or
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
    module?: GetAppPublishStatusResponseBodyModule;
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
