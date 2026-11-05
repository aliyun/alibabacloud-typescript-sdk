import * as $dara from '@darabonba/typescript';
export declare class DescribeCommonSandboxTemplatesResponseBodyTemplates extends $dara.Model {
    /**
     * @remarks
     * The default number of CPUs for a sandbox created by using this template.
     *
     * @example
     * 1
     */
    defaultCpu?: string;
    /**
     * @remarks
     * The default memory size for a sandbox created by using this template. The unit ends with Gi.
     *
     * @example
     * 1Gi
     */
    defaultMemory?: string;
    /**
     * @remarks
     * The default number of prewarmed sandboxes.
     *
     * @example
     * 1
     */
    defaultReplicas?: number;
    /**
     * @remarks
     * The sandbox template description.
     *
     * @example
     * Execute user-provided Python code in the sandbox environment. Runs any Python script the user provides and returns the output.
     */
    description?: string;
    /**
     * @remarks
     * The sandbox template name.
     *
     * @example
     * desktop
     */
    name?: string;
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
export declare class DescribeCommonSandboxTemplatesResponseBody extends $dara.Model {
    /**
     * @remarks
     * A reserved parameter. You do not need to specify this parameter.
     *
     * @example
     * None
     */
    maxResults?: number;
    /**
     * @remarks
     * The token that determines the start point of the query. Set this parameter to empty to start the query from the beginning.
     *
     * @example
     * AAAAAc3HCuYhJi/wvpk4xOr0VLYz/NvD85HpgBeRBCusEIeVQ0dHZH9jr+NP3X9Jx0iSoql55b9nd4PIDm252/a0f+U=
     */
    nextToken?: string;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * FE9C65D7-930F-57A5-A207-8C396329241C
     */
    requestId?: string;
    /**
     * @remarks
     * The sandbox templates.
     */
    templates?: DescribeCommonSandboxTemplatesResponseBodyTemplates[];
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
