import * as $dara from '@darabonba/typescript';
export declare class ListPermissionRulesRequest extends $dara.Model {
    /**
     * @remarks
     * The maximum number of results to return per page.
     *
     * @example
     * 20
     */
    maxResults?: number;
    /**
     * @remarks
     * The token used to retrieve the next page.
     *
     * @example
     * token-example
     */
    nextToken?: string;
    /**
     * @remarks
     * The principal ID.
     *
     * @example
     * 1234567890123456
     */
    principalId?: string;
    /**
     * @remarks
     * The principal name.
     *
     * @example
     * example-user
     */
    principalName?: string;
    /**
     * @remarks
     * The principal type.
     *
     * @example
     * USER
     */
    principalType?: string;
    /**
     * @remarks
     * The resource ID.
     *
     * This parameter is required.
     *
     * @example
     * agent-1234567890
     */
    resourceId?: string;
    /**
     * @remarks
     * The resource type.
     *
     * This parameter is required.
     *
     * @example
     * AGENT
     */
    resourceType?: string;
    /**
     * @remarks
     * The rule source.
     *
     * @example
     * AgentCore
     */
    source?: string;
    /**
     * @remarks
     * The rule target.
     *
     * @example
     * agent-1234567890
     */
    target?: string;
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
