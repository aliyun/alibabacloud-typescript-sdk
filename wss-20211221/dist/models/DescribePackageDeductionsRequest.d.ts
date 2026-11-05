import * as $dara from '@darabonba/typescript';
export declare class DescribePackageDeductionsRequest extends $dara.Model {
    /**
     * @remarks
     * The agent type.
     *
     * @example
     * OpenClaw
     */
    agentType?: string;
    /**
     * @remarks
     * The list of agent types.
     */
    agentTypes?: string[];
    /**
     * @remarks
     * The business type.
     *
     * @example
     * ENTERPRISE、BUSINESS
     */
    bizType?: string;
    /**
     * @remarks
     * The WUYING user ID. You can obtain it by calling the GetLoginToken operation. The response parameter is WyId.
     *
     * @example
     * fb4dc579c48ffbea
     */
    consumeWyId?: string;
    /**
     * @remarks
     * The WUYING user ID. You can obtain it by calling the GetLoginToken operation. The response parameter is WyId.
     */
    consumeWyIds?: string[];
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * UUID
     */
    deductionRequestId?: string;
    /**
     * @remarks
     * The deduction types.
     */
    deductionTypes?: string[];
    /**
     * @remarks
     * The end time of the query. The time is a UNIX timestamp in milliseconds.
     *
     * @example
     * 1709117383000
     */
    endTime?: number;
    /**
     * @remarks
     * The list of resource group types.
     */
    groupResourceTypes?: string[];
    /**
     * @remarks
     * The instance ID, such as ecd-xxx.
     *
     * @example
     * ecd-xxx
     */
    instanceId?: string;
    /**
     * @remarks
     * The instance ID type.
     *
     * @example
     * ecd-xxx
     */
    instanceIdType?: string;
    /**
     * @remarks
     * The list of Cloud Desktop IDs. If this field is specified, the PackageIds field is required.
     */
    instanceIds?: string[];
    /**
     * @remarks
     * The model name.
     *
     * @example
     * happyhorse-1.1
     */
    model?: string;
    /**
     * @remarks
     * The list of core-hour package IDs in JSON format.
     */
    packageIds?: string[];
    /**
     * @remarks
     * The current page number. Default value: 1.
     *
     * @example
     * 1
     */
    pageNum?: number;
    /**
     * @remarks
     * The paging Settings for the number of entries to return on each page in a paged query. Maximum value: 100.
     *
     * @example
     * 100
     */
    pageSize?: number;
    /**
     * @remarks
     * The resource type.
     *
     * @example
     * Desktop
     */
    resourceType?: string;
    /**
     * @remarks
     * The array of resource types.
     */
    resourceTypes?: string[];
    /**
     * @remarks
     * The run ID.
     *
     * @example
     * t-xxx
     */
    runId?: string;
    /**
     * @remarks
     * The list of run IDs.
     */
    runIdList?: string[];
    /**
     * @remarks
     * The start time of the query. The time is a UNIX timestamp in milliseconds.
     *
     * @example
     * 1709117383000
     */
    startTime?: number;
    /**
     * @remarks
     * The WUYING user ID. You can obtain it by calling the GetLoginToken operation. The response parameter is WyId.
     *
     * @example
     * fb4dc579c48ffbea
     */
    wyId?: string;
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
