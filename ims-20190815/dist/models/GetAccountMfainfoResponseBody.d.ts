import * as $dara from '@darabonba/typescript';
export declare class GetAccountMFAInfoResponseBody extends $dara.Model {
    /**
     * @remarks
     * Indicates whether MFA devices are enabled. Valid values:
     *
     * - true
     *
     * - false
     *
     * @example
     * false
     */
    isMFAEnable?: boolean;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 4BE83135-0B08-467C-B3A2-27B312FD0F57
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
