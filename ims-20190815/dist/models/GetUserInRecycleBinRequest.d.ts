import * as $dara from '@darabonba/typescript';
export declare class GetUserInRecycleBinRequest extends $dara.Model {
    /**
     * @remarks
     * The AccessKey ID of the RAM user.
     *
     * > You must specify only one of the following parameters: `UserId` and `UserAccessKeyId`.
     *
     * @example
     * LTAI*******************
     */
    userAccessKeyId?: string;
    /**
     * @remarks
     * The ID of the RAM user.
     *
     * > You must specify only one of the following parameters: `UserId` and `UserAccessKeyId`.
     *
     * @example
     * 20732900249392****
     */
    userId?: string;
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
