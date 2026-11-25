import * as $dara from '@darabonba/typescript';
export declare class CheckUserResourceMeasureResponseBodyModule extends $dara.Model {
    /**
     * @remarks
     * The target total for the current check. This parameter is returned only for APP_WORKSPACE. It is the sum of the used quota in the saved configuration and ResourceValue. If the compatible DesiredTotal is provided, this total is used directly. The used quota for questions is the sum of common and word-of-mouth questions in the saved configuration, and the used quota for competitors is the number of competitors. This parameter is empty for APP or USER checks.
     *
     * @example
     * 21
     */
    desiredTotal?: number;
    /**
     * @remarks
     * The error code returned when the check fails. This parameter is null when the check is passed.
     *
     * @example
     * Success
     */
    errorCode?: string;
    /**
     * @remarks
     * The error message returned when the check fails. This parameter is null when the check is passed.
     *
     * @example
     * stream push failed
     */
    errorMessage?: string;
    /**
     * @remarks
     * The maximum number of questions or competitors allowed by the current commodity version. This parameter is returned only for APP_WORKSPACE quantity dry runs and does not represent the remaining quota. This parameter is empty for APP or USER checks, or when the version benefits cannot be determined.
     *
     * @example
     * 20
     */
    limit?: number;
    /**
     * @remarks
     * Indicates whether the check is passed.
     *
     * @example
     * False
     */
    passed?: boolean;
    /**
     * @remarks
     * The resource code.
     *
     * @example
     * TransitRouterVpcAttachment
     */
    resourceCode?: string;
    /**
     * @remarks
     * Indicates whether a purchasable higher version exists that can accommodate the DesiredTotal. This parameter is true only when the current version capacity is insufficient and a higher version meets the requirements. Otherwise, it is false. This parameter may be empty for APP or USER checks. This field does not indicate that an upgrade has been performed or an upgrade order has been created.
     *
     * @example
     * true
     */
    upgradeAvailable?: boolean;
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
export declare class CheckUserResourceMeasureResponseBody extends $dara.Model {
    /**
     * @remarks
     * The detailed reasons for access denial.
     *
     * @example
     * {}
     */
    accessDeniedDetail?: string;
    /**
     * @remarks
     * Specifies whether retries are allowed. Valid values:
     * - false: Retries are not allowed.
     * - true: Retries are allowed.
     *
     * @example
     * False
     */
    allowRetry?: boolean;
    /**
     * @remarks
     * The application name, which is used to query the application.
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
     * The dynamic error message, which is used to replace `%s` in the **ErrMessage** response parameter.
     * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, it indicates that the **DtsJobId** request parameter is invalid.
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
    module?: CheckUserResourceMeasureResponseBodyModule;
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
