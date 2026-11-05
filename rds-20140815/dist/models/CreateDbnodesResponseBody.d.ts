import * as $dara from '@darabonba/typescript';
export declare class CreateDBNodesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rm-2ze450g4ctg6t****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The IDs of the created nodes. The value is a string. Multiple node IDs are separated by commas (`,`).
     *
     * @example
     * rn-abcd2****
     */
    nodeIds?: string;
    /**
     * @remarks
     * The ID of the order.
     *
     * @example
     * 2133400000****
     */
    orderId?: number;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 7A41C147-C8D0-4DAE-A1A2-17EBCD60DFA1
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
