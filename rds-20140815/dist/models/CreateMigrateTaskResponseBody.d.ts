import * as $dara from '@darabonba/typescript';
export declare class CreateMigrateTaskResponseBody extends $dara.Model {
    /**
     * @remarks
     * The type of the cloud migration task. Valid values:
     * * **FULL**: restores data by using a full backup file.
     * * **UPDF**: restores incremental data by using an incremental backup file or log file.
     *
     * @example
     * FULL
     */
    backupMode?: string;
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The name of the database.
     *
     * @example
     * test02
     */
    DBName?: string;
    /**
     * @remarks
     * The ID of the migration task.
     *
     * @example
     * 564563****
     */
    migrateTaskId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 866F5EB8-4650-4061-87F0-379F6F968BCE
     */
    requestId?: string;
    /**
     * @remarks
     * The task ID.
     *
     * @example
     * 545****
     */
    taskId?: string;
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
