import * as $dara from '@darabonba/typescript';
export declare class TempModifyDBNodeResponseBody extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * @example
     * pc-xxxxxxxxxxxxxxxxx
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The list of nodes.
     */
    DBNodeIds?: string[];
    /**
     * @remarks
     * The order ID.
     *
     * @example
     * 2035638*******
     */
    orderId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 69A85BAF-1089-4CDF-A82F-0A140F******
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
