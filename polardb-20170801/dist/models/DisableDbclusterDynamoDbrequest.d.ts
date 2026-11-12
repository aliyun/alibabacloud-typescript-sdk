import * as $dara from '@darabonba/typescript';
export declare class DisableDBClusterDynamoDBRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query all clusters in the target region, including cluster IDs. Usage notes: Status prerequisite: The DBClusterStatus of the cluster must be Running. After you call EnableDBClusterDynamoDB, the cluster enters the ConfigSwitching transitional state. You must poll DescribeDBClusterAttribute and wait for the cluster to recover. Usage notes: You must first call EnableDBClusterDynamoDB to enable the DynamoDB compatibility mode. Only PostgreSQL clusters are supported.
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
