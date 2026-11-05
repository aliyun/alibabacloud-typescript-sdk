import * as $dara from '@darabonba/typescript';
export declare class UpdatePasskeyRequest extends $dara.Model {
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
    /**
     * @remarks
     * The logon name of the Resource Access Management (RAM) user.
     *
     * @example
     * test@example.onaliyun.com
     */
    userPrincipalName?: string;
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
