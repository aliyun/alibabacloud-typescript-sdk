import * as $dara from '@darabonba/typescript';
export declare class CreateDBNodesRequestDBNode extends $dara.Model {
    /**
     * @remarks
     * The node specifications.
     *
     * This parameter is required.
     *
     * @example
     * mysql.n2.medium.xc
     */
    classCode?: string;
    /**
     * @remarks
     * The ID of the vSwitch used by the node.
     *
     * @example
     * vsw-bp1sxxsodv28ey5dl****
     */
    vswitchId?: string;
    /**
     * @remarks
     * The ID of the zone where the node resides.
     *
     * This parameter is required.
     *
     * @example
     * cn-zhangjiakou-a
     */
    zoneId?: string;
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
export declare class CreateDBNodesRequest extends $dara.Model {
    /**
     * @remarks
     * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can use the client to generate the value, and ensure that the value is unique across different requests.
     *
     * The value can contain only ASCII characters and cannot exceed 64 characters in length.
     *
     * @example
     * ETnLKlblzczshOTUbOCz****
     */
    clientToken?: string;
    /**
     * @remarks
     * Instance ID of the instance. You can call the DescribeDBInstances operation to query instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-2ze450g4ctg6t****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The list of cluster nodes.
     *
     * This parameter is required.
     */
    DBNode?: CreateDBNodesRequestDBNode[];
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The ID of the resource group. You can call the DescribeDBInstanceAttribute operation to query the ID.
     *
     * @example
     * rg-acfmy*****
     */
    resourceGroupId?: string;
    resourceOwnerAccount?: string;
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
