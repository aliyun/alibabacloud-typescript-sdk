import * as $dara from '@darabonba/typescript';
export declare class TransformDBClusterPayTypeResponseBody extends $dara.Model {
    /**
     * @remarks
     * The billing method of the instance. Valid values:
     *
     * - **Postpaid**: pay-as-you-go
     *
     * - **Prepaid**: subscription
     *
     * @example
     * Prepaid
     */
    chargeType?: string;
    /**
     * @remarks
     * The PolarDB cluster ID.
     *
     * @example
     * pc-bp10gr51qasnl****
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The expiration time of the instance.
     * > This response parameter is returned only when **PayType** is set to **Prepaid**.
     *
     * The time follows the ISO 8601 standard in the format of YYYY-MM-DDTHH:mm:ssZ. The time is displayed in UTC.
     *
     * @example
     * 2020-04-20T10:00:00Z
     */
    expiredTime?: string;
    /**
     * @remarks
     * The order ID.
     *
     * @example
     * 20515760028****
     */
    orderId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 5E71541A-6007-4DCC-A38A-F872C31FEB45
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
