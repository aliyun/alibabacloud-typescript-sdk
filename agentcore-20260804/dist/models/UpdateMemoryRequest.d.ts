import * as $dara from '@darabonba/typescript';
export declare class UpdateMemoryRequestBody extends $dara.Model {
    /**
     * @remarks
     * The updated string key-value metadata. Provide at least one of Text or Metadata. A maximum of 16 keys are allowed. The maximum length is 64 characters for a key and 1,024 characters for a value.
     *
     * @example
     * {"topic":"hiking"}
     */
    metadata?: {
        [key: string]: string;
    };
    /**
     * @remarks
     * The updated memory text. Provide at least one of Text or Metadata. The size cannot exceed 32,000 UTF-8 bytes.
     *
     * @example
     * The user enjoys hiking on weekends
     */
    text?: string;
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
export declare class UpdateMemoryRequest extends $dara.Model {
    /**
     * @remarks
     * The request to update a memory.
     *
     * This parameter is required.
     */
    body?: UpdateMemoryRequestBody;
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
