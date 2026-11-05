import * as $dara from '@darabonba/typescript';
export declare class GetAccessKeyInfoInRecycleBinResponseBodyAccessKey extends $dara.Model {
    /**
     * @remarks
     * The access key ID.
     *
     * @example
     * LTAI*******************
     */
    accessKeyId?: string;
    /**
     * @remarks
     * The time when the access key was created.
     *
     * Format: RFC 3339 (UTC). Example: 2020-10-12T09:12:00Z.
     *
     * @example
     * 2020-10-12T09:12:00Z
     */
    createDate?: string;
    /**
     * @remarks
     * The time when the access key will be permanently deleted from the recycle bin.
     *
     * Format: RFC 3339 (UTC). Example: 2020-11-12T10:12:00Z.
     *
     * @example
     * 2020-11-12T10:12:00Z
     */
    deleteDate?: string;
    /**
     * @remarks
     * The time when the access key was deleted and moved to the recycle bin.
     *
     * Format: RFC 3339 (UTC). Example: 2020-10-12T10:12:00Z.
     *
     * @example
     * 2020-10-12T10:12:00Z
     */
    recycleDate?: string;
    /**
     * @remarks
     * The ID of the Resource Access Management (RAM) user.
     *
     * @example
     * 20732900249392****
     */
    userId?: string;
    /**
     * @remarks
     * The logon name of the Resource Access Management (RAM) user.
     *
     * @example
     * test@example.onaliyun.com
     */
    userPrincipalName?: string;
    /**
     * @remarks
     * Indicates whether the Resource Access Management (RAM) user to which the access key belongs is revoked. Valid values:
     *
     * - true: The Resource Access Management (RAM) user is revoked.
     * - false: The Resource Access Management (RAM) user is not revoked.
     *
     * @example
     * true
     */
    userRecycled?: boolean;
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
export declare class GetAccessKeyInfoInRecycleBinResponseBody extends $dara.Model {
    /**
     * @remarks
     * The access key information.
     */
    accessKey?: GetAccessKeyInfoInRecycleBinResponseBodyAccessKey;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 4507D1CD-526A-4E2B-A1E2-3AB045D1EE0B
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
