import * as $dara from '@darabonba/typescript';
export declare class UpdateUserBackupFileResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the user backup.
     *
     * @example
     * b-lvn2365ev9f1****
     */
    backupId?: string;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 29EBB093-DBD8-5EEB-841D-E611B88CDE4B
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
