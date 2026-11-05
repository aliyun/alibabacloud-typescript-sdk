import * as $dara from '@darabonba/typescript';
export declare class DeletePasskeyRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the passkey.
     *
     * This parameter is actually required. If you do not specify this parameter, the call fails and the error code `MissingPasskeyId` is returned.
     *
     * @example
     * PASSKEY-CuZjEHhWcr7GIQOMGvkS
     */
    passkeyId?: string;
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
