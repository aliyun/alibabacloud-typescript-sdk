import * as $dara from '@darabonba/typescript';
export declare class CreateBackupResponseBody extends $dara.Model {
    /**
     * @remarks
     * The backup set ID.
     *
     * @example
     * 11111111
     */
    backupJobId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * F3322AFE-083E-4D77-A074-421301******
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
