import * as $dara from '@darabonba/typescript';
export declare class ListSandboxSessionsRequest extends $dara.Model {
    /**
     * @remarks
     * The maximum number of entries to return per page. Default value: 20. Valid values: 1 to 100.
     *
     * @example
     * 20
     */
    maxResults?: number;
    /**
     * @remarks
     * The token for the next page. Omit this parameter in the first request. For subsequent requests, use the returned token as is, and keep the workspace, agent, instance, and maxResults unchanged. An empty value indicates that no more pages are available.
     *
     * @example
     * next-token-1
     */
    nextToken?: string;
    /**
     * @remarks
     * The value must be consistent with the request parameters used in the ListSandboxes operation to obtain the sandboxId. If this parameter is omitted or left blank, the latest running unit of the agent is queried. If this parameter is specified, the service endpoint must belong to the agent and the target type must be AGENT_VERSION. Otherwise, Resource.NotFound is returned. If the target is not DEFAULT and is not running independently, ServiceEndpointTargetNotReady is returned. If the sandboxId does not belong to the specified running unit, Sandbox.NotFound is returned instead of an empty list.
     *
     * @example
     * se-7f3a92c1
     */
    serviceEndpointId?: string;
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
