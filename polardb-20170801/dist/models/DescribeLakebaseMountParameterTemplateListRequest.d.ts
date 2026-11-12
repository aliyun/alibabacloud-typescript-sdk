import * as $dara from '@darabonba/typescript';
export declare class DescribeLakebaseMountParameterTemplateListRequest extends $dara.Model {
    /**
     * @remarks
     * The engine. Set the value to polar_3fs.
     *
     * This parameter is required.
     *
     * @example
     * polar_3fs
     */
    engine?: string;
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
     * The PolarFS instance ID. You can call DescribePolarFs to query available PolarFS instances and use the returned PolarFsInstanceId.
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
