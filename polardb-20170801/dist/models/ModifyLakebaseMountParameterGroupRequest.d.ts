import * as $dara from '@darabonba/typescript';
export declare class ModifyLakebaseMountParameterGroupRequest extends $dara.Model {
    /**
     * @remarks
     * The names of the parameters to delete, separated by commas.
     *
     * @example
     * param1,param2
     */
    deleteParameters?: string;
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
     * The new parameter template name.
     *
     * @example
     * pg-new
     */
    parameterGroupName?: string;
    /**
     * @remarks
     * The JSON string of added or modified parameter key-value pairs.
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
