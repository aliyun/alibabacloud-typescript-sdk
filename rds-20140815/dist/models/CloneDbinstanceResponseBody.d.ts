import * as $dara from '@darabonba/typescript';
export declare class CloneDBInstanceResponseBody extends $dara.Model {
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
     * 100789370****
     */
    orderId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 1E43AAE0-BEE8-43DA-860D-EAF2****
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
