import * as $dara from '@darabonba/typescript';
export declare class DescribeDBLinksResponseBodyDBLinkInfos extends $dara.Model {
    /**
     * @remarks
     * The ID of the source cluster for the DBLink.
     *
     * @example
     * pc-a*************
     */
    DBInstanceName?: string;
    /**
     * @remarks
     * The name of the DBLink.
     *
     * @example
     * dblink_test
     */
    DBLinkName?: string;
    /**
     * @remarks
     * The name of the source database for the DBLink.
     *
     * @example
     * testdb1
     */
    sourceDBName?: string;
    /**
     * @remarks
     * The target database account for the DBLink.
     *
     * @example
     * testacc
     */
    targetAccount?: string;
    /**
     * @remarks
     * The ID of the target cluster for the DBLink.
     *
     * > If the target is not a PolarDB for PostgreSQL (Compatible with Oracle) cluster, this parameter is empty.
     *
     * @example
     * pc-b************
     */
    targetDBInstanceName?: string;
    /**
     * @remarks
     * The name of the target database for the DBLink.
     *
     * @example
     * testdb2
     */
    targetDBName?: string;
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
export declare class DescribeDBLinksResponseBody extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * @example
     * pc-a*************
     */
    DBInstanceName?: string;
    /**
     * @remarks
     * The DBLink information set.
     */
    DBLinkInfos?: DescribeDBLinksResponseBodyDBLinkInfos[];
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 45D24263-7E3A-4140-9472-************
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
