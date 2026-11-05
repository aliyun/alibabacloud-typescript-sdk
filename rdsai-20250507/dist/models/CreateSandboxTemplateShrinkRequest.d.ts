import * as $dara from '@darabonba/typescript';
export declare class CreateSandboxTemplateShrinkRequest extends $dara.Model {
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
     * The memory size for sandboxes created from this template. Unit: Gi. Valid values: 1Gi to 8Gi.
     *
     * @example
     * 1Gi
     */
    defaultMemory?: string;
    /**
     * @remarks
     * The description of the sandbox template. The description must be unique within the VPC.
     *
     * @example
     * code-interpreter
     */
    description?: string;
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
     * The number of prewarmed sandboxes. Valid values: 1 to 1000.
     *
     * @example
     * 1
     */
    replicas?: number;
    tagsShrink?: string;
    /**
     * @remarks
     * The name of the sandbox template.
     *
     * This parameter is required.
     *
     * @example
     * code-interpreter
     */
    templateName?: string;
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
