import * as $dara from '@darabonba/typescript';
export declare class CreateRCNodePoolResponseBody extends $dara.Model {
    /**
     * @remarks
     * The instance IDs.
     */
    instanceIdSets?: string[];
    /**
     * @remarks
     * The node pool ID.
     *
     * @example
     * np31da1b38983f4511b490fc62108a****
     */
    nodePoolId?: string;
    /**
     * @remarks
     * The order ID.
     *
     * @example
     * 50357661918****
     */
    orderId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 08A3B71B-FE08-4B03-974F-CC7EA6DB1828
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
