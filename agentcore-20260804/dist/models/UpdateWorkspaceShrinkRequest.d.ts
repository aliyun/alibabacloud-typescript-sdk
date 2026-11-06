import * as $dara from '@darabonba/typescript';
export declare class UpdateWorkspaceShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The request body for updating a workspace.
     */
    bodyShrink?: string;
    /**
     * @remarks
     * The client idempotency token.
     *
     * @example
     * workspace-update-20260805-001
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
