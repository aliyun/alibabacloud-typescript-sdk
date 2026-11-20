import * as $dara from '@darabonba/typescript';
export declare class CreateSandboxTemplateShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The number of CPUs for sandboxes created by using this template. Valid values: 1 to 4.
     *
     * @example
     * 1
     */
    defaultCpu?: string;
    /**
     * @remarks
     * The memory size of sandboxes created by using this template. Unit: GiB. Valid values: 1 to 8.
     *
     * @example
     * 1Gi
     */
    defaultMemory?: string;
    /**
     * @remarks
     * The description of the sandbox template. It must be unique within the VPC.
     *
     * @example
     * code-interpreter
     */
    description?: string;
    /**
     * @remarks
     * The container image used for the sandbox template. Format: `[registry/]<repo>[:tag][@sha256:digest]`. This parameter is required when you use a non-generic template name.
     *
     * @example
     * registry.example.com/example/sandbox:1.0
     */
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
     * The number of pre-warmed sandboxes. Valid values: 1 to 1000.
     *
     * @example
     * 1
     */
    replicas?: number;
    /**
     * @remarks
     * The custom tags of the sandbox template. The key is the tag name and the value is the tag value. You cannot use the system-reserved tag createdBy. You cannot use the system-reserved tag hidden.
     */
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
