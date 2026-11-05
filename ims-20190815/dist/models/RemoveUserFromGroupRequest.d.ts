import * as $dara from '@darabonba/typescript';
export declare class RemoveUserFromGroupRequest extends $dara.Model {
    /**
     * @remarks
     * The name of the RAM user group.
     *
     * @example
     * Test-Team
     */
    groupName?: string;
    /**
     * @remarks
     * The logon name of the RAM user.
     *
     * This parameter is required.
     *
     * @example
     * alice@example.onaliyun.com
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
