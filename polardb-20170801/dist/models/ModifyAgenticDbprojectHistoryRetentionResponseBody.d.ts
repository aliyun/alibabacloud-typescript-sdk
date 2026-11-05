import * as $dara from '@darabonba/typescript';
export declare class ModifyAgenticDBProjectHistoryRetentionResponseBody extends $dara.Model {
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
     * The current effective history retention period of the project. To check the actual recoverable range, query the branch recovery window.
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
