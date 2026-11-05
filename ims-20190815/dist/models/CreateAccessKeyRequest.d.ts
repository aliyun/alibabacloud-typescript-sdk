import * as $dara from '@darabonba/typescript';
export declare class CreateAccessKeyRequest extends $dara.Model {
    /**
     * @remarks
     * The logon name of the Resource Access Management (RAM) user. If this parameter is left empty, an access key is created for the current user by default.
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
