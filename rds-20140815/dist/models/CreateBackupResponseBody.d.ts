import * as $dara from '@darabonba/typescript';
export declare class CreateBackupResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the backup task.
     *
     * @example
     * 507****
     */
    backupJobId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 2C125605-266F-41CA-8AC5-3A643D4F42C5
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
