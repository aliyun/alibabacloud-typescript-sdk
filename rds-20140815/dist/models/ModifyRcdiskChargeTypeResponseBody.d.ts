import * as $dara from '@darabonba/typescript';
export declare class ModifyRCDiskChargeTypeResponseBody extends $dara.Model {
    /**
     * @example
     * Prepaid
     */
    chargeType?: string;
    expiredTime?: string[];
    instanceIds?: string[];
    /**
     * @example
     * 2133400000****
     */
    orderId?: string;
    /**
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
