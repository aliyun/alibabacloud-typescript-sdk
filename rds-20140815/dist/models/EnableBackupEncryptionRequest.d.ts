import * as $dara from '@darabonba/typescript';
export declare class EnableBackupEncryptionRequest extends $dara.Model {
    /**
     * @remarks
     * The instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-wz951f7f******
     */
    DBInstanceName?: string;
    /**
     * @remarks
     * The backup encryption key.
     *
     * @example
     * 564cf6c4-d2ee-495b-b265-5724******
     */
    encryptionKey?: string;
    resourceOwnerId?: number;
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
