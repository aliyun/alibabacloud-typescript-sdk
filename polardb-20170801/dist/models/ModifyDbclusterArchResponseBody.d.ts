import * as $dara from '@darabonba/typescript';
export declare class ModifyDBClusterArchResponseBody extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * @example
     * pc-**************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The order ID.
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
     * 6A2EE5B4-CC9F-46E1-A747-E43BC9******
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
