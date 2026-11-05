import * as $dara from '@darabonba/typescript';
export declare class RecoveryDBInstanceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rm-bp1v****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The ID of the order.
     *
     * @example
     * 2270972****
     */
    orderId?: string;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * E4CDD460-2618-51FE-BD0B-A1****
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
