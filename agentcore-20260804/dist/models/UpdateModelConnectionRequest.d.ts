import * as $dara from '@darabonba/typescript';
export declare class UpdateModelConnectionRequestBody extends $dara.Model {
    /**
     * @remarks
     * The list of API keys used to access the upstream model service. The list must contain at least one non-empty value. When submitted, the new list completely replaces all existing keys. If this parameter is omitted or set to null, the original key list is retained.
     */
    apiKeys?: string[];
    /**
     * @remarks
     * The description of the model connection, which can be up to 255 characters in length.
     *
     * @example
     * description
     */
    description?: string;
    /**
     * @remarks
     * The absolute HTTP or HTTPS URL of the upstream model service, which can be up to 1,024 characters in length.
     *
     * @example
     * https://dashscope.aliyuncs.com/compatible-mode/v1
     */
    endpoint?: string;
    /**
     * @remarks
     * The name of the model connection, which must be 1 to 128 non-whitespace characters in length.
     *
     * @example
     * name
     */
    name?: string;
    /**
     * @remarks
     * The model invoke protocol. Currently, only OpenAI/v1 is supported. If Settings are not specified during model creation, this default value is used.
     *
     * @example
     * OpenAI/v1
     */
    protocol?: string;
    /**
     * @remarks
     * The model provider type. Predefined providers can be queried by calling [ListPredefinedModelProviders](https://api.aliyun.com/document/AgentCore/2026-08-04/ListPredefinedModelProviders). Additionally, custom, anthropic, and gemini are supported.
     *
     * @example
     * qwen
     */
    providerType?: string;
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
export declare class UpdateModelConnectionRequest extends $dara.Model {
    /**
     * @remarks
     * The request body.
     */
    body?: UpdateModelConnectionRequestBody;
    /**
     * @remarks
     * The client token used for idempotence. This parameter is not currently supported.
     *
     * @example
     * client-token-1
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
