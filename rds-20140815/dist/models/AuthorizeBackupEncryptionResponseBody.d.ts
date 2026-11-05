import * as $dara from '@darabonba/typescript';
export declare class AuthorizeBackupEncryptionResponseBody extends $dara.Model {
    /**
     * @remarks
     * The authorization status of the account. Valid values:
     * - 0: Not authorized.
     * - 1: Authorized.
     *
     * @example
     * 1
     */
    authorizationState?: number;
    /**
     * @remarks
     * The error message.
     *
     * @example
     * create backup encrypt service linked role error.
     */
    message?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 1A1DD2A4-69F7-5848-AD56-********
     */
    requestId?: string;
    /**
     * @remarks
     * The ARN of the service-linked role for backup encryption.
     *
     * @example
     * acs:ram::113991************:role/AliyunServiceRoleForRdsBackupEncryption
     */
    roleARN?: string;
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
