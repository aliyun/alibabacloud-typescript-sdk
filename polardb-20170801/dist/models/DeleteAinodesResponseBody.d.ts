import * as $dara from '@darabonba/typescript';
export declare class DeleteAINodesResponseBody extends $dara.Model {
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
     * The order ID.
     *
     * @example
     * 2035629******
     */
    orderId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 9B7BFB11-C077-4FE3-B051-F69CEB******
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
