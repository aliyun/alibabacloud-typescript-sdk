import * as $dara from '@darabonba/typescript';
export declare class CreateAIDBClusterResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the cluster.
     *
     * @example
     * pc-******************
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
     * Id of the request
     *
     * @example
     * CDB3258F-B5DE-43C4-8935-CBA0CA******
     */
    requestId?: string;
    /**
     * @remarks
     * The ID of the resource group.
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
