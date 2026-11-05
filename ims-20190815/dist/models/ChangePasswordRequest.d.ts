import * as $dara from '@darabonba/typescript';
export declare class ChangePasswordRequest extends $dara.Model {
    /**
     * @remarks
     * The new password that is used to log on to the console.
     *
     * The password must meet the complexity requirements. For more information, see [GetPasswordPolicy](https://help.aliyun.com/document_detail/186691.html).
     *
     * This parameter is required.
     *
     * @example
     * newpassword
     */
    newPassword?: string;
    /**
     * @remarks
     * The old password that is used to log on to the console.
     *
     * This parameter is required.
     *
     * @example
     * mypassword
     */
    oldPassword?: string;
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
