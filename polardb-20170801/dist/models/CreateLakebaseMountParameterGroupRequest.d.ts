import * as $dara from '@darabonba/typescript';
export declare class CreateLakebaseMountParameterGroupRequest extends $dara.Model {
    /**
     * @remarks
     * The instance edition. Valid values:
     * - basic: Basic Edition.
     * - high_performance: High-performance Edition.
     *
     * This parameter is required.
     *
     * @example
     * basic
     */
    paramGroupCategory?: string;
    /**
     * @remarks
     * The description of the parameter template.
     *
     * @example
     * Test template
     */
    parameterGroupDesc?: string;
    /**
     * @remarks
     * The name of the parameter template.
     *
     * This parameter is required.
     *
     * @example
     * pg-test
     */
    parameterGroupName?: string;
    /**
     * @remarks
     * The JSON string of parameters and their values.
     *
     * This parameter is required.
     *
     * @example
     * {"key1":"value1"}
     */
    parameters?: string;
    /**
     * @remarks
     * The PolarFS instance ID.
     *
     * This parameter is required.
     *
     * @example
     * pfs-xxx
     */
    polarFsInstanceId?: string;
    /**
     * @remarks
     * The region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
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
