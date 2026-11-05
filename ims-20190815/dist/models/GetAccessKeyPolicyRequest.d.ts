import * as $dara from '@darabonba/typescript';
export declare class GetAccessKeyPolicyRequest extends $dara.Model {
    /**
     * @remarks
     * The access key ID.
     *
     * This parameter is required.
     *
     * @example
     * LTAI*******************
     */
    userAccessKeyId?: string;
    /**
     * @remarks
     * The logon name of the RAM user.
     *
     * If this parameter is left empty, the network access restriction policy of the specified access key for the current user is returned by default.
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
