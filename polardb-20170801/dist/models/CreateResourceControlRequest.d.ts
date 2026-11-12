import * as $dara from '@darabonba/typescript';
export declare class CreateResourceControlRequest extends $dara.Model {
    /**
     * @remarks
     * The maximum number of CPU cores available to the resource control rule. The minimum value is 1, and the maximum value is determined by the resource_control_cpu_count_limit kernel parameter of the cluster. You must specify either MaxCpu or CpuCount, but not both.
     *
     * @example
     * 4
     */
    cpuCount?: number;
    /**
     * @remarks
     * The ID of the PolarDB cluster.
     *
     * This parameter is required.
     *
     * @example
     * pc-**************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The maximum CPU quota percentage available to the resource control rule. Valid values: 1 to 100. You must specify either MaxCpu or CpuCount, but not both.
     *
     * @example
     * 20
     */
    maxCpu?: number;
    /**
     * @remarks
     * The ID of the region where the PolarDB cluster is deployed.
     * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query available regions.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    /**
     * @remarks
     * The name of the resource control rule. The name must be 1 to 63 ASCII characters in length, start with a letter, and contain only letters, digits, and underscores.
     *
     * This parameter is required.
     *
     * @example
     * test_rc
     */
    resourceControlName?: string;
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
