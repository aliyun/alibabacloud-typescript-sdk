import * as $dara from '@darabonba/typescript';
export declare class DescribeLakebaseMountParameterGroupsRequest extends $dara.Model {
    /**
     * @remarks
     * The instance category. Valid values: basic (Basic Edition) and high_performance (High-performance Edition).
     *
     * @example
     * basic
     */
    paramGroupCategory?: string;
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
