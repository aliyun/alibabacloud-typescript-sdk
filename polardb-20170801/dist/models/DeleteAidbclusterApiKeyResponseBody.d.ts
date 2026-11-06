import * as $dara from '@darabonba/typescript';
export declare class DeleteAIDBClusterApiKeyResponseBody extends $dara.Model {
    /**
     * @remarks
     * The API key for the model service.
     *
     * @example
     * 6c4b1f0317cd4fd7a5b446d3503d**
     */
    apiKey?: string;
    /**
     * @remarks
     * The request ID.
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
