import * as $dara from '@darabonba/typescript';
export declare class CreatePermissionRulesRequestBodyRules extends $dara.Model {
    /**
     * @remarks
     * The authorization effect.
     *
     * This parameter is required.
     *
     * @example
     * ALLOW
     */
    effect?: string;
    /**
     * @remarks
     * The rule enforcement mode.
     *
     * This parameter is required.
     *
     * @example
     * ENFORCE
     */
    enforcementMode?: string;
    /**
     * @remarks
     * The principal ID.
     *
     * This parameter is required.
     *
     * @example
     * 1234567890123456
     */
    principalId?: string;
    /**
     * @remarks
     * The principal type.
     *
     * This parameter is required.
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
     * This parameter is required.
     *
     * @example
     * AgentCore
     */
    source?: string;
    /**
     * @remarks
     * The target scope.
     *
     * This parameter is required.
     *
     * @example
     * SPECIFIED
     */
    targetScope?: string;
    /**
     * @remarks
     * The list of targets for the rule.
     */
    targets?: string[];
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
export declare class CreatePermissionRulesRequestBody extends $dara.Model {
    /**
     * @remarks
     * The list of permission rules to be created.
     *
     * This parameter is required.
     */
    rules?: CreatePermissionRulesRequestBodyRules[];
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
export declare class CreatePermissionRulesRequest extends $dara.Model {
    /**
     * @remarks
     * The request body for creating permission rules.
     */
    body?: CreatePermissionRulesRequestBody;
    /**
     * @remarks
     * The client token.
     *
     * @example
     * 550e8400-e29b-41d4-a716-446655440000
     */
    clientToken?: string;
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
