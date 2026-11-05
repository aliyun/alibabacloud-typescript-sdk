import * as $dara from '@darabonba/typescript';
export declare class TagResourcesRequestTag extends $dara.Model {
    /**
     * @remarks
     * The tag key. The tag key **cannot** be empty or duplicate.
     *
     * > Duplicate tag keys are overwritten.
     *
     * This parameter is required.
     *
     * @example
     * testkey1
     */
    key?: string;
    /**
     * @remarks
     * The tag value. The tag value **can** be empty.
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
export declare class TagResourcesRequest extends $dara.Model {
    ownerId?: number;
    /**
     * @remarks
     * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/610399.html) operation to query the region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The instance ID.
     *
     * This parameter is required.
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
     * - **INSTANCE**: regular ApsaraDB RDS instances.
     * - **CUSTOM**: ApsaraDB RDS Custom instances.
     * - **CUSTOMDEPLOYMENTSET**: ApsaraDB RDS Custom deployment sets.
     * - **CUSTOMDISK**: ApsaraDB RDS Custom cloud disks.
     * - **CUSTOMSNAPSHOT**: ApsaraDB RDS Custom snapshots.
     *
     * This parameter is required.
     *
     * @example
     * INSTANCE
     */
    resourceType?: string;
    /**
     * @remarks
     * The list of tags.
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
