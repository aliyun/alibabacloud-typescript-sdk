import * as $dara from '@darabonba/typescript';
export declare class RenewAppInstanceRequest extends $dara.Model {
    /**
     * @remarks
     * The business ID.
     *
     * @example
     * WD20250718165839000001
     */
    bizId?: string;
    /**
     * @remarks
     * The client token that is used to ensure request idempotence. You can generate the value from your client and make sure that it is unique across different requests. The token can only contain ASCII characters and cannot exceed 64 characters in length.
     *
     * @example
     * fdfjafdfadfenjeora
     */
    clientToken?: string;
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
     * {\"deliveryNodeName\":\"Delivery quality inspection\",\"deliveryNodeStatus\":\"Finish\",\"deliveryOperatorRole\":\"Provider\"}
     */
    extend?: string;
    /**
     * @remarks
     * The payment method.
     *
     * @example
     * PayAsYouGo
     */
    paymentType?: string;
    /**
     * @remarks
     * Required. The unit of the subscription period. Valid values: Year, Month, Day, and Hour.
     *
     * @example
     * Month
     */
    pricingCycle?: string;
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
