import * as $dara from '@darabonba/typescript';
export declare class ConfirmAppInstanceRequest extends $dara.Model {
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
     * The client token that is used to ensure the idempotence of the request. Generate a unique value from your client. The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length.
     *
     * @example
     * 123456
     */
    clientToken?: string;
    /**
     * @remarks
     * The deployment region.
     *
     * @example
     * HongKong
     */
    deployArea?: string;
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
     * {\\"deliveryNodeName\\":\\"视觉设计确认\\",\\"deliveryNodeStatus\\":\\"Reject\\",\\"deliveryOperatorRole\\":\\"Customer\\"}
     */
    extend?: string;
    /**
     * @remarks
     * The payment type.
     *
     * @example
     * AUTO_PAY
     */
    paymentType?: string;
    /**
     * @remarks
     * Required. The unit of the subscription period. Valid values:
     * - Year: year
     * - Month: month
     * - Day: day
     * - Hour: hour.
     *
     * @example
     * Month
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
     * The website version.
     *
     * @example
     * Basic_Edition
     */
    siteVersion?: string;
    /**
     * @remarks
     * The business ID of the trial instance.
     *
     * @example
     * WS123456
     */
    trialBizId?: string;
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
