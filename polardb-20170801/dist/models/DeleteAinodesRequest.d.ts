import * as $dara from '@darabonba/typescript';
export declare class DeleteAINodesRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * > Call the [DescribeAIDBClusters](https://api.aliyun.com/api/polardb/2017-08-01/DescribeAIDBClusters) operation to view the cluster ID.
     *
     * @example
     * pm-xxxxxx
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The IDs of the nodes to delete.
     */
    DBNodeId?: string[];
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
