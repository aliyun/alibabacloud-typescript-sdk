import * as $dara from '@darabonba/typescript';
export declare class ModifyInstanceConfigRequest extends $dara.Model {
    /**
     * @remarks
     * The reserved parameter.
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
     * The name of the configuration item to modify. This parameter must be used together with ConfigValue.
     *
     * @example
     * eip、nat
     */
    configName?: string;
    /**
     * @remarks
     * The value of the configuration item to modify. This parameter must be used together with ConfigName.
     *
     * @example
     * on、off
     */
    configValue?: string;
    /**
     * @remarks
     * The ID of the AI application instance.
     *
     * This parameter is required.
     *
     * @example
     * ra-supabase-8moov5lxba****
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
