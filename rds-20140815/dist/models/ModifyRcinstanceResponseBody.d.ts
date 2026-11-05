import * as $dara from '@darabonba/typescript';
export declare class ModifyRCInstanceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The order ID.
     *
     * @example
     * 100789370230206
     */
    orderId?: number;
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
