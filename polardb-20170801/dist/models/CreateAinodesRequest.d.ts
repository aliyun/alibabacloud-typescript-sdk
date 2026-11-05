import * as $dara from '@darabonba/typescript';
export declare class CreateAINodesRequestDBNodes extends $dara.Model {
    /**
     * @remarks
     * The node specifications.
     *
     * @example
     * polar.mysql.g4.xlarge.gu10
     */
    DBNodeClass?: string;
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
export declare class CreateAINodesRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * > Call the [DescribeAIDBClusters](https://api.aliyun.com/api/polardb/2017-08-01/DescribeAIDBClusters) operation to query information about all clusters in your account, including cluster IDs.
     *
     * @example
     * pm-xxxxxx
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The information about the nodes to add.
     */
    DBNodes?: CreateAINodesRequestDBNodes[];
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
