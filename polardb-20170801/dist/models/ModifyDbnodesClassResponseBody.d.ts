import * as $dara from '@darabonba/typescript';
export declare class ModifyDBNodesClassResponseBody extends $dara.Model {
    /**
     * @remarks
     * The database cluster ID.
     *
     * @example
     * pc-*************
     */
    DBClusterId?: string;
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
     * 685F028C-4FCD-407D-A559-072D63******
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
