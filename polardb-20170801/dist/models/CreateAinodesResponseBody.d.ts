import * as $dara from '@darabonba/typescript';
export declare class CreateAINodesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * @example
     * pm-xxxxxx
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The IDs of the created DB nodes.
     */
    DBNodeIds?: string[];
    /**
     * @remarks
     * The ID of the order.
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
     * D0CEC6AC-7760-409A-A0D5-E6CD86******
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
