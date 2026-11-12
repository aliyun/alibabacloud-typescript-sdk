import * as $dara from '@darabonba/typescript';
export declare class GetPolarClawConfigResponseBody extends $dara.Model {
    /**
     * @remarks
     * The application ID.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The response status code.
     *
     * @example
     * 200
     */
    code?: number;
    /**
     * @remarks
     * The configuration.
     *
     * @example
     * {
     *     "models": "{\\"mode\\":\\"merge\\",\\"providers\\":{\\"bailian\\":{\\"models\\":[{\\"input\\":[\\"text\\",\\"image\\"],\\"name\\":\\"qwen3.6-plus\\",\\"api\\":\\"openai-completions\\",\\"id\\":\\"qwen3.6-plus\\",\\"compat\\":{\\"supportsUsageInStreaming\\":true}}],\\"baseUrl\\":\\"https://dashscope.aliyuncs.com/compatible-mode/v1\\",\\"apiKey\\":\\"__OPENCLAW_REDACTED__\\",\\"api\\":\\"openai-completions\\"},\\"polardbCustom\\":{\\"models\\":[{\\"name\\":\\"qwen3-max\\",\\"api\\":\\"openai-completions\\",\\"id\\":\\"qwen3-max\\"}],\\"baseUrl\\":\\"https://dashscope.aliyuncs.com/compatible-mode/v1\\",\\"apiKey\\":\\"__OPENCLAW_REDACTED__\\",\\"api\\":\\"openai-completions\\"},\\"polardb\\":{\\"models\\":[],\\"baseUrl\\":\\"https://dashscope.aliyuncs.com/compatible-mode/v1\\",\\"api\\":\\"openai-completions\\"}}}"
     * }
     */
    config?: {
        [key: string]: any;
    };
    /**
     * @remarks
     * The configuration hash, which is used as an optimistic lock for subsequent patch operations.
     *
     * @example
     * 005b55a8e870aaf866598e48a6af0bdbfa3fef704770c5e1cbad99648beaa661
     */
    hash?: string;
    /**
     * @remarks
     * The response message.
     *
     * @example
     * successful
     */
    message?: string;
    /**
     * @remarks
     * The OpenClaw version.
     *
     * @example
     * 2026.3.28
     */
    openclawVersion?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * CD3FA5F3-FAF3-44CA-AFFF-BAF869******
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
