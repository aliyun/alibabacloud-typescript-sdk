import * as $dara from '@darabonba/typescript';
export declare class CreateDBClusterResponseBody extends $dara.Model {
    /**
     * @remarks
     * The Agentic cluster description.
     *
     * @example
     * pagc-***************
     */
    agenticDbClusterDescription?: string;
    /**
     * @remarks
     * The Agentic cluster ID.
     *
     * @example
     * pagc-***************
     */
    agenticDbClusterId?: string;
    /**
     * @remarks
     * The cluster ID.
     *
     * @example
     * pc-bp1s826a1up******
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The order ID.
     *
     * @example
     * 211454967******
     */
    orderId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * E56531A4-E552-40BA-9C58-137B80******
     */
    requestId?: string;
    /**
     * @remarks
     * The ID of the resource group.
     *
     * @example
     * rg-***************
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
