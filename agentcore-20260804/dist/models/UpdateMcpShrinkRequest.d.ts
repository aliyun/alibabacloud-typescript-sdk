import * as $dara from '@darabonba/typescript';
export declare class UpdateMcpShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The request body.
     */
    bodyShrink?: string;
    /**
     * @remarks
     * The client token used to ensure the idempotency of the request.
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
