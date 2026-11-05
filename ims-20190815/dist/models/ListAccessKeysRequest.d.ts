import * as $dara from '@darabonba/typescript';
export declare class ListAccessKeysRequest extends $dara.Model {
    /**
     * @remarks
     * The logon name of the RAM user.
     *
     * If this parameter is empty, the AccessKey pairs of the current user are queried.
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
