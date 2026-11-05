import * as $dara from '@darabonba/typescript';
export declare class CreateDBNodesResponseBodyDBNodeIds extends $dara.Model {
    DBNodeId?: string[];
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
export declare class CreateDBNodesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * @example
     * pc-***************
     */
    DBClusterId?: string;
    DBNodeIds?: CreateDBNodesResponseBodyDBNodeIds;
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
     * E053E730-5755-4AA9-AA9D-A47867******
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
