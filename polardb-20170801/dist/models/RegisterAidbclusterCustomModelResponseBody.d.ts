import * as $dara from '@darabonba/typescript';
export declare class RegisterAIDBClusterCustomModelResponseBody extends $dara.Model {
    /**
     * @remarks
     * Indicates whether a new registration is created. A value of false indicates that an existing registration is updated.
     *
     * @example
     * true
     */
    created?: boolean;
    /**
     * @remarks
     * The display name and the initial client invocation name.
     *
     * @example
     * my-qwen3
     */
    displayModelName?: string;
    /**
     * @remarks
     * The import status of the image. The initial value is Importing after the image is registered.
     *
     * @example
     * Importing
     */
    imageImportStatus?: string;
    /**
     * @remarks
     * The ID of the model registration.
     *
     * @example
     * 123456
     */
    modelId?: number;
    /**
     * @remarks
     * The registration key of the custom model.
     *
     * @example
     * Qwen3-32B
     */
    modelName?: string;
    /**
     * @remarks
     * The type of the model.
     *
     * @example
     * custom
     */
    modelType?: string;
    /**
     * @remarks
     * The normalized OSS path.
     *
     * @example
     * /my-model-bucket/models/qwen3
     */
    ossPath?: string;
    /**
     * @remarks
     * The ID of the request.
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
