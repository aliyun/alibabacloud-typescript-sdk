import * as $dara from '@darabonba/typescript';
export declare class DeleteAIDBClusterCustomModelResponseBody extends $dara.Model {
    /**
     * @remarks
     * Indicates whether the deletion was successful.
     *
     * @example
     * true
     */
    deleted?: boolean;
    /**
     * @remarks
     * The ID of the deleted model registration.
     *
     * @example
     * 123456
     */
    modelId?: number;
    /**
     * @remarks
     * The key of the deleted custom model registration.
     *
     * @example
     * Qwen3-32B
     */
    modelName?: string;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 3AA6E0E4-1234-5678-90AB-1234567890AB
     */
    requestId?: string;
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
