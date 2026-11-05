import * as $dara from '@darabonba/typescript';
export declare class ModifyDBInstanceReplicationSwitchRequest extends $dara.Model {
    /**
     * @remarks
     * Instance ID of the instance. You can call the DescribeDBInstances operation to query instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-bp*****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * Specifies whether to enable or disable the native replication mode. Valid values:
     * - **ON**: enables the native replication mode.
     * - **OFF**: disables the native replication mode.
     *
     * This parameter is required.
     *
     * @example
     * ON
     */
    externalReplication?: string;
    /**
     * @remarks
     * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/26243.html) operation to query the region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The ID of the resource group. This parameter can be left empty.
     *
     * @example
     * rg-acfmy****
     */
    resourceGroupId?: string;
    resourceOwnerId?: number;
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
