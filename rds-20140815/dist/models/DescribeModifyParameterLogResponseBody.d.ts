import * as $dara from '@darabonba/typescript';
export declare class DescribeModifyParameterLogResponseBodyItemsParameterChangeLog extends $dara.Model {
    modifyTime?: string;
    newParameterValue?: string;
    oldParameterValue?: string;
    parameterName?: string;
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
export declare class DescribeModifyParameterLogResponseBodyItems extends $dara.Model {
    parameterChangeLog?: DescribeModifyParameterLogResponseBodyItemsParameterChangeLog[];
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
export declare class DescribeModifyParameterLogResponseBody extends $dara.Model {
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
     * The database engine type.
     *
     * @example
     * mysql
     */
    engine?: string;
    /**
     * @remarks
     * The database engine version.
     *
     * @example
     * 5.6
     */
    engineVersion?: string;
    items?: DescribeModifyParameterLogResponseBodyItems;
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page.
     *
     * @example
     * 1
     */
    pageRecordCount?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * C8E88DED-533F-4B3C-9207-731FBF394CCA
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of log records.
     *
     * @example
     * 1
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
