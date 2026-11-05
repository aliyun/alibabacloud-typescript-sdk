import * as $dara from '@darabonba/typescript';
export declare class DeleteUserBackupFileResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the deleted user backup.
     *
     * @example
     * b-w1haya7e4i25****
     */
    backupId?: string;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * F28AE40B-203B-4CFE-B81F-FD981CD97B17
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
