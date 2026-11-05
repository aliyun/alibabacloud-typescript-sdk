import * as $dara from '@darabonba/typescript';
export declare class ModifyAccountMaskingPrivilegeResponseBody extends $dara.Model {
    /**
     * @remarks
     * The returned data.
     */
    data?: {
        [key: string]: string;
    };
    /**
     * @remarks
     * The returned message.
     *
     * @example
     * successful
     */
    message?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 2144F5CC-10C5-3B72-8C74-E52C********
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the operation is successful.
     *
     * @example
     * true
     */
    success?: string;
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
