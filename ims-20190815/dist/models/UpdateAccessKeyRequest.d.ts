import * as $dara from '@darabonba/typescript';
export declare class UpdateAccessKeyRequest extends $dara.Model {
    /**
     * @remarks
     * The status of the AccessKey pair. Valid values:
     *
     * - Active
     *
     * - Inactive
     *
     * This parameter is required.
     *
     * @example
     * Active
     */
    status?: string;
    /**
     * @remarks
     * The AccessKey ID of the AccessKey pair for which you want to modify the status.
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
     * If this parameter is empty, the status of the AccessKey pair for the current user is modified.
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
