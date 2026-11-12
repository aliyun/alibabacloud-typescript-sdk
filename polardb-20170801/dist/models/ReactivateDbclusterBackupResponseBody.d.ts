import * as $dara from '@darabonba/typescript';
export declare class ReactivateDBClusterBackupResponseBody extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * @example
     * pc-****************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The ID of the generated order.
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
     * F2A9EFA7-915F-4572-8299-85A307******
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
