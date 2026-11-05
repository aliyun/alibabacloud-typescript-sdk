import * as $dara from '@darabonba/typescript';
export declare class CreateMemoryStoreShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The MemoryStore creation request.
     *
     * This parameter is required.
     */
    bodyShrink?: string;
    /**
     * @remarks
     * The client token.
     *
     * @example
     * memory-store-create-20260909-001
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
