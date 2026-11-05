import * as $dara from '@darabonba/typescript';
export declare class DeleteApplicationResponseBody extends $dara.Model {
    /**
     * @remarks
     * The unique identifier for the API request.
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
