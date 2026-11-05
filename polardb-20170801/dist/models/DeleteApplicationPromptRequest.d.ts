import * as $dara from '@darabonba/typescript';
export declare class DeleteApplicationPromptRequest extends $dara.Model {
    /**
     * @remarks
     * The Application ID.
     *
     * This parameter is required.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The Prompt ID.
     *
     * This parameter is required.
     *
     * @example
     * papt-f9lajgw765f4fnrzn1
     */
    promptId?: string;
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
