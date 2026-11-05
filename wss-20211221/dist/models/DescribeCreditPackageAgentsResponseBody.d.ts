import * as $dara from '@darabonba/typescript';
export declare class DescribeCreditPackageAgentsResponseBodyAgents extends $dara.Model {
    /**
     * @remarks
     * Agent ID
     *
     * @example
     * agent-abc
     */
    agentId?: string;
    /**
     * @remarks
     * The time when the instance was created, in the YYYY-MM-DD HH:mm:ss format.
     *
     * @example
     * 2026-04-01 10:00:00
     */
    createdTime?: string;
    /**
     * @remarks
     * **The ID of the currently active credit package instance.**
     *
     * @example
     * cp-inst-001
     */
    creditPackageId?: string;
    /**
     * @remarks
     * The time when the instance expires, in the YYYY-MM-DD HH:mm:ss format.
     *
     * @example
     * 2026-10-01 10:00:00
     */
    expiredTime?: string;
    /**
     * @remarks
     * The instance type.
     *
     * @example
     * jvs-copilot.standard
     */
    instanceType?: string;
    /**
     * @remarks
     * **The total number of credits.**
     *
     * @example
     * 2000
     */
    totalCredit?: number;
    /**
     * @remarks
     * **The number of credits used.**
     *
     * @example
     * 100
     */
    usedCredit?: number;
    /**
     * @remarks
     * **The alert threshold percentage (0–100).**
     *
     * @example
     * 80
     */
    warnPercent?: number;
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
export declare class DescribeCreditPackageAgentsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The agent list.
     */
    agents?: DescribeCreditPackageAgentsResponseBodyAgents[];
    /**
     * @remarks
     * The number of entries per page.
     *
     * @example
     * 20
     */
    maxResults?: number;
    /**
     * @remarks
     * The pagination token. Set this parameter to an empty string for the first request. For subsequent requests, use the `nextToken` value from the previous response.
     *
     * @example
     * eyJvZmZzZXQiOjIwfQ==
     */
    nextToken?: string;
    /**
     * @remarks
     * The request trace ID, which is used for troubleshooting.
     *
     * @example
     * xxxx-xxxx-xxxx
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
