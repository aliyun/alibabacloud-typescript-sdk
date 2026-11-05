import * as $dara from '@darabonba/typescript';
export declare class DescribeDBLinksResponseBodyDBLinkInfos extends $dara.Model {
    /**
     * @remarks
     * The ID of the source cluster that the database link connects.
     *
     * @example
     * pc-a*************
     */
    DBInstanceName?: string;
    /**
     * @remarks
     * The name of the database link.
     *
     * @example
     * dblink_test
     */
    DBLinkName?: string;
    /**
     * @remarks
     * The name of the source database of the database link.
     *
     * @example
     * testdb1
     */
    sourceDBName?: string;
    /**
     * @remarks
     * The account of the destination database of the database link.
     *
     * @example
     * testacc
     */
    targetAccount?: string;
    /**
     * @remarks
     * The ID of the destination cluster that the database link connects.
     *
     * > If the destination cluster is not a PolarDB for Oracle cluster, the returned value is empty.
     *
     * @example
     * pc-b************
     */
    targetDBInstanceName?: string;
    /**
     * @remarks
     * The name of the destination database of the database link.
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
     * The ID of the cluster.
     *
     * @example
     * pc-a*************
     */
    DBInstanceName?: string;
    /**
     * @remarks
     * Details about the database links.
     */
    DBLinkInfos?: DescribeDBLinksResponseBodyDBLinkInfos[];
    /**
     * @remarks
     * The ID of the request.
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
