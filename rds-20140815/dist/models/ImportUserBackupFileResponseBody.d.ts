import * as $dara from '@darabonba/typescript';
export declare class ImportUserBackupFileResponseBody extends $dara.Model {
    /**
     * @remarks
     * The ID of the user backup.
     *
     * @example
     * b-n8tpg24c6i0v****
     *
     * **if can be null:**
     * true
     */
    backupId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * A140DD14-DCC9-4548-9C72-52A49A58A310
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the user backup is imported. If the import is successful, **true** is returned. Otherwise, an error message is returned.
     *
     * @example
     * true
     */
    status?: boolean;
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
