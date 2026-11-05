import * as $dara from '@darabonba/typescript';
export declare class CreateOrderForDeleteDBNodesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rm-7x******
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The order ID.
     *
     * @example
     * 221172852******
     */
    orderId?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 49BC2500-8078-5AC4-A545-20AA5945B0E6
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
