import * as $dara from '@darabonba/typescript';
export declare class DescribeInstanceRAGConfigResponseBodyConfigList extends $dara.Model {
    /**
     * @remarks
     * The name of the configuration item.
     *
     * @example
     * LLM_MODEL
     */
    name?: string;
    /**
     * @remarks
     * The value of the configuration item.
     *
     * @example
     * qwen-flash
     */
    value?: string;
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
export declare class DescribeInstanceRAGConfigResponseBody extends $dara.Model {
    /**
     * @remarks
     * The reserved parameter.
     *
     * @example
     * Reserved parameter
     */
    branchName?: string;
    /**
     * @remarks
     * The list of RAG Agent configurations.
     */
    configList?: DescribeInstanceRAGConfigResponseBodyConfigList[];
    /**
     * @remarks
     * The instance ID of the AI application.
     *
     * @example
     * ra-supabase-8moov5lxba****
     */
    instanceName?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * FE9C65D7-930F-57A5-A207-8C396329241C
     */
    requestId?: string;
    /**
     * @remarks
     * The status of the RAG Agent.
     * - **true**: Enabled.
     * - **false**: Disabled.
     *
     * @example
     * true
     */
    status?: boolean;
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
