import * as $dara from '@darabonba/typescript';
export declare class ModifySandboxTemplateRequest extends $dara.Model {
    /**
     * @remarks
     * The number of CPUs for sandboxes created from this template. Valid values: 1 to 4.
     *
     * @example
     * 1
     */
    defaultCpu?: string;
    /**
     * @remarks
     * The memory size of sandboxes created from this template. Unit: Gi. Valid values: 1Gi to 8Gi.
     *
     * @example
     * 1Gi
     */
    defaultMemory?: string;
    image?: string;
    /**
     * @remarks
     * The instance ID of the AI application.
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
    /**
     * @remarks
     * The initial number of instances. Valid values: 1 to 1000.
     *
     * @example
     * 2
     */
    replicas?: number;
    tags?: {
        [key: string]: string;
    };
    /**
     * @remarks
     * The sandbox template ID.
     *
     * This parameter is required.
     *
     * @example
     * desktop-xxx
     */
    templateId?: string;
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
