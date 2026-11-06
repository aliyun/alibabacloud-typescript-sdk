import * as $dara from '@darabonba/typescript';
export declare class ListTagResourcesRequestTag extends $dara.Model {
    /**
     * @remarks
     * The tag key. To query the details of all target clusters under multiple tags, click **Add** to add more tags.
     *
     * >* You must specify at least one of the ResourceId.N and Tag.N.Key parameters.
     * >* If you specify the Tag.N.Key parameter, you can add up to 20 tag key-value pairs at a time.
     *
     * @example
     * type
     */
    key?: string;
    /**
     * @remarks
     * The tag value corresponding to the tag key. An empty string is allowed.
     *
     * @example
     * test
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
     * The token used to return more results. You do not need to specify this parameter for the first query. If the first query does not return all results, you can pass the token returned in the previous response to the next query to obtain more results.
     *
     * @example
     * 212db86sca4384811e0b5e8707*******
     */
    nextToken?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query available region IDs.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The ID of the target cluster. To query the tags of multiple clusters, click **Add** to add more cluster IDs.
     *
     * > * You must specify at least one of the ResourceId.N and Tag.N.Key parameters.
     * > * If you specify the ResourceId.N parameter, you can add up to 50 cluster IDs at a time.
     *
     * @example
     * ["pc-***************"]
     */
    resourceId?: string[];
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The resource type. Set the value to **cluster**.
     *
     * This parameter is required.
     *
     * @example
     * cluster
     */
    resourceType?: string;
    /**
     * @remarks
     * The list of tags.
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
