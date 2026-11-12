import * as $dara from '@darabonba/typescript';
export declare class CreateConsumerResponseBody extends $dara.Model {
    /**
     * @remarks
     * The complete API key. This value is returned only in this response.
     *
     * @example
     * 6c4b1f0317cd4fd7a5b446d3503d**
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
     * The key type. Default value: ApiKey. Currently, only ApiKey is supported.
     *
     * @example
     * ApiKey
     */
    keyType?: string;
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
