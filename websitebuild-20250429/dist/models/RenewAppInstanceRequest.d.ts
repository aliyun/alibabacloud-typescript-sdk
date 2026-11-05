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
     * The client token that is used to ensure the idempotence of the request. Generate a unique value from your client. The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length.
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
     * {\\"deliveryNodeName\\":\\"交付质检\\",\\"deliveryNodeStatus\\":\\"Finish\\",\\"deliveryOperatorRole\\":\\"Provider\\"}
     */
    extend?: string;
    /**
     * @remarks
     * The payment type.
     *
     * @example
     * PayAsYouGo
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
