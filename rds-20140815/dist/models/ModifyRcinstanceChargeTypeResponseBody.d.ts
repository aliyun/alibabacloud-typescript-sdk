import * as $dara from '@darabonba/typescript';
export declare class ModifyRCInstanceChargeTypeResponseBodyFeeOfInstances extends $dara.Model {
    /**
     * @remarks
     * The reserved parameter. This parameter is not supported.
     *
     * @example
     * None
     */
    currency?: string;
    /**
     * @remarks
     * The reserved parameter. This parameter is not supported.
     *
     * @example
     * None
     */
    fee?: string;
    /**
     * @remarks
     * The reserved parameter. This parameter is not supported.
     *
     * @example
     * None
     */
    instanceId?: string;
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
export declare class ModifyRCInstanceChargeTypeResponseBody extends $dara.Model {
    /**
     * @remarks
     * The billing method. Valid values:
     * - **POSTPAY**: pay-as-you-go
     * - **PREPAY**: subscription
     *
     * @example
     * POSTPAY
     */
    chargeType?: string;
    /**
     * @remarks
     * The expiration time.
     * > This parameter is not returned if the billing method is changed to pay-as-you-go.
     */
    expiredTime?: string[];
    /**
     * @remarks
     * The reserved parameter. This parameter is not supported.
     */
    feeOfInstances?: ModifyRCInstanceChargeTypeResponseBodyFeeOfInstances[];
    /**
     * @remarks
     * The list of instance IDs.
     */
    instanceIds?: string[];
    /**
     * @remarks
     * The order ID.
     *
     * @example
     * 2133400000****
     */
    orderId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 6EF82B07-28D2-48D1-B5D6-7E78FED277C7
     */
    requestId?: string;
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
