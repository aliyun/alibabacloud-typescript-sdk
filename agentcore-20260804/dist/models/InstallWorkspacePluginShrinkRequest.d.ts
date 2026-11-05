import * as $dara from '@darabonba/typescript';
export declare class InstallWorkspacePluginShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The request body for installing a plugin.
     */
    bodyShrink?: string;
    /**
     * @remarks
     * The client idempotency token.
     *
     * @example
     * workspace-plugin-install-20260810-001
     */
    clientToken?: string;
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
