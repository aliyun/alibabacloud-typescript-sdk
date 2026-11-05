import * as $dara from '@darabonba/typescript';
export declare class RevokeAccountPrivilegeResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * E22099CA-A61E-4992-A0B7-CE82DC175626
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
