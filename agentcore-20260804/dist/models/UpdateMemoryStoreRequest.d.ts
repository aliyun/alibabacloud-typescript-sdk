import * as $dara from '@darabonba/typescript';
export declare class UpdateMemoryStoreRequestBody extends $dara.Model {
    /**
     * @remarks
     * The description of the memory store. Maximum length: 1,024 characters.
     *
     * @example
     * Memory store used to save long-term customer preferences
     */
    description?: string;
    /**
     * @remarks
     * The custom memory extraction instructions. Maximum length: 4,096 characters.
     *
     * @example
     * Extract only long-term preferences explicitly expressed by the user
     */
    extractInstructions?: string;
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
export declare class UpdateMemoryStoreRequest extends $dara.Model {
    /**
     * @remarks
     * The update memory store request.
     *
     * This parameter is required.
     */
    body?: UpdateMemoryStoreRequestBody;
    /**
     * @remarks
     * The client request token.
     *
     * @example
     * memory-store-update-20260909-001
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
