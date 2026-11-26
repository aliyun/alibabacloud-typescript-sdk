import * as $dara from '@darabonba/typescript';
export declare class DescribeSandboxTemplatesResponseBodySandboxTemplates extends $dara.Model {
    /**
     * @remarks
     * The creation source of the sandbox template. Valid values: user (created by a user) and system (created by the system).
     *
     * @example
     * user
     */
    createdBy?: string;
    /**
     * @remarks
     * The number of vCPUs allocated to the sandbox created by using this template.
     *
     * @example
     * 2
     */
    defaultCpu?: string;
    /**
     * @remarks
     * The default disk space of the sandbox created by using this template.
     *
     * @example
     * 30Gi
     */
    defaultDisk?: string;
    /**
     * @remarks
     * The memory size of the sandbox created by using this template.
     *
     * @example
     * 4Gi
     */
    defaultMemory?: string;
    /**
     * @remarks
     * The description of the sandbox template.
     *
     * @example
     * code-interpreter-vpc
     */
    description?: string;
    /**
     * @remarks
     * Specifies whether the sandbox created by using this template can access resources in the VPC where Supabase resides.
     *
     * @example
     * true
     */
    enableVpcAccess?: string;
    /**
     * @remarks
     * The container image used by the sandbox template.
     *
     * @example
     * registry.example.com/example/sandbox:1.0
     */
    image?: string;
    /**
     * @remarks
     * The name of the sandbox template.
     *
     * @example
     * code-interpreter
     */
    name?: string;
    /**
     * @remarks
     * The number of replicas of the sandbox template.
     *
     * @example
     * 1
     */
    replicas?: number;
    /**
     * @remarks
     * The custom tags of the sandbox template. The key is the tag name and the value is the tag value.
     */
    tags?: {
        [key: string]: string;
    };
    /**
     * @remarks
     * The ID of the sandbox template. Specify this ID when you create a sandbox by using this template.
     *
     * @example
     * code-interpreter-asdxxxx
     */
    templateId?: string;
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
export declare class DescribeSandboxTemplatesResponseBody extends $dara.Model {
    /**
     * @remarks
     * A reserved parameter. Ignore this parameter.
     *
     * @example
     * None
     */
    maxResults?: number;
    /**
     * @remarks
     * The position from which the current query starts. If this parameter is left empty, the query starts from the beginning.
     *
     * @example
     * AAAAAc3HCuYhJi/wvpk4xOr0VLYz/NvD85HpgBeRBCusEIeVQ0dHZH9jr+NP3X9Jx0iSoql55b9nd4PIDm252/a0f+U=
     */
    nextToken?: string;
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page.
     *
     * @example
     * 10
     */
    pageSize?: number;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * FE9C65D7-930F-57A5-A207-8C396329****
     */
    requestId?: string;
    /**
     * @remarks
     * The list of sandbox templates.
     */
    sandboxTemplates?: DescribeSandboxTemplatesResponseBodySandboxTemplates[];
    /**
     * @remarks
     * The total number of entries that meet the request conditions.
     *
     * @example
     * 20
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
