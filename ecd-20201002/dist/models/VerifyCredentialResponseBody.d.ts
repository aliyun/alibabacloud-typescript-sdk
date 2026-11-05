import * as $dara from '@darabonba/typescript';
export declare class VerifyCredentialResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * D5F0BDFB-A229-5F1D-B790-33709D43****
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
