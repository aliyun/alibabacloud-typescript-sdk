import * as $dara from '@darabonba/typescript';
export declare class EncryptPasswordResponseBody extends $dara.Model {
    /**
     * @remarks
     * The encrypted password.
     *
     * @example
     * d34601bc-e6b1-4433-b0cc-8f6c5e52;n4apvGub3OBoj4Grwg==;thhO4UEomJfdvwnwlA==
     */
    encryptedPassword?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * AF538DA8-FFC6-52DA-8FF8-7B92579F****
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
