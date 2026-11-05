import * as $dara from '@darabonba/typescript';
export declare class CreateMemoryStoreRequestBody extends $dara.Model {
    /**
     * @remarks
     * The description of the MemoryStore. Maximum length: 1,024 characters.
     *
     * @example
     * Used to store long-term user preferences
     */
    description?: string;
    /**
     * @remarks
     * The custom extraction instructions. Maximum length: 4,096 characters.
     *
     * @example
     * Extract only explicitly expressed long-term user preferences
     */
    extractInstructions?: string;
    /**
     * @remarks
     * The name of the MemoryStore. The name must be 1 to 64 characters in length and can contain only lowercase letters, digits, and hyphens (-). The name cannot be modified after creation.
     *
     * This parameter is required.
     *
     * @example
     * customer-memory
     */
    memoryStoreName?: string;
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
export declare class CreateMemoryStoreRequest extends $dara.Model {
    /**
     * @remarks
     * The MemoryStore creation request.
     *
     * This parameter is required.
     */
    body?: CreateMemoryStoreRequestBody;
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
