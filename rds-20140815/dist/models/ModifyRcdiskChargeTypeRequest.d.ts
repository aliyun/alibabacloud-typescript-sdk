import * as $dara from '@darabonba/typescript';
export declare class ModifyRCDiskChargeTypeRequest extends $dara.Model {
    autoPay?: boolean;
    /**
     * @example
     * true
     */
    autoRenew?: string;
    autoUseCoupon?: boolean;
    /**
     * @example
     * None
     */
    businessInfo?: string;
    /**
     * @example
     * 2F20251224*
     */
    clientToken?: string;
    /**
     * @remarks
     * This parameter is required.
     *
     * @example
     * rcd-pq2091s13go9bkb04*
     */
    instanceId?: string;
    /**
     * @example
     * Postpaid
     */
    payType?: string;
    /**
     * @example
     * Month
     */
    period?: string;
    /**
     * @example
     * 72802442****
     */
    promotionCode?: string;
    /**
     * @remarks
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     *
     * **if can be null:**
     * true
     */
    regionId?: string;
    /**
     * @example
     * 1
     */
    usedTime?: number;
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
