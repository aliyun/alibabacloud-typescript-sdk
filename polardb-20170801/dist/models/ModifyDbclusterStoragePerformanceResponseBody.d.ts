import * as $dara from '@darabonba/typescript';
export declare class ModifyDBClusterStoragePerformanceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * @example
     * pc-************
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
     * E56531A4-E552-40BA-9C58-137B80******
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
