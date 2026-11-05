import * as $dara from '@darabonba/typescript';
export declare class LockAccountResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 1B291C4B-DDCD-4D0A-8F6D-7F3241DE9228
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
