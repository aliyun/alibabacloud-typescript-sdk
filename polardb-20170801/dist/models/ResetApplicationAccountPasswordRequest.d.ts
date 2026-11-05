import * as $dara from '@darabonba/typescript';
export declare class ResetApplicationAccountPasswordRequest extends $dara.Model {
    /**
     * @remarks
     * The account name.
     *
     * This parameter is required.
     *
     * @example
     * mcp_user
     */
    accountName?: string;
    /**
     * @remarks
     * The application ID.
     *
     * This parameter is required.
     *
     * @example
     * pa-bp1abcdef1234567
     */
    applicationId?: string;
    /**
     * @remarks
     * The new password.
     *
     * This parameter is required.
     *
     * @example
     * Pw123456
     */
    newAccountPassword?: string;
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
