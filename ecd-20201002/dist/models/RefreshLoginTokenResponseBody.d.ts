import * as $dara from '@darabonba/typescript';
export declare class RefreshLoginTokenResponseBody extends $dara.Model {
    /**
     * @remarks
     * The logon credential.
     *
     * @example
     * v1c27bab6c205b2fdfac916434306375722776d6aa89e30b7836d18c95ade9137f0f5ac4325260782184e96ee2b3f0****
     */
    loginToken?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
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
