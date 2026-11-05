import * as $dara from '@darabonba/typescript';
export declare class ConvertMcpToFreeEditRequest extends $dara.Model {
    /**
     * @remarks
     * The client token that is used to ensure request idempotence.
     *
     * @example
     * 123e4567-e89b-12d3-a456-426655440000
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
