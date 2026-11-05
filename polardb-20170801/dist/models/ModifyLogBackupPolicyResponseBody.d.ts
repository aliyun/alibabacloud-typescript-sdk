import * as $dara from '@darabonba/typescript';
export declare class ModifyLogBackupPolicyResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 345174B4-FAB3-412E-A326-BEDDA9******
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
