import * as $dara from '@darabonba/typescript';
export declare class ConvertMcpToFreeEditRequest extends $dara.Model {
    /**
     * @remarks
     * The reserved query request identifier. The console backend does not read this parameter and does not provide idempotency guarantees, such as deduplication or restoration of the original processing result, based on this identifier.
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
