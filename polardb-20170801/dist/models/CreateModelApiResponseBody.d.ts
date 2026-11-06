import * as $dara from '@darabonba/typescript';
export declare class CreateModelApiResponseBody extends $dara.Model {
    /**
     * @remarks
     * The invocation endpoint.
     *
     * @example
     * https://model-api.example.com/v1/chat/completions
     */
    invokeEndpoint?: string;
    /**
     * @remarks
     * The model API ID.
     *
     * @example
     * mi-xxxxxx
     */
    modelApiId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 6BD9CDE4-5E7B-4BF3-9BB8-83C73E******
     */
    requestId?: string;
    /**
     * @remarks
     * The status of the model API.
     *
     * @example
     * Enable
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
