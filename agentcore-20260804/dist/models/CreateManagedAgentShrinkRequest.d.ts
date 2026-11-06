import * as $dara from '@darabonba/typescript';
export declare class CreateManagedAgentShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The request body.
     */
    bodyShrink?: string;
    /**
     * @remarks
     * A reserved query parameter. The backend currently does not provide idempotency guarantees for deduplication or recovering original acceptance results based on this token.
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
