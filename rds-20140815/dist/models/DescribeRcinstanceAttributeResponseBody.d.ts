import * as $dara from '@darabonba/typescript';
export declare class DescribeRCInstanceAttributeResponseBodyDataDisksDataDisk extends $dara.Model {
    category?: string;
    deleteWithInstance?: boolean;
    /**
     * @example
     * /dev/xvdb
     */
    device?: string;
    encrypted?: string;
    performanceLevel?: string;
    size?: number;
    /**
     * @example
     * rcds-bp18um4r4f2fve24**
     */
    snapshotId?: string;
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
export declare class DescribeRCInstanceAttributeResponseBodyDataDisks extends $dara.Model {
    dataDisk?: DescribeRCInstanceAttributeResponseBodyDataDisksDataDisk[];
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
export declare class DescribeRCInstanceAttributeResponseBodyDedicatedHostAttribute extends $dara.Model {
    /**
     * @remarks
     * The ID of the dedicated host.
     *
     * @example
     * None
     */
    dedicatedHostId?: string;
    /**
     * @remarks
     * The name of the dedicated host.
     *
     * @example
     * None
     */
    dedicatedHostName?: string;
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
export declare class DescribeRCInstanceAttributeResponseBodyEipAddress extends $dara.Model {
    /**
     * @remarks
     * The ID of the EIP.
     *
     * @example
     * eip-bp14k3rz6cbg6zxbe****
     */
    allocationId?: string;
    /**
     * @remarks
     * The Internet bandwidth throttling of the EIP. Unit: Mbit/s.
     *
     * @example
     * 5
     */
    bandwidth?: number;
    /**
     * @remarks
     * The billing method for network usage of the instance. Valid values:
     *
     * - **paybytraffic**: pay-by-traffic.
     * - **paybybandwidth**: pay-by-bandwidth.
     * > In **pay-by-traffic** mode, the peak inbound and outbound bandwidth values are upper limits and are not guaranteed. During resource contention, the peak bandwidth may be limited. If your business requires guaranteed bandwidth, use the **pay-by-bandwidth** mode.
     *
     * @example
     * paybytraffic
     */
    internetChargeType?: string;
    /**
     * @remarks
     * The EIP address.
     *
     * @example
     * 8.147.XXX.XXX
     */
    ipAddress?: string;
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
export declare class DescribeRCInstanceAttributeResponseBodyInnerIpAddress extends $dara.Model {
    ipAddress?: string[];
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
export declare class DescribeRCInstanceAttributeResponseBodyOperationLocksLockReason extends $dara.Model {
    lockReason?: string;
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
export declare class DescribeRCInstanceAttributeResponseBodyOperationLocks extends $dara.Model {
    lockReason?: DescribeRCInstanceAttributeResponseBodyOperationLocksLockReason[];
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
export declare class DescribeRCInstanceAttributeResponseBodyPublicIpAddress extends $dara.Model {
    ipAddress?: string[];
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
export declare class DescribeRCInstanceAttributeResponseBodySecurityGroupIds extends $dara.Model {
    securityGroupId?: string[];
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
export declare class DescribeRCInstanceAttributeResponseBodySystemDisk extends $dara.Model {
    /**
     * @remarks
     * A reserved parameter.
     *
     * @example
     * None
     */
    deleteWithInstance?: boolean;
    /**
     * @remarks
     * Indicates whether the cloud disk is encrypted. Valid values:
     *
     * - **true**: Yes.
     * - **false**: No.
     *
     * @example
     * false
     */
    encrypted?: string;
    /**
     * @remarks
     * The category of the system cloud disk. Valid values:
     *
     * - **cloud_efficiency**: ultra disk.
     * - **cloud_ssd**: standard SSD.
     * - **cloud_essd**: ESSD.
     * - **cloud_auto**: premium performance disk.
     *
     * @example
     * cloud_essd
     */
    systemDiskCategory?: string;
    /**
     * @remarks
     * The performance level of the system cloud disk when it is an ESSD. Valid values:
     *
     * - **PL0**
     * - **PL1**
     * - **PL2**
     * - **PL3**
     *
     * @example
     * PL1
     */
    systemDiskPerformanceLevel?: string;
    /**
     * @remarks
     * The size of the system cloud disk. Unit: GiB.
     *
     * @example
     * 40
     */
    systemDiskSize?: number;
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
export declare class DescribeRCInstanceAttributeResponseBodyTagsTag extends $dara.Model {
    resourceId?: string;
    resourceType?: string;
    tagKey?: string;
    tagValue?: string;
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
export declare class DescribeRCInstanceAttributeResponseBodyTags extends $dara.Model {
    tag?: DescribeRCInstanceAttributeResponseBodyTagsTag[];
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
export declare class DescribeRCInstanceAttributeResponseBodyVpcAttributesPrivateIpAddress extends $dara.Model {
    ipAddress?: string[];
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
export declare class DescribeRCInstanceAttributeResponseBodyVpcAttributes extends $dara.Model {
    /**
     * @remarks
     * The IP address of the cloud service, which is used for network connectivity between cloud services in a VPC.
     *
     * @example
     * None
     */
    natIpAddress?: string;
    privateIpAddress?: DescribeRCInstanceAttributeResponseBodyVpcAttributesPrivateIpAddress;
    /**
     * @remarks
     * The vSwitch ID.
     *
     * @example
     * vsw-bp1nt15muovrc5qdj****
     */
    vSwitchId?: string;
    /**
     * @remarks
     * The VPC ID.
     *
     * @example
     * vpc-2zeu747v4765aw2id****
     */
    vpcId?: string;
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
export declare class DescribeRCInstanceAttributeResponseBody extends $dara.Model {
    /**
     * @remarks
     * Indicates whether auto-renewal is enabled for the instance. Valid values:
     *
     * * **true**: Yes.
     * * **false**: No.
     *
     * @example
     * false
     */
    autoRenew?: boolean;
    /**
     * @remarks
     * The ID of the cluster to which the instance belongs.
     * > This parameter will be deprecated. To ensure compatibility, use other parameters instead.
     *
     * @example
     * None
     */
    clusterId?: string;
    /**
     * @remarks
     * The number of vCPUs.
     *
     * @example
     * 4
     */
    cpu?: number;
    /**
     * @remarks
     * Indicates whether the instance is added to an ACK cluster. Valid values:
     *
     * - **1**: Yes.
     * - **0**: No.
     *
     * @example
     * 0
     */
    createMode?: number;
    /**
     * @remarks
     * The time when the instance was created. The time is displayed in UTC and follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format.
     *
     * @example
     * 2024-04-22T06:52:23Z
     */
    creationTime?: string;
    /**
     * @remarks
     * The performance mode of the burstable instance.
     *
     * @example
     * None
     */
    creditSpecification?: string;
    dataDisks?: DescribeRCInstanceAttributeResponseBodyDataDisks;
    /**
     * @remarks
     * The database engine type. Valid values:
     *
     * - **mssql**: SQL Server.
     * - **mysql**: MySQL.
     *
     * @example
     * mysql
     */
    dbType?: string;
    /**
     * @remarks
     * The dedicated host attributes.
     *
     * **if can be null:**
     * true
     */
    dedicatedHostAttribute?: DescribeRCInstanceAttributeResponseBodyDedicatedHostAttribute;
    /**
     * @remarks
     * Indicates whether release protection is enabled. Valid values:
     * * **true**: Enabled.
     * * **false**: Disabled.
     *
     * @example
     * false
     *
     * **if can be null:**
     * false
     */
    deletionProtection?: boolean;
    /**
     * @remarks
     * The ID of the deployment set.
     *
     * @example
     * ds-uf6c8qerk019bj1l****
     */
    deploymentSetId?: string;
    /**
     * @remarks
     * The description of the instance.
     *
     * @example
     * test
     */
    description?: string;
    /**
     * @remarks
     * A reserved parameter.
     *
     * @example
     * None
     */
    diskType?: string;
    /**
     * @remarks
     * The corresponding ECS instance family.
     *
     * @example
     * ecs.g6.2xlarge
     */
    ecsInstanceType?: string;
    /**
     * @remarks
     * The information about the associated elastic IP address (EIP).
     */
    eipAddress?: DescribeRCInstanceAttributeResponseBodyEipAddress;
    /**
     * @remarks
     * Indicates whether the jumbo frame feature is enabled for the instance. Valid values:
     *
     * - **true**: Enabled.
     *
     * - **false**: Disabled.
     *
     * @example
     * false
     */
    enableJumboFrame?: boolean;
    /**
     * @remarks
     * The expiration time. The time is displayed in UTC and follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format.
     *
     * @example
     * 2024-08-10T00:00:00Z
     */
    expiredTime?: string;
    /**
     * @remarks
     * The number of GPUs.
     *
     * @example
     * 2
     *
     * **if can be null:**
     * false
     */
    gpu?: number;
    /**
     * @remarks
     * The GPU type.
     *
     * @example
     * NVIDIA V100
     */
    gpuTypes?: string;
    /**
     * @remarks
     * The hostname of the instance.
     *
     * @example
     * iZ2zej1n3cin51rlmby****
     */
    hostName?: string;
    /**
     * @remarks
     * The host storage type. Valid values:
     * * **dhg_cloud_ssd**: standard SSD.
     * * **dhg_local_ssd**: local SSD.
     *
     * @example
     * dhg_cloud_ssd
     */
    hostType?: string;
    /**
     * @remarks
     * The ID of the image that the instance runs.
     *
     * @example
     * m-2oqiu973jwcxe****
     */
    imageId?: string;
    innerIpAddress?: DescribeRCInstanceAttributeResponseBodyInnerIpAddress;
    /**
     * @remarks
     * The billing method of the instance. Valid values:
     * * **PrePaid**: subscription.
     * * **PostPaid**: pay-as-you-go.
     *
     * @example
     * PostPaid
     */
    instanceChargeType?: string;
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rc-dh2jf9n6j4s14926****
     */
    instanceId?: string;
    /**
     * @remarks
     * The name of the instance.
     *
     * @example
     * test
     */
    instanceName?: string;
    /**
     * @remarks
     * The network type. Valid values:
     *
     * - **classic**: classic network.
     * - **vpc**: virtual private cloud (VPC).
     *
     * @example
     * vpc
     */
    instanceNetworkType?: string;
    /**
     * @remarks
     * The instance type.
     *
     * @example
     * mysql.x4.xlarge.6cm
     */
    instanceType?: string;
    /**
     * @remarks
     * The billing method for Internet bandwidth. Valid values:
     *
     * - **PayByBandwidth**: pay-by-bandwidth.
     * - **PayByTraffic**: pay-by-traffic.
     *
     * > In the **pay-by-traffic** pattern, the peak inbound and outbound bandwidth values are upper limits and are not guaranteed. During resource contention, the peak bandwidth may be limited. If your business requires guaranteed bandwidth, use the **pay-by-bandwidth** pattern.
     *
     * @example
     * PayByTraffic
     */
    internetChargeType?: string;
    /**
     * @remarks
     * The maximum inbound public bandwidth. Unit: Mbit/s.
     *
     * @example
     * 1
     */
    internetMaxBandwidthIn?: number;
    /**
     * @remarks
     * The maximum outbound public bandwidth. Unit: Mbit/s.
     *
     * @example
     * 5
     */
    internetMaxBandwidthOut?: number;
    /**
     * @remarks
     * Indicates whether the instance is an I/O optimized instance. Valid values:
     *
     * - **optimized**: I/O optimization.
     * - **none**: No I/O optimization.
     *
     * @example
     * optimized
     */
    ioOptimized?: string;
    /**
     * @remarks
     * The name of the key pair.
     *
     * @example
     * test_01
     */
    keyPairName?: string;
    /**
     * @remarks
     * The memory size. Unit: MiB.
     *
     * @example
     * 8192
     */
    memory?: number;
    /**
     * @remarks
     * The node type. A value of **rds_vnode** indicates that the node is a container node.
     *
     * @example
     * rds_vnode
     */
    nodeType?: string;
    operationLocks?: DescribeRCInstanceAttributeResponseBodyOperationLocks;
    publicIpAddress?: DescribeRCInstanceAttributeResponseBodyPublicIpAddress;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * EA2D4F34-01A7-46EB-A339-D80882135206
     */
    requestId?: string;
    /**
     * @remarks
     * The ID of the resource group.
     *
     * @example
     * rg-aeky6z354ks****
     */
    resourceGroupId?: string;
    securityGroupIds?: DescribeRCInstanceAttributeResponseBodySecurityGroupIds;
    /**
     * @remarks
     * The serial number of the instance.
     *
     * @example
     * b076f6ff-46d1-4234-a608-4e951ed6****
     */
    serialNumber?: string;
    /**
     * @remarks
     * The bidding policy for the pay-as-you-go instance. Valid values:
     *
     * - **NoSpot**: The instance is a regular pay-as-you-go instance.
     * - **SpotAsPriceGo**: The system automatically bids based on the current market price.
     *
     * @example
     * NoSpot
     */
    spotStrategy?: string;
    /**
     * @remarks
     * The instance status. Valid values:
     *
     * - **Pending**: The instance is being created.
     * - **Running**: The instance is running.
     * - **Starting**: The instance is starting.
     * - **Stopping**: The instance is pausing.
     * - **Stopped**: The instance is in a pause state.
     *
     * @example
     * Running
     */
    status?: string;
    /**
     * @remarks
     * Indicates whether the instance continues to be billed after it is stopped. Valid values:
     *
     * - **KeepCharging**: The instance continues to be billed after it is stopped, and resources are reserved.
     * - **StopCharging**: The instance is not billed after it is stopped. After the instance is stopped, resources such as vCPUs, memory, and public IP addresses are released. Whether the instance can be successfully restarted depends on resource availability in the current region.
     * - **Not-applicable**: The instance does not support the no fees for stopped instances feature.
     *
     * @example
     * Not-applicable
     */
    stoppedMode?: string;
    /**
     * @remarks
     * The specifications of the system cloud disk.
     */
    systemDisk?: DescribeRCInstanceAttributeResponseBodySystemDisk;
    tags?: DescribeRCInstanceAttributeResponseBodyTags;
    /**
     * @remarks
     * The custom data of the instance, which is a Base64-encoded string.
     *
     * > If the instance does not have custom data, an empty string is returned.
     *
     * @example
     * IyEvYmluL3NoCmVjaG8gXCJIZWxsbyBXb3JsZC4gVGhlIHRpbWUgaXMgbm93ICQoZGF0ZSAtUikhXCIgfCB0ZWUgL3Jvb3QvdXNlcmRhdGFfdGVzdDA2MjB0d28udHh0
     */
    userData?: string;
    /**
     * @remarks
     * The VLAN ID of the instance.
     * > This parameter will be deprecated soon. To improve compatibility, use other parameters instead.
     *
     * @example
     * None
     */
    vlanId?: string;
    /**
     * @remarks
     * The VPC attributes.
     *
     * **if can be null:**
     * true
     */
    vpcAttributes?: DescribeRCInstanceAttributeResponseBodyVpcAttributes;
    /**
     * @remarks
     * The zone ID.
     *
     * @example
     * cn-hangzhou-b
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
