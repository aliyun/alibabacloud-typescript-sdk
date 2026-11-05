import * as $dara from '@darabonba/typescript';
export declare class UpgradeDBInstanceMajorVersionResponseBody extends $dara.Model {
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * pgm-bp1gm3yh0ht1****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The order ID.
     *
     * @example
     * 21128667463****
     */
    orderId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 006729E5-2A33-5955-89E3-651D3F44EBE6
     */
    requestId?: string;
    /**
     * @remarks
     * A reserved parameter.
     *
     * @example
     * 416980000
     */
    taskId?: number;
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
