import * as $dara from '@darabonba/typescript';
export declare class DescribeBackupTasksResponseBodyItemsBackupJob extends $dara.Model {
    backupId?: string;
    backupJobId?: string;
    backupProgressStatus?: string;
    backupStatus?: string;
    jobMode?: string;
    process?: string;
    taskAction?: string;
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
export declare class DescribeBackupTasksResponseBodyItems extends $dara.Model {
    backupJob?: DescribeBackupTasksResponseBodyItemsBackupJob[];
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
export declare class DescribeBackupTasksResponseBody extends $dara.Model {
    items?: DescribeBackupTasksResponseBodyItems;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 90496720-2319-42A8-87CD-FCE4DF95EBED
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
