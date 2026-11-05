import * as $dara from '@darabonba/typescript';
export declare class GetAccessKeyInfoInRecycleBinRequest extends $dara.Model {
    /**
     * @remarks
     * The access key ID of the Resource Access Management (RAM) user.
     *
     * This parameter is required.
     *
     * @example
     * LTAI*******************
     */
    userAccessKeyId?: string;
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
