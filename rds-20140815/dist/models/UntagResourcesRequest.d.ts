import * as $dara from '@darabonba/typescript';
export declare class UntagResourcesRequest extends $dara.Model {
    /**
     * @remarks
     * Specifies whether to remove all tags from the instance. Valid values:
     * * **true**
     * * **false**
     *
     * Default value: **false**.
     * > This parameter takes effect only when **TagKey.N** is not specified.
     *
     * @example
     * false
     */
    all?: boolean;
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
     * The list of instance IDs. You can remove labels from N instances at a time. Valid values of N: **1** to **50**.
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
     * - **INSTANCE**: Regular ApsaraDB RDS instance.
     * - **CUSTOM**: ApsaraDB RDS Custom instance.
     * - **CUSTOMDEPLOYMENTSET**: ApsaraDB RDS Custom deployment set.
     * - **CUSTOMDISK**: ApsaraDB RDS Custom cloud disk.
     * - **CUSTOMSNAPSHOT**: ApsaraDB RDS Custom snapshot.
     *
     * This parameter is required.
     *
     * @example
     * INSTANCE
     */
    resourceType?: string;
    /**
     * @remarks
     * The tag keys. You can remove N tag keys at a time. Valid values of N: **1** to **20**. Empty strings are not allowed.
     *
     * @example
     * testkey1
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
