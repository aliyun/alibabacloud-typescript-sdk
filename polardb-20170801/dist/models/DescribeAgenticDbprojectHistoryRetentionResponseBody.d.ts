import * as $dara from '@darabonba/typescript';
export declare class DescribeAgenticDBProjectHistoryRetentionResponseBody extends $dara.Model {
    /**
     * @remarks
     * DBClusterId
     *
     * @example
     * pagc-bp1abcdef1234567
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The effective history data retention period of the project. To check the actual recoverable range, query the branch recovery window.
     *
     * @example
     * 604800
     */
    historyRetentionSeconds?: number;
    /**
     * @remarks
     * ProjectId
     *
     * @example
     * proj-a1b2c3d4e5f6
     */
    projectId?: string;
    /**
     * @remarks
     * The time when the query was completed, in UTC RFC3339 format. This does not represent the latest recoverable time.
     *
     * @example
     * 2026-10-16T07:32:00Z
     */
    queriedAt?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * req-123
     */
    requestId?: string;
    /**
     * @remarks
     * TenantId
     *
     * @example
     * t-4b83e0da66674951
     */
    tenantId?: string;
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
