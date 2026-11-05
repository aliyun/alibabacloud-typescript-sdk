import * as $dara from '@darabonba/typescript';
export declare class RemoveTagsFromResourceRequestTag extends $dara.Model {
    /**
     * @remarks
     * The TagKey of the first tag to unbind. The tags to unbind include TagKey and TagValue. You can specify up to 5 pairs at a time. TagKey cannot be empty. TagValue can be empty.
     *
     * @example
     * key1
     */
    key?: string;
    /**
     * @remarks
     * The TagValue of the first tag to unbind. The tags to unbind include TagKey and TagValue. You can specify up to 5 pairs at a time. TagKey cannot be empty. TagValue can be empty.
     *
     * @example
     * value1
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
export declare class RemoveTagsFromResourceRequest extends $dara.Model {
    tag?: RemoveTagsFromResourceRequestTag[];
    /**
     * @remarks
     * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
     *
     * @example
     * ETnLKlblzczshOTUbOCz****
     */
    clientToken?: string;
    /**
     * @remarks
     * The instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceId?: string;
    ownerAccount?: string;
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
     * The resource group ID. You can call the ListResourceGroups operation to obtain the resource group ID.
     *
     * @example
     * rg-acfmy****
     */
    resourceGroupId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The tags to unbind, including TagKey and TagValue. Format: {"key1":"value1"}.
     * >TagKey cannot be empty. TagValue can be empty.
     *
     * @example
     * {"key1":"value1"}
     */
    tags?: string;
    /**
     * @remarks
     * The proxy mode ID.
     *
     * @example
     * API
     */
    proxyId?: string;
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
