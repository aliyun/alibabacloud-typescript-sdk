import * as $dara from '@darabonba/typescript';
export declare class DisableDBClusterDynamoDBRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the cluster.
     *
     * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to list all clusters in the destination region, including their IDs.
     *
     * This parameter is required.
     *
     * @example
     * pc-************
     */
    DBClusterId?: string;
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
