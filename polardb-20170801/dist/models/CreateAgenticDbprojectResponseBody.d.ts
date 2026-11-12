import * as $dara from '@darabonba/typescript';
export declare class CreateAgenticDBProjectResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the compute instance bound to the default branch.
     *
     * @example
     * pc-g0lsayq8c5qe
     */
    branchComputeClusterId?: string;
    /**
     * @remarks
     * The time when the project was created.
     *
     * The time follows the ISO 8601 standard in the UTC time zone (format: YYYY-MM-DDTHH:mm:ssZ).
     *
     * @example
     * 2026-06-10T11:00:00Z
     */
    createTime?: string;
    /**
     * @remarks
     * The ID of the default branch.
     *
     * @example
     * br-1a2b3c4d5e6f
     */
    defaultBranchId?: string;
    /**
     * @remarks
     * The name of the default branch.
     *
     * @example
     * main
     */
    defaultBranchName?: string;
    /**
     * @remarks
     * The retention period of historical data, in seconds.
     *
     * @example
     * 604800
     */
    historyRetentionSeconds?: number;
    /**
     * @remarks
     * The ID of the new project.
     *
     * @example
     * proj-a1b2c3d4e5f6
     */
    projectId?: string;
    /**
     * @remarks
     * The name of the project.
     *
     * @example
     * analytics-prod
     */
    projectName?: string;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * E5F6A7B8-C9D0-1234-EFAB-345678901234
     */
    requestId?: string;
    /**
     * @remarks
     * The ID of the tenant.
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
