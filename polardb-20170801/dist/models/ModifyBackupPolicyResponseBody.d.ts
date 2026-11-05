import * as $dara from '@darabonba/typescript';
export declare class ModifyBackupPolicyResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * C5A5DF0E-5968-4DC1-882E-AC2FE7******
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
