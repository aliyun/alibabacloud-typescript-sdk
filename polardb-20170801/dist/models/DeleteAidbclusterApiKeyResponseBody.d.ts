import * as $dara from '@darabonba/typescript';
export declare class DeleteAIDBClusterApiKeyResponseBody extends $dara.Model {
    /**
     * @remarks
     * The API key of the model service.
     *
     * @example
     * xxx
     */
    apiKey?: string;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 068F730C-9130-596E-B696-5B4388C840DF
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
