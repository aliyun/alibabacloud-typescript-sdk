import * as $dara from '@darabonba/typescript';
export declare class ModuleResultsValue extends $dara.Model {
    /**
     * @remarks
     * Returned only for APP_WORKSPACE. This parameter indicates the target total quantity for this check, which is the used quantity in the saved configuration plus the ResourceValue. If a compatible DesiredTotal is provided, this total quantity is used directly. The used quantity for issues is the sum of normal and word-of-mouth issues in the saved configuration, and the used quantity for competitors is the number of competitors. This parameter is empty for APP and USER checks.
     *
     * @example
     * 21
     */
    desiredTotal?: number;
    /**
     * @remarks
     * The error code when the check fails. This parameter is null when the check passes.
     *
     * @example
     * Resource.Control.No.Usage
     */
    errorCode?: string;
    /**
     * @remarks
     * The error message when the check fails. This parameter is null when the check passes.
     *
     * @example
     * Quota exhausted
     */
    errorMessage?: string;
    /**
     * @remarks
     * Returned only for APP_WORKSPACE quantity pre-checks. This parameter indicates the maximum number of issues or competitors allowed by the current commodity version, not the remaining quota. This parameter is empty for APP and USER checks or when the version benefits cannot be determined.
     *
     * @example
     * 20
     */
    limit?: number;
    /**
     * @remarks
     * Indicates whether the check passed.
     *
     * @example
     * true
     */
    passed?: boolean;
    /**
     * @remarks
     * The resource identifier.
     *
     * @example
     * InspirationTokens
     */
    resourceCode?: string;
    /**
     * @remarks
     * Indicates whether a purchasable higher version exists that can accommodate the DesiredTotal. This parameter is true only when the capacity of the current version is insufficient and a higher version meets the requirements. Otherwise, this parameter is false. This parameter may be empty for APP and USER checks. This field does not indicate that an upgrade has been performed or an upgrade order has been created.
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
