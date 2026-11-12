import * as $dara from '@darabonba/typescript';
export declare class ModifyDBClusterVpcRequest extends $dara.Model {
    /**
     * @remarks
     * The cluster ID. This operation is supported only for clusters of specific categories. MySQL Normal and Exclusive clusters are not supported. You can call the DescribeDBClusters operation to query the cluster category before you call this operation. Note: This operation is supported only for clusters of specific categories. MySQL Normal and Exclusive clusters are not supported. Before calling this operation, call DescribeDBClusters to confirm the cluster category.
     *
     * This parameter is required.
     *
     * @example
     * pc-*************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * Specifies whether to switch existing endpoints. Valid values:
     * - **NONE**: Does not switch existing endpoints.
     * - **ALL**: Switches existing endpoints.
     *
     * This parameter is required.
     *
     * @example
     * NONE
     */
    existedEndpointSwitchType?: string;
    ownerAccount?: string;
    ownerId?: number;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The specified VPC ID.
     *
     * @example
     * vpc-*******************
     */
    VPCId?: string;
    /**
     * @remarks
     * The specified vSwitch ID.
     *
     * This parameter is required.
     *
     * @example
     * vsw-**********
     */
    vSwitchId?: string;
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
