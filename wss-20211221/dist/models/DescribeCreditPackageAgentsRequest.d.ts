import * as $dara from '@darabonba/typescript';
export declare class DescribeCreditPackageAgentsRequest extends $dara.Model {
    /**
     * @remarks
     * A JSON string of the AgentId list. Example: `["agent-1","agent-2"]`.
     */
    agentIds?: string[];
    /**
     * @remarks
     * The agent type. Valid values: `CREDIT_PACKAGE`, `JVS_CLAW`, `OPEN_CLAW`, and `JVS_COPILOT`.
     *
     * @example
     * JVS_COPILOT
     */
    agentType?: string;
    /**
     * @remarks
     * The business type.
     *
     * @example
     * BUSINESS
     */
    bizType?: string;
    /**
     * @remarks
     * The number of entries per page.
     *
     * @example
     * 100
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
