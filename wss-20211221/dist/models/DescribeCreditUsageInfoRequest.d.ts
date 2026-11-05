import * as $dara from '@darabonba/typescript';
export declare class DescribeCreditUsageInfoRequest extends $dara.Model {
    /**
     * @remarks
     * The business type.
     *
     * @example
     * BUSINESS
     */
    bizType?: string;
    /**
     * @remarks
     * The JSON string of the instance ID list. This parameter can be omitted when `UsageType` is set to `User`. Set it to the credit package instance ID when `UsageType` is `CreditPackage`, and the agent ID when `UsageType` is `Agent`.
     */
    instanceIds?: string[];
    /**
     * @remarks
     * The operator Scenarios type. Valid values:
     * - Not specified or NaturalMonthlyOwn: Natural monthly exclusive.
     * - JzYearlyShare: Jz annual shared.
     * - JzYearlyOwn: Jz annual exclusive.
     *
     * @example
     * JzYearlyShare
     */
    sceneType?: string;
    /**
     * @remarks
     * The usage type. Valid values:
     * - User: Returns the used amount, remaining amount, and consumption trend of the currently active credit packages for the user.
     * - CreditPackage: Requires a credit package ID. Returns the total amount and remaining amount of the specified credit package.
     * - Agent: Requires an agent ID. Returns the cumulative credit usage, cumulative allocated quota, and the percentage between the two.
     * - EndUser: Requires a Wuying ID. Returns the shared credit usage, pay-as-you-go credit usage, and total credit usage for the current period of the Wuying user.
     *
     * @example
     * User
     */
    usageType?: string;
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
