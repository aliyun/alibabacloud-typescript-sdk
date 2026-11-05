import * as $dara from '@darabonba/typescript';
export declare class ListPasskeysResponseBodyPasskeys extends $dara.Model {
    /**
     * @remarks
     * The time when the passkey was created. The value is a timestamp.
     *
     * @example
     * 1737450279
     */
    createDate?: string;
    /**
     * @remarks
     * The time when the passkey was last used. The value is a timestamp.
     *
     * @example
     * 1737450390
     */
    lastUseDate?: string;
    /**
     * @remarks
     * The ID of the passkey.
     *
     * @example
     * PASSKEY-CuZjEHhWcr7GIQOMGvkS
     */
    passkeyId?: string;
    /**
     * @remarks
     * The name of the passkey.
     *
     * @example
     * device1
     */
    passkeyName?: string;
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
export declare class ListPasskeysResponseBody extends $dara.Model {
    /**
     * @remarks
     * The information about the passkeys.
     */
    passkeys?: ListPasskeysResponseBodyPasskeys[];
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 04F0F334-1335-436C-A1D7-6C044FE73368
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
