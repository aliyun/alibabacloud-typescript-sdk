import * as $dara from '@darabonba/typescript';
export declare class UntagResourcesRequest extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to remove all tags. Valid values:
     * - **true**: Removes all tags.
     * - **false**: Does not remove all tags.
     * Default value: **false**.
     * > This parameter takes effect only when `TagKey.N` is empty.
     *
     * @example
     * true
     */
    all?: boolean;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The region ID.
     *
     * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query available regions.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The ID of the cluster.
     *
     * This parameter is required.
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
     * The tag key.
     *
     * @example
     * ["type"]
     */
    tagKey?: string[];
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
