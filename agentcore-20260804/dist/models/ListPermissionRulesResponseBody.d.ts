import * as $dara from '@darabonba/typescript';
export declare class ListPermissionRulesResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The creation time in RFC 3339 format.
     *
     * @example
     * 2026-01-01T00:00:00Z
     */
    createdAt?: string;
    /**
     * @remarks
     * The authorization effect.
     *
     * @example
     * ALLOW
     */
    effect?: string;
    /**
     * @remarks
     * The rule enforcement mode.
     *
     * @example
     * ENFORCE
     */
    enforcementMode?: string;
    /**
     * @remarks
     * The permission rule ID.
     *
     * @example
     * pr-1234567890
     */
    permissionRuleId?: string;
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
     * @example
     * agent-1234567890
     */
    resourceId?: string;
    /**
     * @remarks
     * The resource type.
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
     * The rule source details.
     *
     * @example
     * OpenAPI
     */
    sourceDetail?: string;
    /**
     * @remarks
     * The target scope.
     *
     * @example
     * SPECIFIED
     */
    targetScope?: string;
    /**
     * @remarks
     * The list of rule targets.
     */
    targets?: string[];
    /**
     * @remarks
     * The update time in RFC 3339 format.
     *
     * @example
     * 2026-01-01T00:00:00Z
     */
    updatedAt?: string;
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
export declare class ListPermissionRulesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The business status code.
     *
     * @example
     * Success
     */
    code?: string;
    /**
     * @remarks
     * The HTTP status code.
     *
     * @example
     * 200
     */
    httpStatusCode?: number;
    /**
     * @remarks
     * The list of permission rules.
     */
    items?: ListPermissionRulesResponseBodyItems[];
    /**
     * @remarks
     * The maximum number of results returned in this response.
     *
     * @example
     * 20
     */
    maxResults?: number;
    /**
     * @remarks
     * The request processing result message.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The pagination token for the next page.
     *
     * @example
     * token-example
     */
    nextToken?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 1a2b3c4d-xxxx-xxxx-xxxx-xxxxxxxxxxxx
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request is successful.
     */
    success?: boolean;
    /**
     * @remarks
     * The total number of rules that match the query conditions.
     *
     * @example
     * 1
     */
    totalCount?: number;
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
