import * as $dara from '@darabonba/typescript';
export declare class DescribeApplicationsRequestTag extends $dara.Model {
    /**
     * @remarks
     * The tag key.
     *
     * @example
     * testKey
     */
    key?: string;
    /**
     * @remarks
     * The tag value.
     *
     * @example
     * testValue
     */
    value?: string;
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
export declare class DescribeApplicationsRequest extends $dara.Model {
    /**
     * @remarks
     * The list of application IDs. If specified, only the information about these applications is returned.
     *
     * @example
     * pa-**************
     */
    applicationIds?: string;
    /**
     * @remarks
     * The application engine filter.
     *
     * @example
     * polardb_polarclaw
     */
    applicationTypes?: string;
    /**
     * @remarks
     * The PolarDB instance ID. If specified, only the application information related to this PolarDB instance is returned.
     *
     * @example
     * pc-**************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The page number. Default value: 1.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page. Valid values:
     * * **30**
     * * **50**
     * * **100**
     *
     * Default value: **30**.
     *
     * @example
     * 30
     */
    pageSize?: number;
    /**
     * @remarks
     * The region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    /**
     * @remarks
     * The tag.
     */
    tag?: DescribeApplicationsRequestTag[];
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
