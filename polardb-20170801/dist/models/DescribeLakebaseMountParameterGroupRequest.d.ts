import * as $dara from '@darabonba/typescript';
export declare class DescribeLakebaseMountParameterGroupRequest extends $dara.Model {
    /**
     * @remarks
     * The parameter template ID.
     *
     * This parameter is required.
     *
     * @example
     * pg-xxx
     */
    parameterGroupId?: string;
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
