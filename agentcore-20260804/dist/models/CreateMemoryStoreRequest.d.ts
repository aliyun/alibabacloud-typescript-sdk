import * as $dara from '@darabonba/typescript';
export declare class CreateMemoryStoreRequestBody extends $dara.Model {
    /**
     * @remarks
     * The description of the memory store. The description can be up to 1,024 characters in length.
     *
     * @example
     * Used to store long-term user preferences
     */
    description?: string;
    /**
     * @remarks
     * The custom extraction instructions. The instructions can be up to 4,096 characters in length.
     *
     * @example
     * Extract only long-term preferences explicitly expressed by the user
     */
    extractInstructions?: string;
    /**
     * @remarks
     * The name of the memory store. The name must be 1 to 64 characters in length and can contain only lowercase letters, digits, and hyphens (-). The name cannot be modified after creation.
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
     * The request to create a memory store.
     *
     * This parameter is required.
     */
    body?: CreateMemoryStoreRequestBody;
    /**
     * @remarks
     * The client request token.
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
