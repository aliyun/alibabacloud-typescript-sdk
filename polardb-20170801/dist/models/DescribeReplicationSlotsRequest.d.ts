import * as $dara from '@darabonba/typescript';
export declare class DescribeReplicationSlotsRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the PolarDB cluster to query. This operation is applicable only to PostgreSQL clusters. If you specify the ID of a cluster that uses another database engine, the InvalidDBType.Malformed error is returned.
     *
     * This parameter is required.
     *
     * @example
     * pc-test123456
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The name of the child node of the distributed instance, which is used to filter replication slots.
     *
     * @example
     * testGroup
     */
    subGroupName?: string;
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
