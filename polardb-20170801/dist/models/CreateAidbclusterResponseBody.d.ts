import * as $dara from '@darabonba/typescript';
export declare class CreateAIDBClusterResponseBody extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * @example
     * pc-******************
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
     * CDB3258F-B5DE-43C4-8935-CBA0CA******
     */
    requestId?: string;
    /**
     * @remarks
     * The resource group ID.
     *
     * @example
     * rg-************
     */
    resourceGroupId?: string;
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
