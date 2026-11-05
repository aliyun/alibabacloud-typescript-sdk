import * as $dara from '@darabonba/typescript';
export declare class CreateAppInstanceShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The application type.
     *
     * @example
     * PC_WebSite
     */
    applicationType?: string;
    /**
     * @remarks
     * Specifies whether to enable auto-renewal upon expiration.
     *
     * @example
     * false
     */
    autoRenew?: boolean;
    /**
     * @remarks
     * Ensures request idempotence. You can generate a parameter value from your client to ensure that the value is unique across different requests. The ClientToken parameter supports only ASCII characters and can be up to 64 characters in length.
     *
     * @example
     * 210713a117660695309606626a
     */
    clientToken?: string;
    /**
     * @remarks
     * The action.
     *
     * @example
     * OPEN_SUBSCRIPTION
     */
    createAction?: string;
    /**
     * @remarks
     * The deployment region.
     *
     * @example
     * ChineseMainland
     */
    deployArea?: string;
    /**
     * @remarks
     * The description of the website.
     *
     * @example
     * go-to-the-docks-for-french-fries
     */
    description?: string;
    /**
     * @remarks
     * Required. The number of subscription periods.
     *
     * @example
     * 1
     */
    duration?: number;
    /**
     * @remarks
     * The extended information.
     *
     * @example
     * {}
     */
    extend?: string;
    /**
     * @remarks
     * The name of the website.
     *
     * @example
     * docs
     */
    name?: string;
    /**
     * @remarks
     * The payment method.
     *
     * @example
     * AUTO_PAY
     */
    paymentType?: string;
    /**
     * @remarks
     * Required. The unit of the subscription period. Valid values: Year, Month, Day, and Hour.
     *
     * @example
     * Year
     */
    pricingCycle?: string;
    /**
     * @remarks
     * Required. The number of instances to purchase.
     *
     * @example
     * 1
     */
    quantity?: number;
    /**
     * @remarks
     * The ID of the resource group.
     *
     * @example
     * rg-aek2smovqqpvuly
     */
    resourceGroupId?: string;
    /**
     * @remarks
     * The website version.
     *
     * @example
     * Basic_Edition
     */
    siteVersion?: string;
    /**
     * @remarks
     * The list of tags.
     */
    tagsShrink?: string;
    /**
     * @example
     * 2023-09-01
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
