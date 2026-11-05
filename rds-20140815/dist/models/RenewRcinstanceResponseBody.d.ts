import * as $dara from '@darabonba/typescript';
export declare class RenewRCInstanceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The instance ID of the RDS Custom instance.
     *
     * @example
     * rc-dh2jf9n6j4s14926****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The order ID.
     *
     * @example
     * 23202700556****
     */
    orderId?: string;
    /**
     * @remarks
     * The order ID.
     *
     * @example
     * 23202700556****
     */
    orderIds?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * EFFC7565-B3CF-5CFA-9E1F-164DD1E1F498
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
