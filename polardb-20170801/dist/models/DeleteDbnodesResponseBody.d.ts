import * as $dara from '@darabonba/typescript';
export declare class DeleteDBNodesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The database cluster ID.
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
     * 2035638*******
     */
    orderId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 6566B2E6-3157-4B57-A693-AFB751******
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
