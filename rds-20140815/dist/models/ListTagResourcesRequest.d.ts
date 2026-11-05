import * as $dara from '@darabonba/typescript';
export declare class ListTagResourcesRequestTag extends $dara.Model {
    /**
     * @remarks
     * The tag key. You can query N tag keys at a time. Valid values of N: **1** to **20**. Empty strings are not allowed.
     * >You must specify at least one of the **ResourceId** and **Tag.Key** parameters.
     *
     * @example
     * testkey1
     */
    key?: string;
    /**
     * @remarks
     * The tag value that corresponds to the tag key. You can query N tag values at a time. Valid values of N: **1** to **20**. Empty strings are allowed.
     *
     * @example
     * testvalue1
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
export declare class ListTagResourcesRequest extends $dara.Model {
    /**
     * @remarks
     * The token used to return more results. You do not need to specify this parameter for the first query. If a query does not return all results, pass in the token returned from the previous query to continue the query.
     *
     * @example
     * 212db86sca4384811e0b5e8707ec21345
     */
    nextToken?: string;
    ownerId?: number;
    /**
     * @remarks
     * The region ID. You can call the DescribeRegions operation to query available region IDs.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The list of instance IDs. You can query tags for multiple instances at a time. Valid values of the number of instances: **1** to **50**.
     * >You must specify at least one of the **ResourceId** and **Tag.Key** parameters.
     *
     * @example
     * rm-uf6wjk5xxxxxxx
     */
    resourceId?: string[];
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The resource type. Valid values:
     *
     * - **INSTANCE**: regular ApsaraDB RDS instance.
     * - **CUSTOM**: RDS Custom instance.
     * - **CUSTOMDEPLOYMENTSET**: RDS Custom deployment set.
     * - **CUSTOMDISK**: RDS Custom cloud disk.
     * - **CUSTOMSNAPSHOT**: RDS Custom snapshot.
     *
     * This parameter is required.
     *
     * @example
     * INSTANCE
     */
    resourceType?: string;
    /**
     * @remarks
     * The tags.
     */
    tag?: ListTagResourcesRequestTag[];
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
