import * as $dara from '@darabonba/typescript';
export declare class DescribeDBClusterAuditLogCollectorResponseBody extends $dara.Model {
    /**
     * @remarks
     * The status of SQL collector. Valid values:
     *
     * - Enable
     *
     * - Disabled
     *
     * @example
     * Disabled
     */
    collectorStatus?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 59011D2B-2A38-4207-A86C-72BC1F882D19
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
