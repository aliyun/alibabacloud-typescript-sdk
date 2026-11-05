import * as $dara from '@darabonba/typescript';
export declare class ResetPasswordResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * A00477A5-167F-56D2-A315-EA77E4BD****
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
