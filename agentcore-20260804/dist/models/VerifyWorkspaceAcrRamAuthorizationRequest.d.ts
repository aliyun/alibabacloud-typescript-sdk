import * as $dara from '@darabonba/typescript';
export declare class VerifyWorkspaceAcrRamAuthorizationRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the ACR Enterprise instance.
     *
     * This parameter is required.
     *
     * @example
     * cri-1234567890abcdef
     */
    acrInstanceId?: string;
    /**
     * @remarks
     * The ACR namespace.
     *
     * This parameter is required.
     *
     * @example
     * example
     */
    namespace?: string;
    /**
     * @remarks
     * The name of the ACR image repository.
     *
     * This parameter is required.
     *
     * @example
     * agent-image
     */
    repository?: string;
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
