import * as $dara from '@darabonba/typescript';
export declare class RegisterAIDBClusterCustomModelShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The startup environment variables of the container. Variable names cannot be empty or contain whitespace. Variable values can be empty strings.
     *
     * @example
     * {"HF_HOME":"/cache/hf","EMPTY_VALUE":""}
     */
    containerEnvShrink?: string;
    /**
     * @remarks
     * The name of the OSS bucket.
     *
     * This parameter is required.
     *
     * @example
     * my-model-bucket
     */
    customOssBucketName?: string;
    /**
     * @remarks
     * The path of the model in the OSS bucket.
     *
     * This parameter is required.
     *
     * @example
     * models/qwen3
     */
    customOssBucketPath?: string;
    /**
     * @remarks
     * The GPU instance type used for model deployment. This parameter is required when configuring deployment parameters.
     *
     * @example
     * polardb.gpu.gn8is.4xlarge
     */
    DBInstanceClass?: string;
    /**
     * @remarks
     * The direct startup command for the model container.
     *
     * @example
     * python -m vllm.entrypoints.openai.api_server
     */
    directCommand?: string;
    /**
     * @remarks
     * The display name in the candidate list and the initial client invocation name.
     *
     * @example
     * my-qwen3
     */
    displayModelName?: string;
    /**
     * @remarks
     * The full reference of the custom inference image, in the format of registry/repository:tag.
     *
     * @example
     * registry.example.com/customer/model:v1
     */
    imageName?: string;
    /**
     * @remarks
     * The inference engine. This parameter is required when configuring deployment parameters. Valid values: vllm and sglang.
     *
     * @example
     * vllm
     */
    inferenceEngine?: string;
    /**
     * @remarks
     * The registration key and directory name of the custom model.
     *
     * This parameter is required.
     *
     * @example
     * Qwen3-32B
     */
    modelName?: string;
    /**
     * @remarks
     * The startup parameters of the model. Parameter keys must start with --.
     *
     * @example
     * {"--max-model-len":"32768"}
     */
    modelParamsShrink?: string;
    /**
     * @remarks
     * The region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    /**
     * @remarks
     * The password or temporary token for the image repository. This parameter is required when ImageName is specified.
     *
     * @example
     * temporary-token
     */
    registryPassword?: string;
    /**
     * @remarks
     * The username for the image repository. This parameter is required when ImageName is specified.
     *
     * @example
     * temporary-user
     */
    registryUsername?: string;
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
