import * as $dara from '@darabonba/typescript';
export declare class AuthorizeRCSecurityGroupPermissionResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 0688F1D2-CDA8-5617-A43C-ADAC61D80D43
     */
    requestId?: string;
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
