import * as $dara from '@darabonba/typescript';
export declare class ModifyAIDBClusterModelResponseBody extends $dara.Model {
    /**
     * @remarks
     * Indicates whether the request is a preview request.
     *
     * @example
     * true
     */
    dryRun?: boolean;
    /**
     * @remarks
     * The instance model type.
     *
     * @example
     * custom
     */
    modelType?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 3AA6E0E4-1234-5678-90AB-1234567890AB
     */
    requestId?: string;
    /**
     * @remarks
     * The resolved target model name.
     *
     * @example
     * Qwen3-32B
     */
    targetModelName?: string;
    /**
     * @remarks
     * The resolved target OSS path.
     *
     * @example
     * /my-model-bucket/models/qwen3
     */
    targetOssPath?: string;
    /**
     * @remarks
     * The asynchronous task ID. This parameter is empty when DryRun is set to true.
     *
     * @example
     * 123456
     */
    taskId?: number;
    /**
     * @remarks
     * The total number of change batches.
     *
     * @example
     * 1
     */
    totalBatches?: number;
    /**
     * @remarks
     * The number of affected model service instances.
     *
     * @example
     * 2
     */
    totalMsds?: number;
    /**
     * @remarks
     * The change warnings returned by the upstream service. Callers must display these warnings.
     */
    warnings?: string[];
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
