import * as $dara from '@darabonba/typescript';
export declare class EnableBackupEncryptionResponseBody extends $dara.Model {
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rm-wz951f7f******
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * FCA65FA6-658A-5C43-96F4-D************
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
