import * as $dara from '@darabonba/typescript';
export declare class CheckUserResourceMeasureResponseBodyModule extends $dara.Model {
    /**
     * @remarks
     * Returned only for APP_WORKSPACE: the target total for this check, which is the used quota in the saved configuration plus ResourceValue. If the compatible DesiredTotal is provided, this total is used directly. The used quota for questions is the sum of common and word-of-mouth questions in the saved configuration. The used quota for competitors is the number of competitors. This field is empty for APP and USER checks.
     *
     * @example
     * 21
     */
    desiredTotal?: number;
    /**
     * @remarks
     * The error code when the check fails. This field is null when the check passes.
     *
     * @example
     * Success
     */
    errorCode?: string;
    /**
     * @remarks
     * The error message when the check fails. This field is null when the check passes.
     *
     * @example
     * stream push failed
     */
    errorMessage?: string;
    /**
     * @remarks
     * Returned only for APP_WORKSPACE quantity dry runs: the maximum number of questions or competitors allowed by the current commodity edition, not the remaining quota. This field is empty for APP and USER checks or when the edition benefits cannot be determined.
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
     * Indicates whether a purchasable higher edition exists that can accommodate the DesiredTotal. This field is true only when the current edition capacity is insufficient and a higher edition meets the requirements. Otherwise, it is false. This field may be empty for APP and USER checks. This field does not indicate that an upgrade has been performed or an upgrade order has been created.
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
     * The detailed reason for access denial.
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
     * The name of the application.
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
     * The returned error arguments.
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
     * The root error code.
     *
     * @example
     * SYSTEM.ERROR
     */
    rootErrorCode?: string;
    /**
     * @remarks
     * The root error message.
     *
     * @example
     * System exception
     */
    rootErrorMsg?: string;
    /**
     * @remarks
     * The backup parameter.
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
