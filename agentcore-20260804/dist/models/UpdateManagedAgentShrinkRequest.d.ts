import * as $dara from '@darabonba/typescript';
export declare class UpdateManagedAgentShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The request body.
     */
    bodyShrink?: string;
    /**
     * @remarks
     * The reserved query parameter. The backend does not currently provide idempotency guarantees for deduplication or result recovery based on this token.
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
