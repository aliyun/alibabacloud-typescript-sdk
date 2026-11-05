import * as $dara from '@darabonba/typescript';
export declare class DescribeDBInstanceMonitorResponseBody extends $dara.Model {
    /**
     * @remarks
     * The interval at which monitoring data is collected. Unit: seconds.
     *
     * @example
     * 60
     */
    period?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 30829FD4-1A84-4C2A-A625-2EADECB95CA3
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
