import * as $dara from '@darabonba/typescript';
export declare class DeleteDBNodesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The order ID.
     *
     * @example
     * 100780000000000
     */
    orderId?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 8B993DA9-5272-5414-94E3-4CA8BA0146C2
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
