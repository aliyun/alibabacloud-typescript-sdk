import * as $dara from '@darabonba/typescript';
export declare class ApplyLakebaseMountParameterGroupRequest extends $dara.Model {
    /**
     * @remarks
     * The parameter template ID, which starts with pagp-.
     *
     * This parameter is required.
     *
     * @example
     * pagp-xxx
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
     * cn-hangzhou
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
