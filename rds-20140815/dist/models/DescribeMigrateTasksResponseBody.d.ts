import * as $dara from '@darabonba/typescript';
export declare class DescribeMigrateTasksResponseBodyItemsMigrateTask extends $dara.Model {
    backupMode?: string;
    createTime?: string;
    DBName?: string;
    description?: string;
    endTime?: string;
    isDBReplaced?: string;
    migrateTaskId?: string;
    status?: string;
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
export declare class DescribeMigrateTasksResponseBodyItems extends $dara.Model {
    migrateTask?: DescribeMigrateTasksResponseBodyItemsMigrateTask[];
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
export declare class DescribeMigrateTasksResponseBody extends $dara.Model {
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceId?: string;
    items?: DescribeMigrateTasksResponseBodyItems;
    /**
     * @remarks
     * The number of the returned page.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries returned per page.
     *
     * @example
     * 10
     */
    pageRecordCount?: number;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 4E356DDF-6B83-45DB-99D5-4B1E8A0D286B
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of entries that meet the query conditions.
     *
     * @example
     * 30
     */
    totalRecordCount?: number;
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
