import * as $dara from '@darabonba/typescript';
export declare class ModifyAppInstanceShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The reserved parameter.
     */
    branchName?: string;
    /**
     * @remarks
     * The client token that is used to ensure idempotence.
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
     * @example
     * pgm-2ze49qv594vi****
     */
    DBInstanceName?: string;
    /**
     * @remarks
     * The instance type. Currently, only **rdsai.supabase.basic** is supported.
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
