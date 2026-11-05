import * as $dara from '@darabonba/typescript';
export declare class ModifyDBInstancePayTypeResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the order.
     *
     * @example
     * 10078937023****
     */
    orderId?: number;
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
