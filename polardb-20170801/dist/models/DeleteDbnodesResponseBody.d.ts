import * as $dara from '@darabonba/typescript';
export declare class DeleteDBNodesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the database cluster.
     *
     * @example
     * pc-**************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The ID of the order.
     *
     * @example
     * 2035638*******
     */
    orderId?: string;
    /**
     * @remarks
     * The ID of the request.
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
