import * as $dara from '@darabonba/typescript';
export declare class CheckBackupEncryptionAuthorizedResponseBody extends $dara.Model {
    /**
     * @remarks
     * Indicates whether the account is authorized. Valid values:
     * * 0: Not authorized.
     * * 1: Authorized.
     *
     * @example
     * 1
     */
    authorizationState?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * CB07C463-7428-50AA-9E39-********
     */
    requestId?: string;
    /**
     * @remarks
     * The ARN of the backup encryption service-linked role.
     *
     * @example
     * acs:ram::1139916************:role/AliyunServiceRoleForRdsBackupEncryption
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
