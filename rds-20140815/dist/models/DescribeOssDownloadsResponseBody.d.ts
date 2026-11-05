import * as $dara from '@darabonba/typescript';
export declare class DescribeOssDownloadsResponseBodyItemsOssDownload extends $dara.Model {
    backupMode?: string;
    createTime?: string;
    description?: string;
    endTime?: string;
    fileName?: string;
    fileSize?: string;
    isAvailable?: string;
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
export declare class DescribeOssDownloadsResponseBodyItems extends $dara.Model {
    ossDownload?: DescribeOssDownloadsResponseBodyItemsOssDownload[];
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
export declare class DescribeOssDownloadsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceId?: string;
    items?: DescribeOssDownloadsResponseBodyItems;
    /**
     * @remarks
     * The ID of the migration task.
     *
     * @example
     * 562154852
     */
    migrateTaskId?: string;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * A5409D02-D661-4BF3-8F3D-0A814D0574E7
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
