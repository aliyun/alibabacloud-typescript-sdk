import * as $dara from '@darabonba/typescript';
export declare class TagResourcesRequestTag extends $dara.Model {
    /**
     * @remarks
     * The tag key. To add multiple tags to the cluster at once, click **Add** to specify multiple tag keys.
     *
     * > You can add a maximum of 20 tag pairs at a time. `Tag.n.Key` corresponds to `Tag.n.Value`.
     *
     * @example
     * type
     */
    key?: string;
    /**
     * @remarks
     * The tag value. To add multiple tags to the cluster at once, click **Add** to specify multiple tag values.
     *
     * > You can add a maximum of 20 tag pairs at a time. `Tag.n.Value` corresponds to `Tag.n.Key`.
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
export declare class TagResourcesRequest extends $dara.Model {
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The ID of the target cluster.
     *
     * This parameter is required.
     *
     * @example
     * pc-*****************
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
     *
     * This parameter is required.
     */
    tag?: TagResourcesRequestTag[];
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
