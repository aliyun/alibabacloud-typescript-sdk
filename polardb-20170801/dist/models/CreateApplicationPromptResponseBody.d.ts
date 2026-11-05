import * as $dara from '@darabonba/typescript';
export declare class CreateApplicationPromptResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the Prompt.
     *
     * @example
     * papt-f9lajgw765f4fnrzn1
     */
    promptId?: string;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 6BD9CDE4-5E7B-4BF3-9BB8-83C73E******
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
