import * as $dara from '@darabonba/typescript';
export declare class UpdateMemoryRequestBody extends $dara.Model {
    /**
     * @remarks
     * The updated string key-value metadata. You must provide at least one of Metadata or Text. A maximum of 16 keys are allowed. The maximum length of a key is 64 characters, and the maximum length of a value is 1,024 characters.
     */
    metadata?: {
        [key: string]: string;
    };
    /**
     * @remarks
     * The updated memory text. You must provide at least one of Text or Metadata. The maximum size is 32,000 UTF-8 bytes.
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
     * The update memory request.
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
