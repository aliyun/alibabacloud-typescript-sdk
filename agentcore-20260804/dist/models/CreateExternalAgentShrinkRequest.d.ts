import * as $dara from '@darabonba/typescript';
export declare class CreateExternalAgentShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The request body.
     */
    bodyShrink?: string;
    /**
     * @remarks
     * A reserved query parameter. Currently, the backend does not provide idempotency guarantees for deduplication or restoring the original processing result based on this identifier.
     *
     * @example
     * client-token-1
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
