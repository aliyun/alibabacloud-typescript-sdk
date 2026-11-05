import * as $dara from '@darabonba/typescript';
export declare class ListPasskeysRequest extends $dara.Model {
    /**
     * @remarks
     * The logon name of the RAM user.
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
