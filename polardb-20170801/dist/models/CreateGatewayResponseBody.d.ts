import * as $dara from '@darabonba/typescript';
export declare class CreateGatewayResponseBody extends $dara.Model {
    /**
     * @remarks
     * The gateway instance ID.
     *
     * @example
     * pg-2ze2079ueg20****
     */
    gwClusterId?: string;
    /**
     * @remarks
     * The order ID.
     *
     * @example
     * 2035629******
     */
    orderId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * F9F1CB1A-B1D5-4EF5-A53A-************
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
