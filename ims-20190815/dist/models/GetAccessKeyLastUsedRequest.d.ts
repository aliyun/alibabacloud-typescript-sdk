import * as $dara from '@darabonba/typescript';
export declare class GetAccessKeyLastUsedRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the access key to query.
     *
     * This parameter is required.
     *
     * @example
     * LTAI*******************
     */
    userAccessKeyId?: string;
    /**
     * @remarks
     * The logon name of the Resource Access Management (RAM) user. If this parameter is left empty, the access keys of the current user are queried by default.
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
