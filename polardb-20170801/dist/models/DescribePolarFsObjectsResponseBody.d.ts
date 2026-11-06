import * as $dara from '@darabonba/typescript';
export declare class DescribePolarFsObjectsResponseBodyItems extends $dara.Model {
    /**
     * @remarks
     * The capacity.
     *
     * @example
     * 100
     */
    capacity?: string;
    /**
     * @remarks
     * The creation time. The value is a UNIX timestamp in seconds, and the time zone is UTC.
     *
     * @example
     * 1793809871
     */
    creationTime?: number;
    /**
     * @remarks
     * The last modified time. The value is a UNIX timestamp in seconds, and the time zone is UTC.
     *
     * @example
     * 1793809534
     */
    lastModified?: number;
    /**
     * @remarks
     * The real path of the symbolic link.
     *
     * @example
     * test
     */
    linkTarget?: string;
    /**
     * @remarks
     * The file system permissions.
     *
     * @example
     * 755
     */
    mode?: string;
    /**
     * @remarks
     * The number of hard links. The value is an integer. This field may not be returned for some entries.
     *
     * @example
     * 1
     */
    nlink?: number;
    /**
     * @remarks
     * The owner of the file or directory.
     *
     * @example
     * test
     */
    owner?: string;
    /**
     * @remarks
     * The absolute path of the directory.
     *
     * @example
     * /test
     */
    path?: string;
    /**
     * @remarks
     * The file type.
     *
     * @example
     * directory
     */
    type?: string;
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
export declare class DescribePolarFsObjectsResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of directory entries.
     */
    items?: DescribePolarFsObjectsResponseBodyItems[];
    /**
     * @remarks
     * The maximum number of records that can be displayed on the current page.
     *
     * @example
     * 30
     */
    pageRecordCount?: string;
    /**
     * @remarks
     * The number of records per page. Valid values: 30, 50, and 100. Default value: 30.
     *
     * @example
     * 30
     */
    pageSize?: string;
    /**
     * @remarks
     * The absolute path of the directory.
     *
     * @example
     * /test
     */
    path?: string;
    /**
     * @remarks
     * The PolarFS instance ID.
     *
     * @example
     * pfs-2ze0i7*****
     */
    polarFsInstanceId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * CDB3258F-B5DE-43C4-8935-CBA0CA******
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of records.
     *
     * @example
     * 50
     */
    totalRecordCount?: string;
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
