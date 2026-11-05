import * as $dara from '@darabonba/typescript';
export declare class CreateAIDBClusterApiKeyResponseBodyApiKey extends $dara.Model {
    /**
     * @remarks
     * The API key for model serving.
     *
     * @example
     * xxx
     */
    apiKey?: string;
    /**
     * @remarks
     * The time when the API key was created.
     *
     * The time is in the ISO 8601 format in UTC (format: YYYY-MM-DDTHH:mm:ssZ).
     *
     * @example
     * 2026-06-12T03:41:53Z
     */
    createTime?: string;
    /**
     * @remarks
     * The description.
     *
     * @example
     * test
     */
    description?: string;
    /**
     * @remarks
     * id
     *
     * @example
     * 393
     */
    id?: string;
    /**
     * @remarks
     * The API key status.
     *
     * @example
     * active
     */
    status?: string;
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
export declare class CreateAIDBClusterApiKeyResponseBody extends $dara.Model {
    /**
     * @remarks
     * The API key.
     */
    apiKey?: CreateAIDBClusterApiKeyResponseBodyApiKey;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 2281C6C9-CBAB-1AFD-8400-670750CF6025_2212
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
