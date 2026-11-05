import * as $dara from '@darabonba/typescript';
export declare class DescribePolarFsMappingResponseBodyPathMappingItems extends $dara.Model {
    /**
     * @remarks
     * The storage bucket.
     *
     * @example
     * pfs-xxx.oss-[regionId]-internal.aliyuncs.com
     */
    bucket?: string;
    /**
     * @remarks
     * The AccessKey ID of the storage bucket.
     *
     * @example
     * xxx
     */
    bucketAccessKeyId?: string;
    /**
     * @remarks
     * The mapping path.
     *
     * @example
     * /test
     */
    path?: string;
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
export declare class DescribePolarFsMappingResponseBody extends $dara.Model {
    /**
     * @remarks
     * The default AccessKey ID at the instance level.
     *
     * @example
     * xxx
     */
    defaultAccessKeyId?: string;
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 1
     */
    pageNumber?: string;
    /**
     * @remarks
     * The number of records on the current page.
     *
     * @example
     * 1
     */
    pageRecordCount?: string;
    /**
     * @remarks
     * The number of entries per page. Valid values:
     *
     * - **30**
     *
     * - **50**
     *
     * - **100**
     *
     * @example
     * 30
     */
    pageSize?: string;
    /**
     * @remarks
     * The list of path mappings.
     */
    pathMappingItems?: DescribePolarFsMappingResponseBodyPathMappingItems[];
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 925B84D9-CA72-432C-95CF-738C22******
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of records.
     *
     * @example
     * 1
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
