import * as $dara from '@darabonba/typescript';
export declare class DescribeBackupTasksResponseBodyItemsBackupJob extends $dara.Model {
    backupJobId?: string;
    backupProgressStatus?: string;
    jobMode?: string;
    process?: string;
    startTime?: string;
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
     * The request ID.
     *
     * @example
     * FA8C1EF1-E3D4-44D7-B809-823187******
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
