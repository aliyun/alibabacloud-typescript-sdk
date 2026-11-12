import * as $dara from '@darabonba/typescript';
export declare class ModifyApplicationPromptResponseBody extends $dara.Model {
    /**
     * @remarks
     * The prompt ID.
     *
     * @example
     * papt-f9lajgw765f4fnrzn1
     */
    promptId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 7E2FE3BB-C677-5FF9-9FC5-9CF364BD6BE5
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
