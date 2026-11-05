import * as $dara from '@darabonba/typescript';
export declare class DescribeDBClusterMonitorResponseBody extends $dara.Model {
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
     * 593AE1C5-B70C-463F-9207-074639******
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
