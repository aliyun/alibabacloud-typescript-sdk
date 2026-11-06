import * as $dara from '@darabonba/typescript';
export declare class UpdateModelShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The model update request body. At least one of the description, contextSize, maxTokens, and capabilities parameters must be non-null.
     */
    bodyShrink?: string;
    /**
     * @remarks
     * The client token used for idempotence. This parameter is not supported.
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
