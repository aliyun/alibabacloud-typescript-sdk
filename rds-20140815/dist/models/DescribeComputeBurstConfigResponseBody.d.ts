import * as $dara from '@darabonba/typescript';
export declare class DescribeComputeBurstConfigResponseBody extends $dara.Model {
    /**
     * @remarks
     * The configuration details of the committed Serverless feature.
     *
     * @example
     * {
     *     "cpuEnlargeThreshold": "60",
     *     "memoryEnlargeThreshold": "60",
     *     "scaleMaxMemory": "4",
     *     "memoryShrinkThreshold": "50",
     *     "scaleMaxCpus": "2",
     *     "cpuShrinkThreshold": "30"
     *   }
     */
    computeBurstConfig?: {
        [key: string]: any;
    };
    /**
     * @remarks
     * Indicates whether the committed Serverless feature is enabled. Valid values:
     * - **true**: Enabled.
     * - **false**: Disabled.
     *
     * @example
     * true
     */
    computeBurstEnabled?: boolean;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 847BA085-B377-4BFA-8267-F82345ECE1D2
     */
    requestId?: string;
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
