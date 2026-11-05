import * as $dara from '@darabonba/typescript';
export declare class CheckRegionSupportBackupEncryptionResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 081FAAD5-9E56-5BE7-A495-*******
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether backup encryption is supported. Valid values: true and false.
     *
     * @example
     * true
     */
    supportBackupEncryption?: boolean;
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
