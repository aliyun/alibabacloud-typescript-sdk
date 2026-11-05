import * as $dara from '@darabonba/typescript';
export declare class ModifyDBInstanceSpecResponseBody extends $dara.Model {
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
     * The ID of the order.
     *
     * @example
     * 20793850608****
     */
    orderId?: number;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 3C5CFDEE-F774-4DED-89A2-1D76EC63C575
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
