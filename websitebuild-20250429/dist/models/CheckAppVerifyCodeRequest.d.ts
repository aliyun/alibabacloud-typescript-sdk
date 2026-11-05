import * as $dara from '@darabonba/typescript';
export declare class CheckAppVerifyCodeRequest extends $dara.Model {
    /**
     * @remarks
     * The business ID.
     *
     * @example
     * WD20250703155602000001
     */
    bizId?: string;
    /**
     * @remarks
     * The verification code.
     *
     * @example
     * OK
     */
    code?: string;
    /**
     * @remarks
     * The phone number or email address.
     *
     * @example
     * docker.io
     */
    target?: string;
    /**
     * @remarks
     * The recipient type: phone or email.
     *
     * @example
     * question
     */
    type?: string;
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
