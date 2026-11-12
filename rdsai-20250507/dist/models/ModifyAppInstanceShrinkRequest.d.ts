import * as $dara from '@darabonba/typescript';
export declare class ModifyAppInstanceShrinkRequest extends $dara.Model {
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
     * The idempotency parameter.
     *
     * @example
     * ETnLKlblzczshOTUbOCz****
     */
    clientToken?: string;
    /**
     * @remarks
     * The list of modules.
     */
    componentsShrink?: string;
    /**
     * @remarks
     * The instance ID of the ApsaraDB RDS for PostgreSQL database connected to the AI application.
     *
     * <notice>Only **newly purchased empty ApsaraDB RDS for PostgreSQL instances** are supported. The major engine version must be **17**, and the minor engine version must be **20250630 or later**.</notice>
     *
     * @example
     * pgm-2ze49qv594vi****
     */
    DBInstanceName?: string;
    /**
     * @remarks
     * The instance type. Only **rdsai.supabase.basic** is supported.
     *
     * @example
     * rdsai.supabase.basic
     */
    instanceClass?: string;
    /**
     * @remarks
     * The instance ID of the AI application.
     *
     * @example
     * ra-8moov5lxba****
     */
    instanceName?: string;
    /**
     * @remarks
     * The reserved parameter.
     *
     * @example
     * Reserved parameter
     */
    migrationMode?: string;
    /**
     * @remarks
     * The region ID.
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
