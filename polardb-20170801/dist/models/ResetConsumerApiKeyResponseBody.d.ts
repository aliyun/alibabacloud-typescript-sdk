import * as $dara from '@darabonba/typescript';
export declare class ResetConsumerApiKeyResponseBody extends $dara.Model {
    /**
     * @remarks
     * The complete API key, which is returned only in this response.
     *
     * @example
     * xxx
     */
    apiKey?: string;
    /**
     * @remarks
     * The user ID.
     *
     * @example
     * c-mqveroemc***
     */
    consumerId?: string;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 3AA69096-757C-4647-B36C-29EBC2******
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
