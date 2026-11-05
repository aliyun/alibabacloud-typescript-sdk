import * as $dara from '@darabonba/typescript';
export declare class ModifyDBClusterStorageSpaceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the database cluster.
     *
     * @example
     * pc-*************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The ID of the order.
     *
     * @example
     * 2035629******
     */
    orderId?: string;
    /**
     * @remarks
     * The ID of the request.
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
