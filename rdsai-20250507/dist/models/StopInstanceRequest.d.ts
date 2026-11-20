import * as $dara from '@darabonba/typescript';
export declare class StopInstanceRequest extends $dara.Model {
    /**
     * @remarks
     * The name of the branch to operate on. If this parameter is not specified, the operation is performed on the original instance.
     *
     * @example
     * ra-branch-123456789012abcd
     */
    branchName?: string;
    /**
     * @remarks
     * Specifies whether to forcibly stop the instance. Valid values:
     * - true: Forcibly stops the instance.
     * - false: Normally stops the instance.
     *
     * Default value: false.
     *
     * @example
     * false
     */
    force?: boolean;
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
