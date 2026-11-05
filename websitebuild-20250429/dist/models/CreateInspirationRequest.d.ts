import * as $dara from '@darabonba/typescript';
export declare class CreateInspirationRequest extends $dara.Model {
    /**
     * @remarks
     * The specification of the resource plan.
     *
     * @example
     * 1000
     */
    amountspec?: string;
    /**
     * @remarks
     * The idempotency token.
     *
     * @example
     * 111
     */
    clientToken?: string;
    /**
     * @remarks
     * The subscription duration.
     *
     * @example
     * 1
     */
    duration?: number;
    /**
     * @remarks
     * The extended information in JSON format.
     *
     * @example
     * {}
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
     * The unit of the subscription cycle. Valid values:
     * - Year: year
     * - Month: month
     * - Day: day
     * - Hour: hour
     *
     * @example
     * Month
     */
    pricingCycle?: string;
    /**
     * @remarks
     * The number of instances to subscribe to.
     *
     * @example
     * 1
     */
    quantity?: number;
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
