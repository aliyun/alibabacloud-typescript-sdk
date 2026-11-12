import * as $dara from '@darabonba/typescript';
export declare class DeleteApplicationPromptResponseBody extends $dara.Model {
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
     * 3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF
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
