import * as $dara from '@darabonba/typescript';
export declare class ModifyDBClusterResponseBody extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * @example
     * pc-*************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The generated order ID.
     *
     * @example
     * 2148126708*****
     */
    orderId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * CD3FA5F3-FAF3-44CA-AFFF-BAF869******
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
