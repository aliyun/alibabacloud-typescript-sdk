import * as $dara from '@darabonba/typescript';
export declare class ModifyApplicationPromptRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the application.
     *
     * This parameter is required.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The ID of the prompt.
     *
     * This parameter is required.
     *
     * @example
     * papt-f9lajgw765f4fnrzn1
     */
    promptId?: string;
    /**
     * @remarks
     * The name of the prompt.
     *
     * @example
     * prompt name
     */
    promptName?: string;
    /**
     * @remarks
     * The content of the prompt.
     *
     * @example
     * prompt value
     */
    promptValue?: string;
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
