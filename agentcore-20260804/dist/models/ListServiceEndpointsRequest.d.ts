import * as $dara from '@darabonba/typescript';
export declare class ListServiceEndpointsRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the target agent used to filter the results.
     *
     * @example
     * agent-123456
     */
    agentId?: string;
    /**
     * @remarks
     * The version of the target agent used to filter the results.
     *
     * @example
     * v1
     */
    agentVersion?: string;
    /**
     * @remarks
     * The collaboration component type used to filter the results. Valid values: MATRIX_CLIENT, MATRIX_FEDERATION, and ELEMENT_WEB.
     *
     * @example
     * ELEMENT_WEB
     */
    collaborationComponent?: string;
    /**
     * @remarks
     * The maximum number of entries to return on a single page. Valid values: 1 to 100. Default value: 20.
     *
     * @example
     * 20
     */
    maxResults?: number;
    /**
     * @remarks
     * The cursor used to query the next page. Do not specify this parameter in the first call. For subsequent calls, specify the `nextToken` value returned in the previous call.
     *
     * @example
     * djE6YWdlbnRjb3JlLnNlcnZpY2UtZW5kcG9pbnQubGlzdDoyMA
     */
    nextToken?: string;
    /**
     * @remarks
     * The workspace resource binding ID of the target collaboration component used to filter the results.
     *
     * @example
     * wrb-123456
     */
    resourceBindingId?: string;
    /**
     * @remarks
     * The service endpoint status used to filter the results. Valid values: CREATING, READY, UPDATING, DEGRADED, DISABLED, and DELETING.
     *
     * @example
     * READY
     */
    status?: string;
    /**
     * @remarks
     * The target type used to filter the results. Valid values: AGENT_VERSION and TEAM_COLLABORATION.
     *
     * @example
     * AGENT_VERSION
     */
    targetType?: string;
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
