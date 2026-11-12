import * as $dara from '@darabonba/typescript';
export declare class UpdateMcpShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The request body.
     */
    bodyShrink?: string;
    /**
     * @remarks
     * The reserved query request identifier. The current console backend does not read this parameter and does not provide idempotency guarantees for deduplication or restoring the original acceptance result based on this identifier.
     *
     * @example
     * 123e4567-e89b-12d3-a456-426614174000
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
