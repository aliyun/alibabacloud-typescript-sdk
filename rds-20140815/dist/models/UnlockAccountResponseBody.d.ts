import * as $dara from '@darabonba/typescript';
export declare class UnlockAccountResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * AA65190D-852A-4C9B-88DA-E92698CAA350
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
